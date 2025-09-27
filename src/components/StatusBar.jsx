import { Send2, MessageQuestion, ArrowDown3} from "iconsax-react";
import OldPhone from '../assets/OldPhone.png';


const StatusBar = () => {
  return (
  <div className="w-full top-[3.688rem] px-20 py-2 flex bg-[#BDBEBD] h-[2rem]">

    <div className="flex-1 flex items-center space-x-2">
      <ArrowDown3 size="17" color="#000" />
      <span className="font-medium text-gray-700 text-sm">راهنمای مشتریان</span>
      <MessageQuestion size="20" color="#000" />
    </div>

    <div className="flex-1 flex items-center justify-end gap-6">
      <div className="flex items-center gap-2">
       <p className="font-medium text-gray-700 text-sm">کانال تلگرام</p>
       <Send2 size={17} color="#000" />
      </div>

      <div className="flex items-center gap-2">
       <p className="font-medium text-gray-700 text-sm">واحد فروش ۰۹۱۰۴۸۸۲۵۰۰</p>
       <img src={OldPhone} alt="Old Phone" className="w-5 h-5" />
      </div>
    </div>

  </div>
  );
};

export default StatusBar;
