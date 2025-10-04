import { motion } from "framer-motion";
import BannerPhoto from "../assets/BannerPhoto.svg";

const Banner = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 items-center 
                 mx-6 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-32 2xl:mx-40 
                 gap-10 md:gap-14 lg:gap-10 xl:gap-8 
                 my-10"
    >
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="w-full overflow-hidden rounded-xl"
          whileHover={{
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
            y: -4,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <img
            src={BannerPhoto}
            alt={`banner-${i}`}
            className="w-full aspect-[2.3/1] sm:aspect-[2.5/1] object-cover rounded-xl"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Banner;
