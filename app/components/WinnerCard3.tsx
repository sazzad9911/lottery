import React from "react";
import img3 from "../../public/images/winner3.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function WinnerCard() {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className="flex flex-col items-center">
      <div className="">        
        <Image src={img3} alt="dp" className="h-20 w-20 md:h-40 md:w-40 relative rounded-full"></Image>
      </div>

      <div className="text-center md:space-y-1">
        <p className="text-[14px] md:text-[18px] font-bold ">
        {language==="en"?"Kazi Nazrul Islam Lottery":"কাজী নজরুল ইসলাম লটারি"}
        </p>
        <p className="text-[14px] md:text-[16px] font-light ">
        {language==="en"?"1st Prize (10 Lakh)":"১ম পুরস্কার (১০ লাখ)"}
        </p>
        <p className="text-[14px] md:text-[18px] font-normal ">
        {language==="en"?"Rahim Mia":"রহিম মিয়া"}
          </p>
        <p className="text-[12px] md:text-[14px] font-light ">
        {language==="en"?"Lalmonirhat, Rangpur":"লালমনিরহাট, রংপুর"}
        </p>
        <p className="text-[12px] md:text-[14px] font-light ">
        {language==="en"?"Draw Date: 11 Jun 2023":"ড্র তারিখ: 11 জুন 2023"}
        </p>
      </div>
    </div>
  );
}
