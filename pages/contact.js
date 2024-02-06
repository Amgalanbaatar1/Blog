import { Header } from "@/components/HeaderItems/Header";
import { AwesomeButton } from "react-awesome-button";
import { Footer } from "@/components/FooterItems/Footer";

export default function blog() {
  return (
    <div>
      <Header />
      <div className="border container mx-auto">
        <div className="container mx-auto  w-[895px] h-[895px] max-md:p-5 p-20 mt-16 ">
          <div className="w-[643px] mx-auto">
            <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
            <p className="text-[#696A75] max-md:w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className="flex max-md:justify-evenly  justify-between mt-5 ">
              <div className="border max-md:w-[250px]  w-[294px] h-[133px] p-5 rounded-xl">
                <h1 className="font-bold">Address</h1>
                <p className="text-[#696A75]">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
              </div>
              <div className="border max-md:w-[250px] w-[294px] h-[133px] rounded-xl p-5">
                <h1 className="font-bold">Contact</h1>
                <p className="text-[#696A75]">
                  313-332-8662 <br /> info@email.com
                </p>
              </div>
            </div>
            <div className="border bg-[#F6F6F7] max-md:w-[600px] h-[440px] w-[643px] p-7 mt-10 rounded-md">
              <h2 className="font-bold mb-[24px]">Leave a Message</h2>
              <form>
                <label className="flex gap-[24px]">
                  <input type="text" name="name" placeholder="Your Name" className="border p-1 rounded w-[225px] mb-6 " />
                  <input type="email" name="name" placeholder="Your Email" className="border p-1 rounded  w-[225px]  mb-6" />
                </label>
                <input type="email" name="name" placeholder="Subject" className="border p-1 rounded  w-[474px] mb-6 " />
                <textarea type="text-area" name="name" placeholder="Write a Message" className="border p-1 rounded  w-[474px] h-[134px]" />
              </form>
              <button className="bg-[#4B6BFB] p-2 text-white rounded mt-6 hover:bg-blue-700">Send Message</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
