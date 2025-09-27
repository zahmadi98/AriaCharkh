import logo from '../assets/logo.svg'
import { User, ShoppingCart, SearchNormal1, ArrowDown3 } from "iconsax-react";

const Navbar = () => {
  return (
    <div className="w-full h-[4.125rem] px-20 py-2 flex items-center justify-between bg-white shadow">
        

        <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-12 w-auto" />

            <div className="w-[31.688rem] relative">
                <input
                 type="text"
                 placeholder="دنبال چه محصولی هستی؟"
                 className="w-full text-xs text-right pl-10 py-2 px-3 rounded-lg border border-gray-200 bg-[#EDEDED] shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <SearchNormal1 size="18" color="#6B7280" />
                </div>
            </div>
        </div>

        <div className="flex items-center gap-4"> 
            <div className="flex items-center gap-1">
                <User size={20} color="#000" className="cursor-pointer" />
                <ArrowDown3 size="17" color="#000" className="cursor-pointer"/>
            </div>
            <span className="text-gray-400">|</span>
            <ShoppingCart size={20} color="#000" className="cursor-pointer" />
        </div>

    </div>
  );
};

export default Navbar;
