import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export function Content() {
  return (
    <div className=" container mx-auto  border pb-36 xl:px-[250px] relative max-md:hidden">
      <img src="https://images.unsplash.com/photo-1546900703-cf06143d1239?" alt="Content image" style={{ borderRadius: 12 }} />
      <div className="flex justify-end gap-[9px] mt-[11px]">
        <div className="border w-[40px] h-[40px] items-center flex justify-center rounded">
          <FaChevronLeft />
        </div>
        <div className="border w-[40px] h-[40px] items-center flex justify-center rounded">
          <FaChevronRight />
        </div>
      </div>
      <div className="border w-[30%] h-[35%] bg-[#fff] rounded-xl p-10 absolute top-[243px] left-[268.25px] max-2xl:hidden  ">
        <button className="bg-[#1d4ed8] rounded-md py-1 px-2.5 mb-4 text-white">Technology</button>
        <h1 className="text-4xl mb-6 font-medium">
          Grid system for better <br /> Design User Interface
        </h1>
        <p className="text-[#97989F] font-normal mt-[20px]">August 20, 2022</p>
      </div>
    </div>
  );
}
