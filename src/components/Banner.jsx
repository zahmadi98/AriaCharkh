import BannerPhoto from '../assets/BannerPhoto.png'

const Banner = () => {
    return(
<div class="items-center grid col-span-1 mx-7 lg:grid-cols-2 sm:mx-8 md:mx-16 lg:mx-16 grid-cols-1 gap-14 xl:gap-16 my-5 xl:mx-60 3xl:mx-40">
  <div><img src={BannerPhoto} className='w-[auto] sm:h-[10rem] md:h-[15rem] lg:h-[16rem] 3xl:h-[25rem]'/></div>
  <div><img src={BannerPhoto} className='w-[auto] sm:h-[10rem] md:h-[15rem] lg:h-[16rem] 3xl:h-[25rem]'/></div>
</div>
    );
};

export default Banner;
