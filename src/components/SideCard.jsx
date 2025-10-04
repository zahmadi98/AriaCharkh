import React from "react";
import { TruckFast, Ruler as RulerIcon } from "iconsax-react";

import ProductImage from "../assets/ProductImage.png";

function IconShop(props) {
  return (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6h18v2H3V6zM5 8l1 11h12l1-11H5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 3h4v3h-4z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconShield(props) {
  return (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l7 3v5c0 5-3.6 9.7-7 11-3.4-1.3-7-6-7-11V5l7-3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 12.5l1.8 1.8L15 10.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconSaveLike(props) {
  return (
    <svg {...props} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2h12v20l-6-4-6 4V2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function SideCard({
  image = ProductImage,
  Title = "پیشنهاد",
  Description = "دوچرخه کوهستان",
  colorText = "سبز",
  sizeText = "17",
  originalPrice = "۱۷,۵۰۰,۰۰۰",
  price = "۱۵,۰۰۰,۰۰۰ تومان",
  discountPercent = 80,
  onAddToCart = null, 
}) {
  return (
    <div className="max-w-[45rem] w-full bg-white rounded-xl h-[50rem] font-vazir sm:h-[54rem] lg:h-[50rem] shadow-md overflow-hidden">
      <div className="flex gap-3 p-4 ">
        <div className="w-1/3">
          <img src={image} alt={Title} className="relative h-[60%] sm:h-[70%] lg:h-[69%]" />
        </div>

        <div className="flex-1 flex flex-col pt-16 justify-between">
          <div>
            <p className="text-lg text-gray-700">{Description}</p>

            <div className="mt-3 flex items-center gap-3 text-lg">
              <div className="flex items-center gap-1">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-green-400" aria-hidden></span>
                <span className="text-gray-600">{colorText}</span>
              </div>

               <div className="flex items-center gap-1">
                <RulerIcon size="17" color="#6B7280" />
                <span className="text-gray-600">{sizeText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div>
          <div className="flex flex-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-800">
            <IconShop className="w-4 h-4" />
          </span>
          <div className="font-medium text-gray-800">آریا چرخ</div>
          </div>
            <hr className="border-t border-gray-200 my-3" />
            <div className="font-medium text-gray-800">گارانتی آریا چرخ</div>
        </div>
        
          <div className="flex pt-10 flex-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-800">
            <IconShield className="w-4 h-4" />
          </span>
          <div className="font-medium text-gray-800">۱۸ ماه گارانتی شرکتی</div>
          </div>
          <hr className="border-t border-gray-200 my-3" />
          <div className="flex flex-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-800">
                <IconSaveLike className="w-4 h-4"/>
              </span>
              <div className="text-sm text-gray-800">موجود در انبار فروشنده</div>
          </div>

        <div className="mb-2 pt-10 flex items-start gap-3">
          <div className="flex-1">
            <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              <span className="inline-flex items-center"><TruckFast className="w-3 h-3" color="#6B7280" />
              </span>
              <span>ارسال از یک روز کاری دیگر</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 pt-14 border-t border-gray-100">
        <div className="flex items-center justify-end gap-2 text-sm text-gray-400">
          <span className="line-through">{originalPrice}</span>
          <span className="bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            {discountPercent}%
          </span>
        </div>
        <div className="text-left mt-2 pt-2">
          <div className="text-lg font-bold text-gray-900">{price}</div>
        </div>
      </div>

      <div className="px-4 pb-4 pt-4">
        <button
          type="button"
          onClick={() => {
            if (typeof onAddToCart === "function") onAddToCart();
            else {
              console.log("افزودن به سبد خرید:", Title);
            }
          }}
          className="w-full py-3 bg-[#ED1A3B] text-white rounded-lg font-vazir font-semibold text-base shadow"
          aria-label="افزودن به سبد خرید"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}
