import React from "react";
import Bicycle from "../assets/Bicycle.png";
import Helmet from "../assets/Helmet.png";
import Gear from "../assets/Gear.png";
import Shop from "../assets/Shop.png";
import Store from "../assets/Store.png";
import Discount from "../assets/Discount.png";

const icons = [
  { src: Store, label: "انبار", hiddenOnMobile: true },
  { src: Shop, label: "خرید اقساطی", hiddenOnMobile: true },
  { src: Discount, label: "پروموشن ویژه", hiddenOnMobile: true },
  { src: Bicycle, label: "دوچرخه" },
  { src: Helmet, label: "لوازم دوچرخه" },
  { src: Gear, label: "قطعات دوچرخه" },
];

export default function IconSection() {
  return (
    <div className="py-10 font-vazir">
      <div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 
                   gap-6 sm:gap-10 md:gap-14 justify-items-center 
                   mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-40 2xl:mx-56"
      >
        {icons.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center text-center transition-all duration-300
                        ${item.hiddenOnMobile ? "hidden md:flex" : ""}`}
          >
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 
                         flex items-center justify-center rounded-xl 
                         bg-gradient-to-br from-[#FF9966] to-[#FF5E62] 
                         shadow-md hover:shadow-lg hover:scale-110 
                         transition-transform duration-300 ease-out"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
              />
            </div>
            <span className="mt-2 text-xs sm:text-sm md:text-base text-gray-700">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
