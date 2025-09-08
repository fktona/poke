"use client";
import React, { useMemo, useState } from "react";
import { Card } from "../data";

type Props = { cards: Card[] };

export default function Table({ cards }: Props) {
  const parsePrice = (price: string): number => {
    return Number(price.replace(/[$,]/g, "")) || 0;
  };

  const parsePercent = (percent: string): number => {
    return (
      Number(percent.replace(/[%+]/g, "")) * (percent.includes("-") ? -1 : 1) ||
      0
    );
  };

  const formatCurrency = (value: number): string => {
    return value.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    });
  };

  const [sortKey, setSortKey] = useState<"total" | "change" | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const rows = useMemo(() => {
    return cards.map((card) => {
      const qty = 1;
      const unitPrice = parsePrice(card.price);
      const total = unitPrice * qty;
      const pct = parsePercent(card.trendPercent);
      const delta = unitPrice * (pct / 100);
      return { card, qty, unitPrice, total, pct, delta };
    });
  }, [cards]);

  const sortedRows = useMemo(() => {
    if (!sortKey) return rows;
    const factor = sortDir === "asc" ? 1 : -1;
    const copy = [...rows];
    copy.sort((a, b) => {
      if (sortKey === "total") return (a.total - b.total) * factor;
      return (a.pct - b.pct) * factor;
    });
    return copy;
  }, [rows, sortKey, sortDir]);

  const onSort = (key: "total" | "change") => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };
  return (
    <div className="bg-white font-inter rounded-lg border border-stone-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-stone-50 border-b border-stone-200">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-100">
                <div className="flex items-center gap-1">
                  Card Name
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-up w-3 h-3 opacity-30"
                  >
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </div>
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-stone-700">
                Set
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-100">
                <div className="flex items-center gap-1">
                  Grade
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-up w-3 h-3 opacity-30"
                  >
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </div>
              </th>
              <th className="text-center px-6 py-4 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-100">
                <div className="flex items-center justify-center gap-1">
                  Qty
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-up w-3 h-3 opacity-30"
                  >
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </div>
              </th>
              <th className="text-right px-6 py-4 text-sm font-medium text-stone-700">
                Unit Price
              </th>
              <th
                className="text-right px-6 py-4 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-100"
                onClick={() => onSort("total")}
              >
                <div className="flex items-center justify-end gap-1">
                  Total Value
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide w-3 h-3 ${
                      sortKey === "total" ? "" : "opacity-30"
                    }`}
                  >
                    {sortKey === "total" && sortDir === "asc" ? (
                      <path d="m18 15-6-6-6 6"></path>
                    ) : sortKey === "total" && sortDir === "desc" ? (
                      <path d="m6 9 6 6 6-6"></path>
                    ) : (
                      <path d="m18 15-6-6-6 6"></path>
                    )}
                  </svg>
                </div>
              </th>
              <th
                className="text-right px-6 py-4 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-100"
                onClick={() => onSort("change")}
              >
                <div className="flex items-center justify-end gap-1">
                  Change
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide w-3 h-3 ${
                      sortKey === "change" ? "" : "opacity-30"
                    }`}
                  >
                    {sortKey === "change" && sortDir === "asc" ? (
                      <path d="m18 15-6-6-6 6"></path>
                    ) : sortKey === "change" && sortDir === "desc" ? (
                      <path d="m6 9 6 6 6-6"></path>
                    ) : (
                      <path d="m18 15-6-6-6 6"></path>
                    )}
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {sortedRows.map(({ card, qty, total, pct, delta }) => {
              const isUp = card.isTrendUp;
              return (
                <tr
                  key={card.title}
                  className="hover:bg-stone-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium">{card.title}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-600">
                    {card.setTitle}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-stone-100 rounded">
                      {card.gradeLabel ?? "Ungraded"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center tabular-nums">{qty}</td>
                  <td className="px-6 py-4 text-right tabular-nums">
                    {card.price}
                  </td>
                  <td className="px-6 py-4 text-right font-medium tabular-nums">
                    {formatCurrency(total)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div
                      className={`flex items-center justify-end gap-1 ${
                        isUp ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {isUp ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trending-down w-3 h-3"
                        >
                          <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                          <polyline points="16 17 22 17 22 11"></polyline>
                        </svg>
                      )}
                      <span className="tabular-nums text-sm">
                        {card.trendPercent}
                      </span>
                    </div>
                    <div className="text-xs text-stone-500 tabular-nums">
                      {formatCurrency(Math.abs(delta))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
