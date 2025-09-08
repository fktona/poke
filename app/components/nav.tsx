import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-inter bg-white ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <button className="font-semibold cursor-pointer text-lg bg-gradient-to-b from-[#5237D5] to-white/0 inline-block text-transparent bg-clip-text tracking-tight">
              PokéVault
            </button>
            <div className="hidden md:flex items-center gap-8">
              <button className="text-sm text-stone-600 hover:text-stone-950 transition-colors bg-transparent border-none cursor-pointer">
                Overview
              </button>
              <button className="text-sm text-stone-600 hover:text-stone-950 transition-colors bg-transparent border-none cursor-pointer">
                Governance
              </button>
              <button className="text-sm text-stone-600 hover:text-stone-950 transition-colors bg-transparent border-none cursor-pointer">
                Treasury
              </button>
              <button className="text-sm text-stone-600 hover:text-stone-950 transition-colors bg-transparent border-none cursor-pointer">
                Voting
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 text-sm font-medium border border-vault-purple/20 rounded-lg cursor-pointer hover:bg-vault-purple/5 transition-colors">
              Join DAO
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
