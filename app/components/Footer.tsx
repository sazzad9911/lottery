import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import img1 from "../../public/images/image1.png";
import img2 from "../../public/images/image2.png";
import img3 from "../../public/images/image3.png";
import FooterSocialSVG from "./FooterSocialSVG";

const Footer: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className="bg-[#F5F5F5]">
      <div className="container mx-auto px-2 md:px-8  pt-10">
        <footer className="border-t-4 border-t-[#D94F72] ">
          <div className="container mx-auto text-center">
            <p className="text-center font-semibold mt-8">
            {language === "en" ? "Powered By" : "সৌজন্যে"}
              </p>
            <div className="flex justify-center items-center">
              <div className="relative h-10 lg:h-20 w-20 lg:w-40">
                <Image
                  fill
                  src={img1}
                  alt="Powered By 1"
                  className="mx-2 absolute"
                />
              </div>
              <div className="relative h-16 lg:h-32 w-20 lg:w-40">
                <Image
                  fill
                  src={img2}
                  alt="Powered By 1"
                  className="mx-2 absolute"
                />
              </div>
              <div className="relative h-16 lg:h-32 w-20 lg:w-40">
                <Image
                  fill
                  src={img3}
                  alt="Powered By 1"
                  className="mx-2 absolute "
                />
              </div>
            </div>
            <p className="text-center  font-semibold my-4 md:my-8">
            {language === "en" ? "Follow Us" : "অনুসরণ করুন"}
              </p>
            <FooterSocialSVG></FooterSocialSVG>
            <div className=" flex justify-center gap-2 md:gap-4 xl:gap-10 my-4 md:my-10 flex-wrap">
              <Link href="#" className="text-[#CA5CB2] underline mx-2 text-[14px] md:text-[20px] ">
              {language === "en" ? "Lottery Rules & Act" : "লটারির নিয়ম ও আইন"}
              </Link>
              <Link href="#" className="text-[#CA5CB2] underline mx-2 text-[14px] md:text-[20px] ">
              {language === "en" ? "Privacy Policy" : "গোপনীয়তা নীতি"}
              </Link>
              <Link href="#" className="text-[#CA5CB2] underline mx-2 text-[14px] md:text-[20px] ">
              {language === "en" ? "Return Policy" : "প্রত্যাবর্তন নীতি"}
              </Link>
              <Link href="#" className="text-[#CA5CB2] underline mx-2 text-[14px] md:text-[20px] ">
              {language === "en" ? "Site Map" : "সাইট মানচিত্র"}
              </Link>
              <Link href="#" className="text-[#CA5CB2] underline mx-2 text-[14px] md:text-[20px] ">
              {language === "en" ? "Data Deletion Policy" : "ডেটা মুছে ফেলার নীতি"}
              </Link>
            </div>
            <p className="text-gray-600 py-10 text-[14px] md:text-[20px] ">
              &copy; {new Date().getFullYear()} - {language === "en" ? "All Rights Reserved By DEAR LOTTERY" : "ডিয়ার লটারির সর্বস্বত্ব সংরক্ষিত"}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
