import React, { useRef, useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function FixedOverlaySlider() {
  const containerRef = useRef(null)
  const [overlayRect, setOverlayRect] = useState(null)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "free",
      rtl: true,
      slides: { perView: 7, spacing: 15 },
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
          <div className="keen-slider__slide h-[280px]"></div>

          <div className="keen-slider__slide bg-gradient-to-r from-[#40afff] to-[#3f61ff] flex items-center justify-center text-white text-5xl font-medium h-[280px]">
            1
          </div>
          <div className="keen-slider__slide bg-gradient-to-r from-[#ff9a3f] to-[#ff4b40] flex items-center justify-center text-white text-5xl font-medium h-[280px]">
            2
          </div>
          <div className="keen-slider__slide bg-gradient-to-r from-[#b6ff40] to-[#3fff47] flex items-center justify-center text-white text-5xl font-medium h-[280px]">
            3
          </div>
          <div className="keen-slider__slide bg-gradient-to-r from-[#40fff2] to-[#3fbcff] flex items-center justify-center text-white text-5xl font-medium h-[280px]">
            4
          </div>
          <div className="keen-slider__slide bg-gradient-to-r from-[#ff409c] to-[#ff3f3f] flex items-center justify-center text-white text-5xl font-medium h-[280px]">
            5
          </div>
          <div className="keen-slider__slide bg-gradient-to-r from-[#404cff] to-[#ae3fff] flex items-center justify-center text-white text-5xl font-medium h-[280px]">
            6
          </div>
        </div>

        {overlayRect && (
          <div
            className="absolute pointer-events-none z-10 top-0 bottom-0"
            style={{
              left: overlayRect.left,
              width: "11.5rem",
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
