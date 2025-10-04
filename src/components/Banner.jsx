import BannerPhoto from '../assets/BannerPhoto.png'

const Banner = () => {
    return(
<div class="items-center grid col-span-1 mx-7 xl:grid-cols-2 sm:mx-8 md:mx-20 lg:mx-60 grid-cols-1 gap-14 xl:gap-28 3xl:gap-32 my-5 xl:mx-40 3xl:mx-40">
  <div><img src={BannerPhoto} className='w-[auto] sm:h-[10rem] md:h-[13.5rem] lg:h-[16rem] 3xl:h-[25rem]'/></div>
  <div><img src={BannerPhoto} className='w-[auto] sm:h-[10rem] md:h-[13.5rem] lg:h-[16rem] 3xl:h-[25rem]'/></div>
</div>
    );
};

export default Banner;
