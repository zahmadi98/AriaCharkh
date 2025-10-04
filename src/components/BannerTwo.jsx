import Bicy1 from '../assets/Bicy1.png'
import Bicy2 from '../assets/Bicy2.png'
import Bicy3 from '../assets/Bicy3.png'
import Bicy4 from '../assets/Bicy4.png'

const BannerTwo = () => {
    return(
<div class="items-center pt-3 grid col-span-1 mx-8 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:mx-8 md:mx-16 md:col-span-2 2xl:gap-36 3xl:gap-44 gap-14 my-5 xl:mx-60">
  <div><img src={Bicy1} className='3xl:h-[30rem] 3xl:w-[26rem] lg:h-[25rem] md:h-[21.75rem] h-[13rem] w-[auto]'/></div>
  <div><img src={Bicy2} className='3xl:h-[30rem] 3xl:w-[26rem] lg:h-[25rem] md:h-[21.75rem] h-[13rem] w-[auto]'/></div>
  <div><img src={Bicy3} className='3xl:h-[30rem] 3xl:w-[26rem] lg:h-[25rem] md:h-[21.75rem] h-[13rem] w-[auto]'/></div>
  <div><img src={Bicy4} className='3xl:h-[30rem] 3xl:w-[26rem] lg:h-[25rem] md:h-[21.75rem] h-[13rem] w-[auto]'/></div>
</div>
    );
};

export default BannerTwo;