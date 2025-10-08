import BicycleLights from '../assets/BicycleLights.png'
import ToolBox from '../assets/ToolBox.png'
import BicyclePump from '../assets/BicyclePump.png'
import BicycleGearChange from '../assets/BicycleGearChange.png'
import BicycleThermos from '../assets/BicycleThermos.png'
import BicycleTire from '../assets/BicycleTire.png'
import BicycleGlasses from '../assets/BicycleGlasses.png'
import BicycleRack from '../assets/BicycleRack.png'
import ThermosHolder from '../assets/ThermosHolder.png'
import BicycleSaddle from '../assets/BicycleSaddle.png'
import BicyclePedal from '../assets/BicyclePedal.png'

const Banner = () => {
  return (
    <div className="space-y-12 mb-10 mt-10 font-vazir mr-4">

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 mx-1 sm:mx-3 md:mx-5 lg:mx-32 xl:mx-24 2xl:mx-56 gap-6">
        
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#ADC0FF] to-[#A8AEFF] rounded-full w-[8rem] h-[8rem] sm:w-[9rem] sm:h-[9rem] md:w-[11rem] md:h-[11rem] 2xl:w-[13rem] 2xl:h-[13rem] 3xl:w-[16rem] 3xl:h-[16rem] grid place-items-center">
            <img src={BicycleLights} alt="چراغ دوچرخه"/>
          </div>
          <p className="mt-2 text-center 3xl:text-xl">چراغ دوچرخه</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#99FDFF] to-[#D1B3FF] rounded-full w-[8rem] h-[8rem] sm:w-[9rem] sm:h-[9rem] md:w-[11rem] md:h-[11rem] 2xl:w-[13rem] 2xl:h-[13rem] 3xl:w-[16rem] 3xl:h-[16rem] grid place-items-center">
            <img src={ToolBox} alt="جعبه ابزار" className="pr-6"/>
          </div>
          <p className="mt-2 text-center 3xl:text-xl" >دسته ابزار</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#FAE0D1] to-[#FDF2CE] rounded-full w-[8rem] h-[8rem] sm:w-[9rem] sm:h-[9rem] md:w-[11rem] md:h-[11rem] 2xl:w-[13rem] 2xl:h-[13rem] 3xl:w-[16rem] 3xl:h-[16rem] relative">
            <img 
              src={BicyclePump} 
              alt="تلمبه" 
              className="lg:h-[14rem] absolute top-[-2rem] left-1/2 transform -translate-x-1/2"
            />
          </div>
          <p className="mt-2 text-center 3xl:text-xl">تلمبه دوچرخه</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#D1FADC] to-[#EECFFC] rounded-full w-[8rem] h-[8rem] sm:w-[9rem] sm:h-[9rem] md:w-[11rem] md:h-[11rem] 2xl:w-[13rem] 2xl:h-[13rem] 3xl:w-[16rem] 3xl:h-[16rem] grid place-items-center">
            <img src={BicycleGearChange} alt="دنده"/>
          </div>
          <p className="mt-2 text-center 3xl:text-xl">شانژمان دوچرخه</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#D8D0FB] to-[#FCDBCF] rounded-full w-[8rem] h-[8rem] sm:w-[9rem] sm:h-[9rem] md:w-[11rem] md:h-[11rem] 2xl:w-[13rem] 2xl:h-[13rem] 3xl:w-[16rem] 3xl:h-[16rem] grid place-items-center">
            <img src={BicycleThermos} alt="قمقمه"/>
          </div>
          <p className="mt-2 text-center 3xl:text-xl">قمقمه دوچرخه</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#EAFFCC] to-[#CFEDFC] rounded-full w-[8rem] h-[8rem] sm:w-[9rem] sm:h-[9rem] md:w-[11rem] md:h-[11rem] 2xl:w-[13rem] 2xl:h-[13rem] 3xl:w-[16rem] 3xl:h-[16rem] relative">
            <img 
              src={BicycleTire} 
              alt="تایر و تیوپ" 
              className="lg:h-[14rem] absolute md:top-[-3rem] left-1/2 transform -translate-x-1/2"
            />
          </div>
          <p className="mt-2 text-center 3xl:text-xl">تایر و تیوپ</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-3 gap-6 sm:mx-5 lg:mx-32 xl:mx-44 2xl:mx-72">
        
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#BAFFAD] to-[#ADCEFF] rounded-full w-[8rem] h-[8rem] sm:w-[9rem] sm:h-[9rem] md:w-[11rem] md:h-[11rem] 2xl:w-[13rem] 2xl:h-[13rem] 3xl:w-[16rem] 3xl:h-[16rem] grid place-items-center">
            <img src={BicycleGlasses} alt="عینک"/>
          </div>
          <p className="mt-2 text-center 3xl:text-xl">عینک دوچرخه</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#FFF3C2] to-[#A3AEFF] rounded-full w-[8rem] h-[8rem] sm:w-[9rem] sm:h-[9rem] md:w-[11rem] md:h-[11rem] 2xl:w-[13rem] 2xl:h-[13rem] 3xl:w-[16rem] 3xl:h-[16rem] grid place-items-center">
            <img src={BicycleRack} alt="باربند"/>
          </div>
          <p className="mt-2 text-center 3xl:text-xl">باربند دوچرخه</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#FFDCB8] to-[#C7FFD0] rounded-full w-[8rem] h-[8rem] sm:w-[9rem] sm:h-[9rem] md:w-[11rem] md:h-[11rem] 2xl:w-[13rem] 2xl:h-[13rem] 3xl:w-[16rem] 3xl:h-[16rem] relative">
            <img 
              src={ThermosHolder} 
              alt="نگهدارنده قمقمه" 
              className="lg:h-[14rem] absolute md:top-[-3rem] left-1/2 transform -translate-x-1/2"
            />
          </div>
          <p className="mt-2 text-center 3xl:text-xl">بست قمقمه</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#FFC7CA] to-[#E299FF] rounded-full w-[8rem] h-[8rem] sm:w-[9rem] sm:h-[9rem] md:w-[11rem] md:h-[11rem] 2xl:w-[13rem] 2xl:h-[13rem] 3xl:w-[16rem] 3xl:h-[16rem] relative">
            <img 
              src={BicyclePedal} 
              alt="پدال" 
              className="lg:h-[14rem] absolute top-[-2rem] left-1/2 transform -translate-x-1/2"
            />
          </div>
          <p className="mt-2 text-center 3xl:text-xl">پدال دوچرخه</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#F5FFA8] to-[#9EFFD8] rounded-full w-[8rem] h-[8rem] sm:w-[9rem] sm:h-[9rem] md:w-[11rem] md:h-[11rem] 2xl:w-[13rem] 2xl:h-[13rem] 3xl:w-[16rem] 3xl:h-[16rem] relative">
            <img 
              src={BicycleSaddle} 
              alt="زین" 
              className="lg:h-[14rem] absolute md:top-[-1rem] left-1/2 transform -translate-x-1/2"
            />
          </div>
          <p className="mt-2 text-center 3xl:text-xl">زین دوچرخه</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;