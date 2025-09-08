#!/usr/bin/env node
/*
 Mirror CSS, fonts, and images from a URL. Rewrites CSS url(...) to local paths.
 Usage:
   node scripts/mirror-assets.js <url>
 Output:
   CSS  -> app/styles/vendor/
   assets (fonts/img/svg/etc) -> public/vendor/pokevault/
*/

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const VENDOR_DIR = path.join('public', 'vendor', 'pokevault');
const CSS_OUT_DIR = path.join('app', 'styles', 'vendor');
const CSS_VENDOR_DIR = path.join('public', 'vendor', 'pokevault', 'css');

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(
      url,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          Accept: '*/*',
        },
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const redirectUrl = new URL(res.headers.location, url).toString();
          res.resume();
          return resolve(fetchBuffer(redirectUrl));
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`Request failed ${res.statusCode}`));
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(Buffer.from(c)));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      }
    );
    req.on('error', reject);
  });
}

function fetchText(url) {
  return fetchBuffer(url).then((b) => b.toString('utf8'));
}

function toAbsoluteUrl(baseUrl, href) {
  if (!href) return null;
  if (/^data:/i.test(href)) return null;
  if (href.startsWith('//')) return 'https:' + href;
  try { return new URL(href, baseUrl).toString(); } catch { return null; }
}

function unique(arr) {
  return Array.from(new Set(arr));
}

function extractLinksFromHtml(html) {
  const links = [];
  // stylesheets and preload as=style
  const linkRe = /<link[^>]+rel=["'](?:stylesheet|preload)["'][^>]*?(?:as=["']style["'][^>]*?)?href=["']([^"']+)["'][^>]*>/gi;
  let m;
  while ((m = linkRe.exec(html))) links.push(m[1]);
  // images
  const imgRe = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  while ((m = imgRe.exec(html))) links.push(m[1]);
  // source srcset
  const srcsetRe = /\s(?:src|srcset)=["']([^"']+)["']/gi;
  while ((m = srcsetRe.exec(html))) links.push(...m[1].split(',').map((s) => s.trim().split(' ')[0]));
  // inline styles url(...)
  const styleUrlRe = /url\(([^)]+)\)/gi;
  while ((m = styleUrlRe.exec(html))) links.push(m[1].replace(/["']/g, ''));
  return unique(links);
}

function extractAssetUrlsFromCss(css) {
  const urls = [];
  const re = /url\(([^)]+)\)/gi;
  let m;
  while ((m = re.exec(css))) {
    const raw = m[1].trim().replace(/["']/g, '');
    if (!/^data:/i.test(raw)) urls.push(raw);
  }
  return unique(urls);
}

function classifyAsset(url) {
  const lower = url.split('?')[0].toLowerCase();
  if (/(?:\.woff2?|\.ttf|\.otf|\.eot)$/.test(lower)) return 'fonts';
  if (/(?:\.png|\.jpg|\.jpeg|\.gif|\.webp|\.svg|\.avif)$/.test(lower)) return 'img';
  if (/\.css$/.test(lower)) return 'css';
  return 'other';
}

async function main() {
  const url = process.argv[2];
  if (!url) {
    console.error('Usage: node scripts/mirror-assets.js <url>');
    process.exit(1);
  }

  ensureDir(VENDOR_DIR);
  ensureDir(CSS_OUT_DIR);
  ensureDir(CSS_VENDOR_DIR);

  const html = await fetchText(url);
  const rawLinks = extractLinksFromHtml(html);
  const absLinks = unique(rawLinks.map((h) => toAbsoluteUrl(url, h)).filter(Boolean));

  const cssLinks = absLinks.filter((u) => classifyAsset(u) === 'css');
  const otherLinks = absLinks.filter((u) => classifyAsset(u) !== 'css');

  const downloadedAssets = new Map();

  // Download and rewrite CSS files
  let cssIndex = 0;
  for (const cssUrl of cssLinks) {
    try {
      const css = await fetchText(cssUrl);
      const cssFileName = path.basename(cssUrl.split('?')[0]) || `style-${cssIndex}.css`;
      const cssVendorPath = path.join(CSS_VENDOR_DIR, cssFileName);
      // Save original CSS with original name into public vendor directory
      fs.writeFileSync(cssVendorPath, css, 'utf8');
      console.log(`Saved original CSS ${cssUrl} -> ${cssVendorPath}`);
      // Find assets referenced in CSS
      const assetUrls = extractAssetUrlsFromCss(css)
        .map((h) => toAbsoluteUrl(cssUrl, h))
        .filter(Boolean);

      // Download each asset and compute local path
      const rewritten = await (async () => {
        let out = css;
        for (const assetUrl of assetUrls) {
          if (!downloadedAssets.has(assetUrl)) {
            const kind = classifyAsset(assetUrl);
            const subdir = kind === 'fonts' ? 'fonts' : kind === 'img' ? 'img' : 'other';
            const fileName = path.basename(assetUrl.split('?')[0]);
            const localRel = path.join('vendor', 'pokevault', subdir, fileName).replace(/\\/g, '/');
            const localAbs = path.join(VENDOR_DIR, subdir);
            ensureDir(localAbs);
            try {
              const buf = await fetchBuffer(assetUrl);
              fs.writeFileSync(path.join(localAbs, fileName), buf);
              downloadedAssets.set(assetUrl, '/' + localRel);
              console.log(`Saved asset ${assetUrl} -> ${path.join(localAbs, fileName)}`);
            } catch (e) {
              console.warn(`Failed asset ${assetUrl}: ${e.message}`);
              continue;
            }
          }
          const localUrl = downloadedAssets.get(assetUrl);
          // Rewrite url(...) occurrences for this asset
          const safe = assetUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          out = out.replace(new RegExp(`url\\(["']?${safe}["']?\\)`, 'g'), `url(${localUrl})`);
        }
        return out;
      })();

      const cssFile = path.join(CSS_OUT_DIR, `vendor-${cssIndex}.css`);
      fs.writeFileSync(cssFile, rewritten, 'utf8');
      console.log(`Saved rewritten CSS ${cssUrl} -> ${cssFile}`);
      cssIndex += 1;
    } catch (e) {
      console.warn(`Failed CSS ${cssUrl}: ${e.message}`);
    }
  }

  // Download other discovered assets (images from HTML etc.)
  for (const asset of otherLinks) {
    try {
      const kind = classifyAsset(asset);
      const subdir = kind === 'fonts' ? 'fonts' : kind === 'img' ? 'img' : 'other';
      const fileName = path.basename(asset.split('?')[0]);
      const destDir = path.join(VENDOR_DIR, subdir);
      ensureDir(destDir);
      const buf = await fetchBuffer(asset);
      fs.writeFileSync(path.join(destDir, fileName), buf);
      console.log(`Saved asset ${asset} -> ${path.join(destDir, fileName)}`);
    } catch (e) {
      console.warn(`Failed asset ${asset}: ${e.message}`);
    }
  }

  console.log('Mirror complete.');
}

main().catch((e) => {
  console.error(e.stack || e.message);
  process.exit(1);
});


