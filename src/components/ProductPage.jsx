import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";
import { motion, AnimatePresence } from "framer-motion";
import MainCard from "./MainCard";
import SideCard from "./SideCard";

export default function ProductPage() {
  const { product, setProduct } = useProduct();
  const location = useLocation();
  const navigate = useNavigate();
  const [showSide, setShowSide] = useState(false);
  const mainCardRef = React.useRef(null);

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
    const handleScroll = () => setShowSide(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    if (!mainCardRef.current) return;
    const rect = mainCardRef.current.getBoundingClientRect();
    if (rect.bottom < window.innerHeight - 90) { 
      setShowSide(true);
    } else {
      setShowSide(false);
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" });
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

  const appear = { opacity: 1, y: 0 };
  const disappear = { opacity: 0, y: -20 };

  return (
    <div className="p-6 sm:p-8 min-h-screen bg-gray-50 font-vazir">
      <div className="text-center mb-24 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          معرفی محصول و خرید آن
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          در این صفحه می‌توانید جزئیات محصول انتخابی خود را مشاهده کرده و در صورت تمایل آن را به سبد خرید خود اضافه کنید.
        </p>
      </div>

      <div className="max-w-[45rem] mx-auto relative" style={{ minHeight: "28rem" }}>
        <AnimatePresence mode="wait">
          {!showSide ? (
            <motion.div
              key="main"
              initial={{ opacity: 0, y: 10 }}
              animate={appear}
              exit={disappear}
              transition={{ duration: 0.25 }}
            >
              <MainCard {...activeProduct} />
            </motion.div>
          ) : (
            <motion.div
              key="side"
              initial={{ opacity: 0, y: 10 }}
              animate={appear}
              exit={disappear}
              transition={{ duration: 0.25 }}
            >
              <SideCard {...sideProps} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate(-1)}
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#ED1A3B] to-[#ff4d6d] 
                     text-white font-semibold text-base shadow-md hover:scale-105 
                     transition-transform duration-200"
        >
          ← بازگشت به صفحه قبل
        </button>
      </div>
    </div>
  );
}
