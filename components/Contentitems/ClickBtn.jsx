import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export function clickBtn() {
  return (
    <div className="flex justify-end gap-[9px] mt-[11px]">
      <div className="border w-[40px] h-[40px] items-center flex justify-center rounded">
        <FaChevronLeft />
      </div>
      <div className="border w-[40px] h-[40px] items-center flex justify-center rounded">
        <FaChevronRight />
      </div>
    </div>
  );
}
