import { Send2, MessageQuestion, ArrowDown3} from "iconsax-react";
import OldPhone from '../assets/OldPhone.png';


const StatusBar = () => {
  return (
  <div className="w-full top-[3.688rem] px-20 py-2 flex bg-[#BDBEBD] h-[2rem]">

    <div className="flex-1 flex items-center justify-start gap-6">
   
      <div className="flex items-center gap-2">
       <img src={OldPhone} alt="Old Phone" className="w-5 h-5" />
       <p className="font-medium text-gray-700 text-sm">واحد فروش ۰۹۱۰۴۸۸۲۵۰۰</p>
      </div>   

      <div className="flex items-center gap-2">
       <Send2 size={17} color="#000" />
       <p className="font-medium text-gray-700 text-sm">کانال تلگرام</p>
      </div>
    </div>

    <div className="flex-1 flex items-center justify-end gap-2">
      <MessageQuestion size="20" color="#000" />
      <span className="font-medium text-gray-700 text-sm">راهنمای مشتریان</span>
      <ArrowDown3 size="17" color="#000" />
    </div>

  </div>
  );
};

export default StatusBar;
