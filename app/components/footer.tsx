import React from "react";

function Footer() {
  return (
    <footer className="py-7 px-6 border-t border-stone-200 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-stone-500">
            © LeGoat DAO. A community-governed protocol.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/pokevaultsol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-500 hover:text-stone-700 transition-colors"
            >
              Follow us on X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
