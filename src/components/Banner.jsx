import BannerPhoto from '../assets/BannerPhoto.png'

const Banner = () => {
    return(
<div class="items-center grid col-span-1 mx-7 lg:grid-cols-[1fr_1fr] sm:mx-8 md:mx-20 md:col-span-1 lg:mx-40 xl:grid-cols-[1fr_1fr] gap-14 my-5 xl:mx-40">
  <div><img src={BannerPhoto} className='lg:w-[45rem] md:w-[40rem] sm:w-[38rem] sm:h-[10rem] md:h-[13.5rem] lg:h-[13.8 rem]'/></div>
  <div><img src={BannerPhoto} className='lg:w-[45rem] md:w-[40rem] sm:w-[38rem] sm:h-[10rem] md:h-[13.5rem] lg:h-[13.8 rem]'/></div>
</div>
    );
};

export default Banner;
