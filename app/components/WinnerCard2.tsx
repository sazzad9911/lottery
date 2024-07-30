import React from "react";
import img2 from "../../public/images/winner.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function WinnerCard() {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className="flex flex-col items-center">
      <div className=" h-20 w-20 md:h-40 md:w-40">        
        <Image src={img2} alt="dp" className="relative rounded-full"></Image>
      </div>

      <div className="text-center md:space-y-1">
        <p className="text-[14px] md:text-[18px] font-bold ">
        {language==="en"?"Kazi Nazrul Islam Lottery":"কাজী নজরুল ইসলাম লটারি"}
        </p>
        <p className="text-[14px] md:text-[16px] font-light ">
        {language==="en"?"2st Prize (7 Lakh)":"২ম পুরস্কার (৭ লাখ)"}
        </p>
        <p className="text-[14px] md:text-[18px] font-normal ">
        {language==="en"?"Monir Islam":"মনির ইসলাম"}
          </p>
        <p className="text-[12px] md:text-[14px] font-light ">
        {language==="en"?"Kurigram, Rangpur":"কুড়িগ্রাম, রংপুর"}
        </p>
        <p className="text-[12px] md:text-[14px] font-light ">
        {language==="en"?"Draw Date: 11 Jun 2023":"ড্র তারিখ: 11 জুন 2023"}
        </p>
      </div>
    </div>
  );
}
