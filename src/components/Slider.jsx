import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import MyPhoto from "../assets/MyPhoto.jpg"

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      rtl: true, 
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    }
  )

  const totalSlides =
    loaded && instanceRef.current
      ? instanceRef.current.track.details.slides.length
      : 0

  const isRTL = true 

  const leftDisabled = isRTL
    ? currentSlide === totalSlides - 1
    : currentSlide === 0

  const rightDisabled = isRTL
    ? currentSlide === 0 
    : currentSlide === totalSlides - 1

  return (
    <div className="relative">
        <div
            ref={sliderRef}
            dir="rtl"
            className="keen-slider transition-[height] duration-300">
            <div className="keen-slider__slide flex items-center justify-center text-[50px] font-medium text-white h-[27rem] ">
             <img src={MyPhoto} />
            </div>
            <div className="keen-slider__slide flex items-center justify-center text-[50px] font-medium text-white h-[27rem] bg-gradient-to-br from-[#FF9A3F] to-[#FF4B40]">
              2
            </div>
            <div className="keen-slider__slide flex items-center justify-center text-[50px] font-medium text-white h-[27rem] bg-gradient-to-br from-[#BDFF53] to-[#2BFA52]">
              3
            </div>
            <div className="keen-slider__slide flex items-center justify-center text-[50px] font-medium text-white h-[27rem] bg-gradient-to-br from-[#40FFF2] to-[#3FBCFF]">
              4
            </div>
            <div className="keen-slider__slide flex items-center justify-center text-[50px] font-medium text-white h-[27rem] bg-gradient-to-br from-[#FF409C] to-[#FF3F3F]">
              5
            </div>
            <div className="keen-slider__slide flex items-center justify-center text-[50px] font-medium text-white h-[27rem] bg-gradient-to-br from-[#404CFF] to-[#AE3FFF]">
            6
            </div>
        </div>

  {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={() =>
              isRTL
                ? instanceRef.current?.next() 
                : instanceRef.current?.prev() 
            }
            disabled={leftDisabled}
            ariaLabel={isRTL ? "اسلاید بعدی" : "اسلاید قبلی"}
          />

          <Arrow
            onClick={() =>
              isRTL
                ? instanceRef.current?.prev() 
                : instanceRef.current?.next() 
            }
            disabled={rightDisabled}
            ariaLabel={isRTL ? "اسلاید قبلی" : "اسلاید بعدی"}
          />
        </>
      )}


      {loaded && instanceRef.current && (
        <div className="flex justify-center py-4">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-[10px] h-[10px] rounded-full mx-[5px] transition-colors ${
                currentSlide === idx ? "bg-black" : "bg-[#c5c5c5]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function Arrow({ left, onClick, disabled, ariaLabel }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center p-1
        ${left ? "left-2" : "right-2"} ${
        disabled ? "opacity-50 pointer-events-none" : "opacity-100"
      }`}
    >
      <svg
        className="w-[30px] h-[30px] fill-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
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
