import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              className="flex font-inter items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-arrow-left w-4 h-4"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Back to Home
            </Link>
          </div>
          <div>
            <h1 className="text-3xl font-light tracking-tight mb-2">
              Governance
            </h1>
            <p className="text-stone-600 font-inter">
              Participate in LeGoat's decentralized governance through Realms
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="w-full h-[800px] border border-stone-200 rounded-lg overflow-hidden">
          <iframe
            src="https://app.realms.today"
            className="w-full h-full"
            title="Realms Governance"
            allow="clipboard-read; clipboard-write"
          ></iframe>
        </div>
      </div>
      <footer className="border-t border-stone-200 bg-stone-50 font-inter">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-light mb-4">LeGoat</h3>
              <p className="text-stone-600 mb-4 max-w-md">
                A community-governed protocol for LeGoat card collectors,
                powered by decentralized governance and transparent treasury
                management.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  className="text-stone-400 hover:text-stone-600 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="https://discord.com"
                  className="text-stone-400 hover:text-stone-600 transition-colors"
                >
                  Discord
                </a>
                <a
                  href="https://github.com"
                  className="text-stone-400 hover:text-stone-600 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Protocol</h4>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>
                  <Link
                    className="hover:text-stone-900 transition-colors"
                    href="/treasury"
                  >
                    Treasury
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-stone-900 transition-colors"
                    href="/voting"
                  >
                    Governance
                  </Link>
                </li>
                <li>
                  <a
                    href="https://app.realms.today"
                    className="hover:text-stone-900 transition-colors"
                  >
                    LeGoat DAO
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>
                  <Link
                    href="#"
                    className="hover:text-stone-900 transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-stone-900 transition-colors"
                  >
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-stone-900 transition-colors"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-stone-500">
              © 2024 LeGoat. Built on Solana.
            </p>
            <div className="flex gap-6 text-sm text-stone-500 mt-4 md:mt-0">
              <a href="#" className="hover:text-stone-700 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-stone-700 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;
