import React from "react";

function Treasury() {
  return (
    <section id="treasury" className="py-20 px-6 topographic-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-light tracking-tight mb-4">
            Treasury Holdings
          </h2>
          <p className="text-stone-600 max-w-2xl">
            Real-time view of the vault's card portfolio. All holdings are
            secured in professional-grade storage with full insurance coverage.
          </p>
        </div>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-stone-200">
              <div className="p-6 border-b border-stone-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Top Holdings</h3>
                  <a
                    className="text-sm text-stone-600 hover:text-stone-950 transition-colors"
                    href="/treasury"
                  >
                    View All Cards
                  </a>
                </div>
              </div>{" "}
              <div className="divide-y divide-stone-100">
                <div className="p-6 hover:bg-stone-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">Lucario VSTAR</h4>
                      <div className="flex items-center gap-4 text-sm text-stone-500">
                        <span>PSA 10</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium tabular mb-1">$125.25</div>
                      <div className="flex items-center gap-1 text-sm text-green-600">
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
                          className="lucide lucide-trending-up w-3 h-3"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                          <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                        <span className="tabular">+12.2%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 hover:bg-stone-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">Charizard</h4>
                      <div className="flex items-center gap-4 text-sm text-stone-500">
                        <span>PSA 9</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium tabular mb-1">$909.11</div>
                      <div className="flex items-center gap-1 text-sm text-red-600">
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
                          className="lucide lucide-trending-down w-3 h-3"
                        >
                          <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                          <polyline points="16 17 22 17 22 11"></polyline>
                        </svg>
                        <span className="tabular">-0.6%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 hover:bg-stone-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">Hypno</h4>
                      <div className="flex items-center gap-4 text-sm text-stone-500">
                        <span>PSA 10</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium tabular mb-1">$468.92</div>
                      <div className="flex items-center gap-1 text-sm text-green-600">
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
                          className="lucide lucide-trending-up w-3 h-3"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                          <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                        <span className="tabular">0%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 hover:bg-stone-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">Magneton</h4>
                      <div className="flex items-center gap-4 text-sm text-stone-500">
                        <span>PSA 9</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium tabular mb-1">$91.25</div>
                      <div className="flex items-center gap-1 text-sm text-green-600">
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
                          className="lucide lucide-trending-up w-3 h-3"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                          <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                        <span className="tabular">0%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 hover:bg-stone-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">
                        Rocket's Sneak Attack
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-stone-500">
                        <span>PSA 10</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium tabular mb-1">$154.57</div>
                      <div className="flex items-center gap-1 text-sm text-green-600">
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
                          className="lucide lucide-trending-up w-3 h-3"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                          <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                        <span className="tabular">+0.2%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="space-y-2.5">
            <div className="bg-white rounded-lg border border-stone-200 p-6">
              <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-4">
                Performance
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-stone-600">1D Return</span>
                    <span className="text-sm font-medium tabular text-green-600">
                      +1.7%
                    </span>
                  </div>
                  <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-stone-600">7D Return</span>
                    <span className="text-sm font-medium tabular text-green-600">
                      +1.7%
                    </span>
                  </div>
                  <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full w-5/6 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="bg-white rounded-lg border border-stone-200 p-6">
              <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-4">
                Allocation
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone-600">PSA 10</span>
                  <span className="text-sm font-medium tabular">76.7%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone-600">PSA 9</span>
                  <span className="text-sm font-medium tabular">13.3%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone-600">PSA 8/7</span>
                  <span className="text-sm font-medium tabular">3.3%</span>
                </div>
              </div>
            </div>{" "}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="text-sm text-amber-800 mb-2 font-medium">
                Reinvestment Active
              </div>
              <div className="text-xs text-amber-700 leading-relaxed">
                All fees collected this month will be automatically reinvested
                based on community vote.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Treasury;
