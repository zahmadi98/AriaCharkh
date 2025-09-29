import React, { useState } from "react";
import { ArrowDown2} from "iconsax-react";
import Bike from "../assets/Bike.png" 
import Helmet from "../assets/Helmet.png"
import Gear from "../assets/Gear.png"
const menuItems = [
  {
    label: "دوچرخه",
    dropdown: ["مورد اول", "مورد دوم", "مورد سوم"],
    icon: <ArrowDown2 size={16} color="#000"/>,
    icon2: <img src={Bike} className="w-7 h-5" />
  },
  {
    label: "لوازم دوچرخه",
    dropdown: ["مورد اول", "مورد دوم", "مورد سوم"],
    icon: <ArrowDown2 size={16} color="#000"/>,
    icon2: <img src={Helmet} className="w-5 h-5" />
  },
  {
    label: "قطعات دوچرخه",
    dropdown: ["مورد اول", "مورد دوم", "مورد سوم"],
    icon: <ArrowDown2 size={16} color="#000"/>,
    icon2: <img src={Gear} className="w-5 h-5" />
  },
  { label: "درباره ما", link: "/blog" },
  { label: "تماس با ما", link: "/contact" },
];

const NavbarMenu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="hidden md:block bg-white font-vazir shadow px-20 py-3 border-t-2">
      <ul className="flex gap-8 rtl:flex-row">
        {menuItems.map((item, idx) => (
          <li key={idx} className="relative">
            {item.dropdown ? (
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === idx ? null : idx)
                }
                className={`flex items-center gap-1 font-medium transition-colors
                  ${openDropdown === idx ? "text-indigo-600" : "text-gray-700"}
                  hover:text-indigo-600`}
              >
                {item.icon2 && (
                  <span
                    className={`${openDropdown === idx ? "text-indigo-600" : "text-gray-700"} 
                    hover:text-indigo-600`}
                  >
                    {item.icon2 }
                  </span>
                )}
                {item.label}
                {item.icon && (
                  <span
                    className={`${openDropdown === idx ? "text-indigo-600" : "text-gray-700"} 
                    hover:text-indigo-600`}
                  >
                    {item.icon}
                  </span>
                )}
              </button>
            ) : (
              <a
                href={item.link}
                className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </a>
            )}

            {/* Dropdown */}
            {item.dropdown && openDropdown === idx && (
              <ul className="absolute top-full mt-1 bg-white border border-gray-200 rounded shadow-lg w-40 z-50">
                {item.dropdown.map((subItem, subIdx) => (
                  <li key={subIdx}>
                    <button className="w-full text-right px-4 py-2 text-gray-700 hover:bg-gray-100">
                      {subItem}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMenu;
