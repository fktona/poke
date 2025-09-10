"use client";

import Link from "next/link";

import React, { useEffect, useState } from "react";
import { getCards, Card } from "../treasury/data";

function Treasury() {
  const [topHoldings, setTopHoldings] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopHoldings = async () => {
      try {
        setLoading(true);
        const allCards = await getCards();
        // Sort by price (descending) and take top 5
        const sorted = allCards
          .sort((a, b) => {
            const priceA = parseFloat(a.price.replace('$', '').replace(',', ''));
            const priceB = parseFloat(b.price.replace('$', '').replace(',', ''));
            return priceB - priceA;
          })
          .slice(0, 5);
        setTopHoldings(sorted);
        setError(null);
      } catch (err) {
        setError("Failed to load NFT data");
        console.error("Error fetching NFTs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopHoldings();
  }, []);
  return (
    <section id="treasury" className="py-20 px-6 topographic-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-light tracking-tight mb-4">
            Treasury Holdings
          </h2>
          <p className="text-stone-600 max-w-2xl font-inter">
            Real-time view of the treasury's NFT portfolio. All holdings are
            secured on-chain with full transparency and verifiable ownership.
          </p>
        </div>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-inter">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-stone-200">
              <div className="p-6 border-b border-stone-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Top Holdings</h3>
                  <Link
                    className="text-sm text-stone-600 hover:text-stone-950 transition-colors"
                    href="/treasury"
                  >
                    View All NFTs
                  </Link>
                </div>
              </div>
              <div className="divide-y divide-stone-100 font-inter">
                {loading ? (
                  <div className="p-6 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stone-900 mx-auto mb-2"></div>
                    <p className="text-stone-600 text-sm">Loading NFT data...</p>
                  </div>
                ) : error ? (
                  <div className="p-6 text-center">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                ) : topHoldings.length === 0 ? (
                  <div className="p-6 text-center">
                    <p className="text-stone-600 text-sm">No NFT data available</p>
                  </div>
                ) : (
                  topHoldings.map((nft, index) => (
                    <div key={index} className="p-6 hover:bg-stone-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{nft.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-stone-500">
                            <span>{nft.gradeLabel}</span>
                            <span>{nft.setTitle}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium tabular mb-1">{nft.price}</div>
                          <div className={`flex items-center gap-1 text-sm ${nft.isTrendUp ? 'text-green-600' : 'text-red-600'}`}>
                            {nft.isTrendUp ? (
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
                            ) : (
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
                            )}
                            <span className="tabular">{nft.trendPercent}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>{" "}
          <div className="space-y-2.5">
            <div className="bg-white rounded-lg border border-stone-200 p-6">
              <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-4">
                Performance
              </h3>
              <div className="space-y-4">
                {(() => {
                  const totalValue = topHoldings.reduce((sum, nft) => {
                    return sum + parseFloat(nft.price.replace('$', '').replace(',', ''));
                  }, 0);
                  
                  const totalProfit = topHoldings.reduce((sum, nft) => {
                    const price = parseFloat(nft.price.replace('$', '').replace(',', ''));
                    const trendPercent = parseFloat(nft.trendPercent.replace('%', '').replace('+', ''));
                    return sum + (price * trendPercent / 100);
                  }, 0);
                  
                  const avgReturn = totalValue > 0 ? (totalProfit / totalValue) * 100 : 0;
                  const isPositive = avgReturn >= 0;
                  
                  return (
                    <>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-stone-600">Portfolio Return</span>
                          <span className={`text-sm font-medium tabular ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                            {isPositive ? '+' : ''}{avgReturn.toFixed(1)}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}
                            style={{ width: `${Math.min(Math.abs(avgReturn) * 10, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-stone-600">Total Value</span>
                          <span className="text-sm font-medium tabular">
                            ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </span>
                        </div>
                        <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                          <div className="h-full w-full bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>{" "}
            <div className="bg-white rounded-lg border border-stone-200 p-6">
              <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-4">
                Token Types
              </h3>
              <div className="space-y-3">
                {(() => {
                  const tokenTypeCounts = topHoldings.reduce((acc, nft) => {
                    const type = nft.gradeLabel || 'Unknown';
                    acc[type] = (acc[type] || 0) + 1;
                    return acc;
                  }, {} as Record<string, number>);
                  
                  const total = topHoldings.length;
                  
                  return Object.entries(tokenTypeCounts).map(([type, count]) => (
                    <div key={type} className="flex items-center justify-between">
                      <span className="text-sm text-stone-600">{type}</span>
                      <span className="text-sm font-medium tabular">
                        {total > 0 ? ((count / total) * 100).toFixed(1) : 0}%
                      </span>
                    </div>
                  ));
                })()}
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
