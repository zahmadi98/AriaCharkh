import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainCard from "./MainCard";

export default function ProductPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const productProps = state ? { ...state } : null;

  return (
    <div className="p-8 min-h-screen flex flex-col items-center justify-center"> 
      <div className="w-full max-w-[45rem]">
        {productProps ? <MainCard {...productProps} /> : <MainCard />}
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-4 py-2 bg-[#ED1A3B] text-white rounded font-vazir"
      >
        بازگشت
      </button>

    </div>
  );
}
