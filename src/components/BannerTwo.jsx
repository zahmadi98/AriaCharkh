import Bicy1 from '../assets/Bicy1.png'
import Bicy2 from '../assets/Bicy2.png'
import Bicy3 from '../assets/Bicy3.png'
import Bicy4 from '../assets/Bicy4.png'

const BannerTwo = () => {
  const bikes = [Bicy1, Bicy2, Bicy3, Bicy4];

  return (
    <div className="grid items-center pt-3 
                    mx-6 sm:mx-8 md:mx-16 xl:mx-32 2xl:mx-40 
                    grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                    gap-10 md:gap-14 xl:gap-10 
                    my-10">

      {bikes.map((img, index) => (
        <div key={index} className="relative w-full overflow-hidden rounded-lg group">
          <img
            src={img}
            alt={`bicycle-${index}`}
            className="w-full aspect-[4/5.2] md:aspect-[5/6] object-cover rounded-lg transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg"></div>
        </div>
      ))}
    </div>
  );
};

export default BannerTwo;
