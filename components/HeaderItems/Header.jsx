import { CiSearch } from "react-icons/ci";
import { Menu } from "./menuIcon";
import { menuItems } from "../DATA/menuitems";
import { Mainmenu } from "../DATA/Mainmenu";
import { Nlogo } from "@/public/Nlogo";

export function Header() {
  return (
    <div className=" flex justify-between container mx-auto border px-5 py-5 xl:py-8 xl:px-[250px]">
      <Nlogo />
      <div className="flex md:hidden">
        <Menu />
      </div>
      <div className="flex  items-center justify-center flex-1 max-md:hidden">
        <Mainmenu items={menuItems} />
      </div>
      <div className="flex  items-end justify-end bg-[#F4F4F5]  rounded-md py-2 px-2 max-md:hidden">
        <input className=" bg-[#F4F4F5]  flex items-end justify-end flex-2 rounded-md " type="search" placeholder="Search" />
        <CiSearch className="text-2xl " />
      </div>
    </div>
  );
}
