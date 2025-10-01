import React from "react";

export default function ProductCard({
  image = "عکس",
  originalPrice = "۳,۰۰۰,۰۰۰ ریال",
  price = "۱,۲۰۰,۰۰۰ ریال",
  discountPercent = 80,
  progress = 60,
}) {
  const pct = Math.max(0, Math.min(100, progress)); 

  return (
    <div className="max-w-xs bg-white rounded-xl font-medium h-[280px] shadow-md overflow-hidden">
     
      <div className="relative">
        <img src={image} className="w-full h-40 object-cover" />
      </div>

      <div className="p-4 font-vazir">

        <div className="flex text-right flex-col gap-3">
          <span className="flex items-center gap-2 text-sm text-gray-400 ">
            <div className="line-through">
            {originalPrice}
            </div>
            <div className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {discountPercent}%
            </div>
          </span>

          <span className="text-lg font-bold text-gray-900">
            {price}
          </span>
        </div>

        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#ED1A3B] h-2 rounded-full transition-all duration-300"
              style={{ width: `${pct}%` }}
              role="progressbar"
              aria-valuenow={pct}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
