import React from "react";
import Image from "next/image";
import Link from "next/link";
function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient-shift"></div>{" "}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-display text-5xl font-light mb-6 leading-tight">
              <span className="text-gradient ">Community-owned</span>
              <br />
              <span className="font-semibold">LeGoat card vault</span>
            </h1>{" "}
            <p className="text-lg text-black/70 font-light mb-8 font-inter leading-relaxed">
              A decentralized investment fund where token holders collectively
              decide which graded cards to acquire and when to realize profits.
              Every decision is transparent, every profit is shared.
            </p>{" "}
            <div className="flex items-center gap-4 mb-12 font-inter">
              <Link
                href="/treasury"
                className="md:px-14 px-8 cursor-pointer py-3.5 bg-gradient-to-r from-vault-indigo to-vault-purple text-white rounded-lg hover:shadow-glow transition-all duration-300"
              >
                View Collection
              </Link>
              <button className="w-36 cursor-pointer h-12 poke-button duration-300 hover:scale-105 transition-transform"></button>
            </div>{" "}
            <div className="grid grid-cols-3 gap-6 font-inter">
              <div className="card-frame p-4 tilt-card">
                <div className="text-2xl font-mono font-semibold number-glow text-vault-purple">
                  $25.2K
                </div>
                <div className="text-xs text-vault-indigo/60 mt-1">
                  Total Value
                </div>
              </div>
              <div className="card-frame p-4 tilt-card">
                <div className="text-2xl font-mono font-semibold flex items-center gap-1">
                  +1.7%
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
                    className="lucide lucide-trending-up w-4 h-4 text-vault-grass"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <div className="text-xs text-vault-indigo/60 mt-1">
                  7D Return
                </div>
              </div>
              <div className="card-frame p-4 tilt-card">
                <div className="text-2xl font-mono font-semibold">30</div>
                <div className="text-xs text-vault-indigo/60 mt-1">
                  Graded Cards
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="relative">
            <div className="relative h-96 flex items-center select-none justify-center">
              <div className="absolute inset-0 bg-gradient-radial from-vault-purple/10 via-transparent to-transparent"></div>{" "}
              <img
                src="https://www.pokevaultsol.com/cards.png"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
