import React, { useRef, useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

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
        className="relative bg-[#ED1A3B] my-2 mx-40 w-full rounded-2xl"
        style={{ padding: "1.5rem" }}
      >
        <div
          ref={combinedRef}
          dir="rtl"
          className="keen-slider rounded-2xl overflow-visible relative z-0"
        >
          <div className="keen-slider__slide bg-gradient-to-r from-[#40afff] to-[#3f61ff] flex items-center justify-center text-white text-5xl font-medium h-[280px]">
            7
          </div>
          <div className="keen-slider__slide bg-gradient-to-r from-[#ff9a3f] to-[#ff4b40] flex items-center justify-center text-white text-5xl font-medium h-[280px]">
            1
          </div>
          <div className="keen-slider__slide bg-gradient-to-r from-[#b6ff40] to-[#3fff47] flex items-center justify-center text-white text-5xl font-medium h-[280px]">
            2
          </div>
          <div className="keen-slider__slide bg-gradient-to-r from-[#40fff2] to-[#3fbcff] flex items-center justify-center text-white text-5xl font-medium h-[280px]">
            3
          </div>
          <div className="keen-slider__slide bg-gradient-to-r from-[#ff409c] to-[#ff3f3f] flex items-center justify-center text-white text-5xl font-medium h-[280px]">
            4
          </div>
          <div className="keen-slider__slide bg-gradient-to-r from-[#404cff] to-[#ae3fff] flex items-center justify-center text-white text-5xl font-medium h-[280px]">
            5
          </div> 
          <div className="keen-slider__slide bg-gradient-to-r from-[#40afff] to-[#3f61ff] flex items-center justify-center text-white text-5xl font-medium h-[280px]">
            6
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
            <a
              href="/next-page"
              className="mt-2 text-sm bg-white/90 text-black px-3 py-1 rounded-md pointer-events-auto font-vazir"
            >
              مشاهده همه
            </a>
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
      className={`absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center p-1 ${
        left ? "left-2" : "right-2"
      }`}
    >
      <svg
        className="w-[30px] h-[30px] fill-white"
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
