import React from "react";
import { Card } from "../data";

type Props = { cards: Card[] };

function Treasure({ cards }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-lg border border-stone-200 overflow-hidden hover:shadow-lg transition-all duration-200"
        >
          <div className="relative aspect-[3/4] bg-gradient-to-br from-stone-100 to-stone-50">
            <img
              alt={card.title}
              loading="lazy"
              decoding="async"
              className="object-contain p-2"
              src={card.imageUrl}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
              }}
            />
            {card.gradeLabel && (
              <div className="absolute top-2 right-2">
                <span className="inline-flex px-2 py-1 text-xs font-bold rounded bg-stone-700 text-white">
                  {card.gradeLabel}
                </span>
              </div>
            )}
          </div>
          <div className="p-4">
            <h3
              className="font-semibold text-sm mb-1 line-clamp-1"
              title={card.title}
            >
              {card.title}
            </h3>
            <p
              className="text-xs text-stone-500 mb-3 line-clamp-1"
              title={card.setTitle}
            >
              {card.setTitle}
            </p>
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold tabular-nums">
                {card.price}
              </span>
              <div
                className={
                  "flex items-center gap-1 " +
                  (card.isTrendUp ? "text-green-600" : "text-red-600")
                }
              >
                {card.isTrendUp ? (
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
                <span className="text-xs tabular-nums">
                  {card.trendPercent}
                </span>
              </div>
            </div>
            <a
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700"
            >
              View on PriceCharting
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
                className="lucide lucide-external-link w-3 h-3"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Treasure;
