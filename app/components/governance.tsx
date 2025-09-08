import React from "react";

function Governance() {
  return (
    <section id="governance" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light tracking-tight mb-6">
              Governance <span className="text-gradient">Process</span>
            </h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Every significant decision goes through our three-phase governance
              process. This ensures thoughtful consideration and community
              consensus before any action is taken.
            </p>
            <div className="space-y-2">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C5C1D9] to-[#696773] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-white font-medium">1</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Proposal Submission</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Token holders submit proposals for card acquisitions or
                    sales, including detailed rationale and market analysis.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#29C6FF] to-[#0084FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-white font-medium">2</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Community Discussion</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    A 48-hour discussion period allows holders to debate merits,
                    share insights, and refine proposals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFFFD0] to-[#6647FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-white font-medium">3</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Voting &amp; Execution</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    72-hour voting period with automatic execution of approved
                    proposals through smart contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white card-frame rounded-lg p-8">
            <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-6">
              Recent Proposals
            </h3>
            <div className="space-y-4">
              <div className="card-frame p-6 border-l-4 border-vault-purple">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium">
                    Acquire Base Set Charizard PSA 10
                  </h4>
                  <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded">
                    Passed
                  </span>
                </div>
                <p className="text-sm text-stone-600 mb-3">
                  Purchase opportunity at 15% below recent market average
                </p>
                <div className="flex items-center gap-4 text-xs text-stone-500">
                  <span>2,341 votes</span>
                  <span>87% approval</span>
                </div>
              </div>
              <div className="card-frame p-6 border-l-4 border-vault-purple">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium">
                    Sell Japanese Promo Collection
                  </h4>
                  <span className="text-xs px-2 py-1 bg-amber-50 text-amber-700 rounded">
                    Voting
                  </span>
                </div>
                <p className="text-sm text-stone-600 mb-3">
                  Realize 43% profit on 2023 acquisition
                </p>
                <div className="flex items-center gap-4 text-xs text-stone-500">
                  <span>1,892 votes</span>
                  <span>18 hours remaining</span>
                </div>
              </div>
              <div className="card-frame p-6 border-l-4 border-vault-purple">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium">
                    Diversify into Vintage Japanese
                  </h4>
                  <span className="text-xs px-2 py-1 bg-stone-100 text-stone-600 rounded">
                    Discussion
                  </span>
                </div>
                <p className="text-sm text-stone-600 mb-3">
                  Allocate 25% of treasury to Japanese exclusive cards
                </p>
                <div className="flex items-center gap-4 text-xs text-stone-500">
                  <span>147 comments</span>
                  <span>36 hours until voting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Governance;
