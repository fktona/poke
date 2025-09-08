"use client";
import React, { useMemo, useState } from "react";
import Table from "./_components/table";
import Treasure from "./_components/treaures";
import { cards as allCards, Card } from "./data";

function Page() {
  const [query, setQuery] = useState("");
  const [grade, setGrade] = useState<string>("all");
  const [view, setView] = useState<"grid" | "table">("grid");

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
      if (grade === "graded") {
        results = results.filter((c) => Boolean(c.gradeLabel));
      } else if (grade === "Ungraded") {
        results = results.filter((c) => !c.gradeLabel);
      } else {
        results = results.filter((c) => c.gradeLabel === grade);
      }
    }
    return results;
  }, [query, grade]);

  return (
    <div className="pt-20 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Heading view={view} setView={setView} />
        <Stats />
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
      <a
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
      </a>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-light tracking-tight mb-2">
            Treasury Holdings
          </h1>
          <p className="text-stone-600 font-inter">
            Complete inventory of graded Pokémon cards in the vault
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

const Stats = () => {
  return (
    <div className="grid grid-cols-2 font-inter md:grid-cols-4 gap-4 mb-8">
      <div className="bg-stone-50 rounded-lg p-4">
        <div className="text-sm text-stone-500 mb-1">Total Value</div>
        <div className="text-2xl font-medium tabular-nums">$25,192.36</div>
      </div>
      <div className="bg-stone-50 rounded-lg p-4">
        <div className="text-sm text-stone-500 mb-1">Total Profit (1D)</div>
        <div className="text-2xl font-medium tabular-nums text-green-600">
          $148.99
        </div>
        <div className="text-xs text-green-600">+0.6%</div>
      </div>
      <div className="bg-stone-50 rounded-lg p-4">
        <div className="text-sm text-stone-500 mb-1">Total Cards</div>
        <div className="text-2xl font-medium tabular-nums">30</div>
      </div>
      <div className="bg-stone-50 rounded-lg p-4">
        <div className="text-sm text-stone-500 mb-1">Unique Cards</div>
        <div className="text-2xl font-medium tabular-nums">30</div>
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
          placeholder="Search cards..."
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
        <option value="all">All Grades</option>
        <option value="PSA 10">PSA 10</option>
        <option value="PSA 9">PSA 9</option>
        <option value="PSA 8">PSA 8</option>
        <option value="PSA 7">PSA 7</option>
        <option value="graded">All Graded</option>
        <option value="Ungraded">Ungraded</option>
      </select>
    </div>
  );
};
