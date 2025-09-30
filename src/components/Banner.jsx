import BannerPhoto from '../assets/BannerPhoto.png'

const Banner = () => {
    return(
<div class="grid col-span-1 mx-7 md:grid-cols-[1fr_1fr] gap-10 my-5 md:mx-40">
  <div><img src={BannerPhoto} className='md:w-[45rem]'/></div>
  <div><img src={BannerPhoto} className='md:w-[45rem]'/></div>
</div>
    );
};

export default Banner;
