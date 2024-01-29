export function Content() {
  return (
    <div className=" container mx-auto border pb-36 xl:px-[250px] relative">
      <img src="/images/image.png" alt="Content image" />

      <div className="border w-[598px] h-[252px] bg-[#fff] rounded-xl p-10 absolute top-[243px] left-[260.25px]">
        <button className="bg-[#1d4ed8] rounded-md py-1 px-2.5 mb-4 text-white">Technology</button>
        <h1 className="text-4xl mb-6 font-medium">
          Grid system for better <br /> Design User Interface
        </h1>
        <p className="text-[#97989F] font-normal">August 20, 2022</p>
      </div>
    </div>
  );
}
