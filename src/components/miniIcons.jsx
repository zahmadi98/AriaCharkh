import React from "react";
import Bicycle from "../assets/Bicycle.png";
import Helmet from "../assets/Helmet.png";
import Gear from "../assets/Gear.png";
import Shop from "../assets/Shop.png";
import Store from "../assets/Store.png";
import Discount from "../assets/Discount.png"

const icons = [
  { src: Store, label: "انبار" },
  { src: Shop, label: "خرید اقساطی" },
  { src: Discount, label: "پروموشن ویژه" },
  { src: Bicycle, label: "دوچرخه" },
  { src: Helmet, label: "لوازم دوچرخه" },
  { src: Gear, label: "قطعات دوچرخه" },
  
];

export default function IconSection() {
  return (
    <div className="flex justify-evenly items-center py-6">
      {icons.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 flex items-center justify-center rounded-md bg-gradient-to-br from-[#FF9966] to-[#FF5E62]">
            <img src={item.src} alt={item.label} className="w-8 h-8" />
          </div>
          <span className="text-sm font-vazir text-gray-700">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
