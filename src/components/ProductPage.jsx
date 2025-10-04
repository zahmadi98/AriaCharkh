import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";
import MainCard from "./MainCard";
import SideCard from "./SideCard";

export default function ProductPage() {
  const { product, setProduct } = useProduct();
  const location = useLocation();
  const navigate = useNavigate();
  const [showSide, setShowSide] = useState(false);

  useEffect(() => {
    if (!product && location.state) {
      if (typeof setProduct === "function") setProduct(location.state);
    }
  }, [product, location.state, setProduct]);

  useEffect(() => {
    if (!product && !location.state) {
      navigate("/", { replace: true });
    }
  }, [product, location.state, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) setShowSide(true);
      else setShowSide(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeProduct = product ?? location.state ?? null;
  if (!activeProduct) return null;

  const sideProps = {
    image: activeProduct.image,
    Description: activeProduct.Description ?? activeProduct.Title ?? "محصول",
    colorText: activeProduct.colorText ?? "سبز",
    sizeText: activeProduct.sizeText ?? "17",
    originalPrice: activeProduct.originalPrice,
    price: activeProduct.price,
    discountPercent: activeProduct.discountPercent,
  };

  return (
    <div className="p-8 min-h-screen relative">
      <div className="max-w-[45rem] mx-auto">
        <MainCard {...activeProduct} />
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-[#ED1A3B] text-white rounded font-vazir"
        >
          بازگشت
        </button>
      </div>

      {showSide && (
        <div className="fixed right-6 top-24 z-50">
          <SideCard {...sideProps} />
        </div>
      )}
    </div>
  );
}
