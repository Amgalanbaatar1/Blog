import { CiSearch } from "react-icons/ci";
import { Menu } from "./menuIcon";
import { menuItems } from "../DATA/menuitems";
import { Mainmenu } from "../DATA/Mainmenu";
import { Nlogo } from "@/public/Nlogo";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export function Header() {
  return (
    <>
      <div className=" sticky top-0 z-10 bg-white flex justify-between container mx-auto border px-5 py-5 xl:py-8 xl:px-[250px] ">
        <Nlogo />
        <div className="flex  items-center justify-center flex-1 max-sm:hidden">
          <Mainmenu items={menuItems} />
        </div>
        <div className="flex  items-end justify-end bg-[#F4F4F5]  rounded-md py-2 px-2 max-md:hidden">
          <input className=" bg-[#F4F4F5]  flex items-end justify-end flex-2 rounded-md " type="search" placeholder="Search" />
          <CiSearch className="text-2xl " />
        </div>
        <MobileMenu />
      </div>
    </>
  );
}

function MobileMenu() {
  const [visible, setVisible] = useState(false);

  function closeMenu() {
    setVisible(false);
  }

  function openMenu() {
    setVisible(true);
  }

  return (
    <>
      <button onClick={openMenu} className="flex sm:hidden">
        <Menu />
      </button>
      {visible && <div className="fixed bg-slate-400/70 inset-0 "></div>}
      <div className={`fixed bg-white top-0 bottom-0 w-3/4 transition-all ${visible ? "right-0" : "-right-full"}`}>
        <button className="text-2xl" onClick={closeMenu}>
          <IoIosCloseCircleOutline />
        </button>
        <div className="p-8 font-bold text-lg">
          
          
          Mobile Menu
          

          <
          
          </div>

        <Mainmenu items={menuItems} />
      </div>
    </>
  );
}
