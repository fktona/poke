#!/usr/bin/env node
/*
 Download all linked stylesheets from a page URL.
 Usage:
   node scripts/download-css.js <url> [outDir]
 Example:
   node scripts/download-css.js https://www.pokevaultsol.com/ app/styles
*/

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(
      url,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        },
      },
      (res) => {
        // Handle redirects
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const redirectUrl = new URL(res.headers.location, url).toString();
          res.resume();
          resolve(fetchUrl(redirectUrl));
          return;
        }

        if (res.statusCode !== 200) {
          res.resume();
          reject(new Error(`Request failed with status ${res.statusCode}`));
          return;
        }

        let data = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => resolve(data));
      }
    );
    req.on('error', reject);
  });
}

function toAbsoluteUrl(baseUrl, href) {
  if (!href) return null;
  if (href.startsWith('data:')) return null; // skip data URIs
  if (href.startsWith('//')) return 'https:' + href;
  try {
    return new URL(href, baseUrl).toString();
  } catch (_err) {
    return null;
  }
}

async function main() {
  const url = process.argv[2];
  const outDir = process.argv[3] || path.join('app', 'styles');

  if (!url) {
    console.error('Usage: node scripts/download-css.js <url> [outDir]');
    process.exit(1);
  }

  fs.mkdirSync(outDir, { recursive: true });

  const html = await fetchUrl(url);

  // Capture rel="stylesheet" and rel="preload" as="style"
  const linkRegex = /<link[^>]+rel=["'](?:stylesheet|preload)["'][^>]*?(?:as=["']style["'][^>]*?)?href=["']([^"']+)["'][^>]*>/gi;
  const hrefs = new Set();
  let match;
  while ((match = linkRegex.exec(html))) {
    hrefs.add(match[1]);
  }

  if (hrefs.size === 0) {
    console.log('No stylesheet links found.');
    return;
  }

  let index = 0;
  for (const href of hrefs) {
    const abs = toAbsoluteUrl(url, href);
    if (!abs) continue;

    try {
      const css = await fetchUrl(abs);
      const filePath = path.join(outDir, `downloaded-${index}.css`);
      fs.writeFileSync(filePath, css, 'utf8');
      console.log(`Saved ${abs} -> ${filePath}`);
      index += 1;
    } catch (err) {
      console.warn(`Failed to fetch ${abs}: ${err.message}`);
    }
  }

  console.log(`Downloaded ${index} stylesheet(s).`);
}

main().catch((err) => {
  console.error(err.stack || err.message);
  process.exit(1);
});


