import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainCard from "./MainCard";

export default function ProductPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // اگر کسی مستقیم وارد شد و state موجود نبود، میتونی به صفحه اصلی برگردونی یا یک fetch انجام بدی
  if (!state) {
    return (
      <div className="p-8">
        <p>اطلاعات محصول موجود نیست.</p>
        <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-[#ED1A3B] text-white rounded">
          بازگشت
        </button>
      </div>
    );
  }

  // فرض میکنیم MainCard همان props مثل Title, image, Description, price, originalPrice, discountPercent رو قبول میکند
  return (
    <div className="p-8 flex justify-center">
      <MainCard
        Title={state.Title}
        image={state.image}
        Description={state.Description}
        originalPrice={state.originalPrice}
        price={state.price}
        discountPercent={state.discountPercent}
        // هر prop اضافه‌ای که لازم باشه
      />
    </div>
  );
}
