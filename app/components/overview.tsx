import React from "react";

function Overview() {
  return (
    <section id="overview" className="py-20 px-6 topographic-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl text-gradient font-light tracking-tight mb-4">
            Core Principles
          </h2>
          <p className="text-black/70 text-lg font-light max-w-3xl">
            PokéVault operates on four fundamental principles that ensure
            fairness, transparency, and sustainable growth for all participants.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div
            className="flex gap-6 animate-fade-up"
            style={{ animationDelay: "0s" }}
          >
            <div className="text-[#B0A0FF]/[0.84] text-sm realtive top-5">
              01
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">
                Democratic Governance
              </h3>
              <p className="text-stone-600 leading-relaxed">
                One token equals one vote. Every holder has a voice in
                determining which cards to acquire and when to sell.
              </p>
            </div>
          </div>
          <div
            className="flex gap-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-[#B0A0FF]/[0.84] text-sm realtive top-5">
              02
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">Transparent Treasury</h3>
              <p className="text-stone-600 leading-relaxed">
                All transactions, holdings, and financial metrics are publicly
                visible on-chain. No hidden fees or opaque dealings.
              </p>
            </div>
          </div>
          <div className="flex gap-6 animate-fade-up duration-200">
            <div className="text-[#B0A0FF]/[0.84] text-sm realtive top-5">
              03
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">Profit Distribution</h3>
              <p className="text-stone-600 leading-relaxed">
                When cards are sold for profit, proceeds are distributed
                proportionally among all token holders.
              </p>
            </div>
          </div>
          <div className="flex gap-6 animate-fade-up duration-300">
            <div className="text-[#B0A0FF]/[0.84] text-sm realtive top-5">
              04
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">Compound Growth</h3>
              <p className="text-stone-600 leading-relaxed">
                Transaction fees are automatically reinvested to acquire more
                cards, creating a self-sustaining growth mechanism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
