"use client";
import React, { useMemo, useState, useEffect } from "react";
import Table from "./_components/table";
import Treasure from "./_components/treaures";
import { getCards, Card } from "./data";
import Link from "next/link";

function Page() {
  const [query, setQuery] = useState("");
  const [grade, setGrade] = useState<string>("all");
  const [view, setView] = useState<"grid" | "table">("grid");
  const [allCards, setAllCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch NFT data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const cards = await getCards();
        setAllCards(cards);
        setError(null);
      } catch (err) {
        setError("Failed to load NFT data");
        console.error("Error fetching NFTs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filtered: Card[] = useMemo(() => {
    let results = allCards;
    const q = query.trim().toLowerCase();
    if (q) {
      results = results.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.setTitle.toLowerCase().includes(q) ||
          (c.gradeLabel ?? "").toLowerCase().includes(q)
      );
    }
    if (grade !== "all") {
      results = results.filter((c) => c.gradeLabel === grade);
    }
    return results;
  }, [query, grade, allCards]);

  if (loading) {
    return (
      <div className="pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Heading view={view} setView={setView} />
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-900 mx-auto mb-4"></div>
              <p className="text-stone-600 font-inter">Loading NFT data...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Heading view={view} setView={setView} />
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <p className="text-red-600 font-inter mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-stone-900 text-white rounded-md hover:bg-stone-800 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Heading view={view} setView={setView} />
        <Stats cards={allCards} />
        <Search
          query={query}
          setQuery={setQuery}
          grade={grade}
          setGrade={setGrade}
        />
        {view === "grid" ? (
          <Treasure cards={filtered} />
        ) : (
          <Table cards={filtered} />
        )}
      </div>
    </div>
  );
}

export default Page;

const Heading = ({
  view,
  setView,
}: {
  view: "grid" | "table";
  setView: (v: "grid" | "table") => void;
}) => {
  return (
    <div className="mb-8">
      <Link
        className="inline-flex items-center gap-2 text-stone-600 font-inter hover:text-stone-950 transition-colors mb-4"
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
        <span className="text-sm">Back to Home</span>
      </Link>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-light tracking-tight mb-2">
            Treasury Holdings
          </h1>
          <p className="text-stone-600 font-inter">
            Complete inventory of NFTs in the treasury
          </p>
        </div>
        <div className="flex gap-2 font-inter">
          <button
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              view === "grid"
                ? "bg-stone-950 text-white"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
            onClick={() => setView("grid")}
            type="button"
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
              className="lucide lucide-layout-grid w-4 h-4"
            >
              <rect width="7" height="7" x="3" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="14" rx="1"></rect>
              <rect width="7" height="7" x="3" y="14" rx="1"></rect>
            </svg>
            Grid
          </button>
          <button
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              view === "table"
                ? "bg-stone-950 text-white"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
            onClick={() => setView("table")}
            type="button"
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
              className="lucide lucide-layout-table w-4 h-4"
            >
              <rect width="7" height="7" x="3" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="14" rx="1"></rect>
              <rect width="7" height="7" x="3" y="14" rx="1"></rect>
            </svg>
            Table
          </button>
        </div>
      </div>
    </div>
  );
};

const Stats = ({ cards }: { cards: Card[] }) => {
  const totalValue = cards.reduce((sum, card) => {
    const price = parseFloat(card.price.replace('$', '').replace(',', ''));
    return sum + price;
  }, 0);

  const totalProfit = cards.reduce((sum, card) => {
    const price = parseFloat(card.price.replace('$', '').replace(',', ''));
    const trendPercent = parseFloat(card.trendPercent.replace('%', '').replace('+', ''));
    return sum + (price * trendPercent / 100);
  }, 0);

  const uniqueCollections = new Set(cards.map(card => card.setTitle)).size;

  return (
    <div className="grid grid-cols-2 font-inter md:grid-cols-4 gap-4 mb-8">
      <div className="bg-stone-50 rounded-lg p-4">
        <div className="text-sm text-stone-500 mb-1">Total Value</div>
        <div className="text-2xl font-medium tabular-nums">${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
      </div>
      <div className="bg-stone-50 rounded-lg p-4">
        <div className="text-sm text-stone-500 mb-1">Total Profit (1D)</div>
        <div className={`text-2xl font-medium tabular-nums ${totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          ${Math.abs(totalProfit).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className={`text-xs ${totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {totalProfit >= 0 ? '+' : ''}{(totalProfit / totalValue * 100).toFixed(1)}%
        </div>
      </div>
      <div className="bg-stone-50 rounded-lg p-4">
        <div className="text-sm text-stone-500 mb-1">Total NFTs</div>
        <div className="text-2xl font-medium tabular-nums">{cards.length}</div>
      </div>
      <div className="bg-stone-50 rounded-lg p-4">
        <div className="text-sm text-stone-500 mb-1">Collections</div>
        <div className="text-2xl font-medium tabular-nums">{uniqueCollections}</div>
      </div>
    </div>
  );
};

const Search = ({
  query,
  setQuery,
  grade,
  setGrade,
}: {
  query: string;
  setQuery: (v: string) => void;
  grade: string;
  setGrade: (v: string) => void;
}) => {
  return (
    <div className="flex flex-col font-inter md:flex-row gap-4 mb-8 mt-8">
      <div className="flex-1 relative">
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
          className="lucide lucide-search w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <input
          type="text"
          placeholder="Search NFTs..."
          className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <select
        className="px-4 py-2 border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      >
        <option value="all">All Token Types</option>
        <option value="ERC721">ERC721</option>
        <option value="ERC1155">ERC1155</option>
        <option value="ERC20">ERC20</option>
      </select>
    </div>
  );
};
