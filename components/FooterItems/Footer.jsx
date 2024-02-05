import { Logo } from "@/public/Icons/Logo";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Mainmenu } from "../DATA/Mainmenu";
import { menuItems } from "../DATA/menuitems";
export function Footer() {
  return (
    <div className="container mx-auto border bg-[#F6F6F7]">
      <div className="flex px-[250px]  justify-between p-10 max-lg:flex-col">
        <div className="border-black w-[200px] text-gray-600 max-lg:hidden ">
          <p className="text-[#181A2A] font-semibold  ">About</p>
          <p className="mb-5 text-[#3B3C4A]  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <p className="text-[#3B3C4A]">Email : info@jstemplate.net</p>
          <p className="text-[#3B3C4A]">Phone : 880 123 456 789</p>
        </div>
        <div className="flex gap-3 flex-col text-[#3B3C4A] items-center justify-center mb-5">
          <Mainmenu items={menuItems} />
        </div>
        <div className="flex gap-3 text-2xl max-md:items-center justify-center ">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className="list-none flex border-t  px-[250px]  p-10  max-md:p-5 justify-between max-md:justify-center ">
        <Logo />
        <div className=" flex gap-5 text-[#3B3C4A] max-lg:hidden ">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </div>
      </div>
    </div>
  );
}
