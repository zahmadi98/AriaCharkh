import React, { useRef, useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import { ArrowLeft2} from "iconsax-react"
import "keen-slider/keen-slider.min.css"
import ProductCard from "./ProductCard"
import OfferItems from "../assets/OfferItems.png"
import { Link } from "react-router-dom";  

export default function FixedOverlaySlider() {
  const containerRef = useRef(null)
  const [overlayRect, setOverlayRect] = useState(null)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "free",
      rtl: true,
      slides: { perView: 7, spacing: 15 },
      breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1.2, spacing: 15 }, 
      },
      "(min-width: 769px) and (max-width: 1024px)": {
        slides: { perView: 3, spacing: 15 }, 
      },
    },
      created() {
        setLoaded(true)
      },
    },
    []
  )

  const combinedRef = (el) => {
    sliderRef(el)
    containerRef.current = el
  }

  useEffect(() => {
    if (!containerRef.current) return
    let mounted = true

    const updateOverlay = () => {
      if (!containerRef.current) return
      const slides = containerRef.current.querySelectorAll(".keen-slider__slide")
      const slot = slides[6]
      if (!slot) {
        setOverlayRect(null)
        return
      }
      const containerRect = containerRef.current.getBoundingClientRect()
      const slotRect = slot.getBoundingClientRect()

      const right = containerRect.right - slotRect.right

      if (!mounted) return
      setOverlayRect({
        right, 
        width: slotRect.width,
        left: slotRect.left - containerRect.left,
      })
    }

    requestAnimationFrame(updateOverlay)
    const t = setTimeout(updateOverlay, 50)
    window.addEventListener("resize", updateOverlay)

    const inst = instanceRef && instanceRef.current
    if (inst && inst.on) {
      inst.on("created", updateOverlay)
      inst.on("detailsChanged", updateOverlay)
      inst.on("animationEnd", updateOverlay)
      inst.on("dragEnd", updateOverlay)
    }

    return () => {
      mounted = false
      clearTimeout(t)
      window.removeEventListener("resize", updateOverlay)
      if (inst && inst.off) {
        inst.off("created", updateOverlay)
        inst.off("detailsChanged", updateOverlay)
        inst.off("animationEnd", updateOverlay)
        inst.off("dragEnd", updateOverlay)
      }
    }
  }, [instanceRef])

  return (
    <div className="flex justify-center">
      <div
        className="relative bg-[#ED1A3B] my-2 mr-12 md:mx-40 w-full rounded-r-2xl md:rounded-2xl"
        style={{ padding: "1.5rem" }}
      >
        <div
          ref={combinedRef}
          dir="rtl"
          className="keen-slider rounded-2xl overflow-visible relative z-0"
        >
          <div className="keen-slider__slide">
  <Link
    to="/product"
    state={{
      Title: "پیشنهاد شگفت انگیز",
      image: OfferItems,
      Description: "توضیحات محصول ...",
      originalPrice: "۱۷,۵۰۰,۰۰۰",
      price: "۱۵,۰۰۰,۰۰۰ تومان",
      discountPercent: 80,
      // هر prop دیگری که MainCard نیاز دارد
    }}
    className="block"   // مهم: Link را بلاک کن تا اندازه کارت را بگیرد
  >
    <ProductCard
      image={OfferItems}
      originalPrice="۱۷,۵۰۰,۰۰۰"
      price="۱۵,۰۰۰,۰۰۰ تومان"
      discountPercent={"۸۰"}
      progress={30}
    />
  </Link>
</div>
             <div className="keen-slider__slide">
            <ProductCard
              image={OfferItems}
              originalPrice="۱۷,۵۰۰,۰۰۰"
              price="۱۵,۰۰۰,۰۰۰ تومان"
              discountPercent={"۱۵"}
              progress={60}
            />
          </div>
             <div className="keen-slider__slide">
            <ProductCard
              image={OfferItems}
              originalPrice="۱۷,۵۰۰,۰۰۰"
              price="۱۵,۰۰۰,۰۰۰ تومان"
              discountPercent={"۸۰"}
              progress={70}
            />
          </div>
             <div className="keen-slider__slide">
            <ProductCard
              image={OfferItems}
              originalPrice="۱۷,۵۰۰,۰۰۰"
              price="۱۵,۰۰۰,۰۰۰ تومان"
              discountPercent={"۴۰"}
              progress={10}
            />
          </div>
             <div className="keen-slider__slide">
            <ProductCard
              image={OfferItems}
              originalPrice="۱۷,۵۰۰,۰۰۰"
              price="۱۵,۰۰۰,۰۰۰ تومان"
              discountPercent={"۶۳"}
              progress={50}
            />
          </div>
             <div className="keen-slider__slide">
            <ProductCard
              image={OfferItems}
              originalPrice="۱۷,۵۰۰,۰۰۰"
              price="۱۵,۰۰۰,۰۰۰ تومان"
              discountPercent={"۸۰"}
              progress={23}
            />
          </div>
             <div className="keen-slider__slide">
            <ProductCard
              image={OfferItems}
              originalPrice="۱۷,۵۰۰,۰۰۰"
              price="۱۵,۰۰۰,۰۰۰ تومان"
              discountPercent={"۷۰"}
              progress={100}
            />
          </div>
        </div>

        {loaded && instanceRef.current && (
          <Arrow
            left
            onClick={() => instanceRef.current?.next()}
            ariaLabel="اسلاید بعدی"
          />
        )}

        {overlayRect && (
          <div
            className="absolute pointer-events-none z-10 text-center top-0 bottom-0 right-0"
            style={{
              left: overlayRect.left,
              width: "14.5rem",
              background: "#ED1A3B",
              borderTopRightRadius: "1rem",
              borderBottomRightRadius: "1rem",
            }}
          />
        )}

        {overlayRect && (
          <div
            className="absolute z-20 flex flex-col items-center justify-center"
            style={{
              left: overlayRect.left,
              top: 0,
              bottom: 0,
              right: 10,
              width: overlayRect.width,
              pointerEvents: "none",
            }}
          >
            <h3 className="text-white text-3xl text-center font-vazir font-bold">پیشنهاد شگفت انگیز</h3>
            <div className="flex items-center gap-1">
            <a
              href="/next-page"
              className="mt-2 text-sm  text-white px-3 py-1 rounded-md pointer-events-auto font-vazir"
            >
              مشاهده همه
            </a>
            <ArrowLeft2 size={16} color="#FFF"/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Arrow({ left, onClick, ariaLabel }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center 
        w-10 h-10 rounded-full bg-white border border-gray-300 shadow-sm
        ${left ? "left-3" : "right-3"}`}
    >
      <svg
        className="w-4 h-4 fill-red-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {left ? (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        ) : (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </button>
  )
}

