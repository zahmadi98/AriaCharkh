import { Star, Watch } from "iconsax-react";
import ProductImage from "../assets/ProductImage.png";

export default function MainCard({
  Title = "پیشنهاد شگفت انگیز",
  image = ProductImage,
  Description = "دوچرخه کوهستان",
  Score = "۴.۳",
  ScoreIcon = <Star size="17" color="Gold" />,
  TimeLeft = "۰۹:۰۳:۴۱",
  TimeIcon = <Watch size="17" color="#000" />,
  originalPrice = "۱۷,۵۰۰,۰۰۰",
  price = "۱۵,۰۰۰,۰۰۰ تومان",
  discountPercent = 80,
}) {
  return (
    <div className="max-w-[45rem] w-full bg-white rounded-xl h-[50rem] sm:h-[54rem] lg:h-[50rem] shadow-md overflow-hidden">
      <h1 className="text-right text-xl pt-5 pb-3 pr-5 text-[#ED1A3B] font-vazir">
        {Title}
      </h1>

      <div className="relative h-[60%] sm:h-[70%] lg:h-[69%]">
        <img src={image} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 font-medium font-vazir">
        <div className="flex flex-col gap-3 px-1 py-1">
          <p>{Description}</p>

          <div className="flex gap-1 items-center justify-end self-end w-full">
            <span>{Score}</span>
            {ScoreIcon}
          </div>

          <div className="flex items-center gap-1">
            {TimeIcon}
            {TimeLeft}
          </div>
        </div>

        <div className="flex flex-col gap-1 items-end w-full">
          <span className="flex items-center gap-2 text-sm text-gray-400">
            <div className="line-through">{originalPrice}</div>
            <div className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {discountPercent}%
            </div>
          </span>

          <span className="text-lg font-bold text-gray-900">{price}</span>
        </div>
      </div>
    </div>
  );
}
