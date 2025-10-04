import { Brush as ColorIconComp, Ruler as RulerIcon } from "iconsax-react";
import ProductImage from "../assets/ProductImage.png";

export default function SideCard({
  image = ProductImage,
  Description = "دوچرخه کوهستان",
  colorText = "سبز",
  sizeText = "17",
  originalPrice = "۱۷,۵۰۰,۰۰۰",
  price = "۱۵,۰۰۰,۰۰۰ تومان",
  discountPercent = 80,
}) {
  return (
    <div className="max-w-[45rem] w-full bg-white rounded-xl h-[50rem] sm:h-[54rem] lg:h-[50rem] shadow-md overflow-hidden">
      <div className="flex gap-3 p-4">
        <div className="relative h-[60%] sm:h-[70%] lg:h-[69%]">
          <img src={image} alt="product" className="w-full h-40 object-cover rounded-md" />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-700">{Description}</p>

            <div className="mt-3 flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1">
                <ColorIconComp size="17" color="#22C55E" />
                <span className="text-gray-600">{colorText}</span>
              </div>

              <div className="flex items-center gap-1">
                <RulerIcon size="17" color="#6B7280" />
                <span className="text-gray-600">{sizeText}</span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="flex items-center justify-end gap-2 text-sm text-gray-400">
              <span className="line-through">{originalPrice}</span>
              <span className="bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {discountPercent}%
              </span>
            </div>
            <div className="text-lg font-bold text-gray-900 mt-1">{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
