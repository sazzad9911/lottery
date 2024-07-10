import React from "react";
import img from "../../public/images/dummy.png";
import Image from "next/image";

export default function WinnerCard() {
  return (
    <div className="flex flex-col items-center">
      <div className=" h-20 w-20 md:h-40 md:w-40">
        <Image src={img} alt="dp" className="relative rounded-full"></Image>
      </div>
      <div className="text-center space-y-1">
        <p className="text-[16px] md:text-[18px] font-bold ">
          Kazi Nazrul Islam Lottery
        </p>
        <p className="text-[14px] md:text-[16px] font-light ">
          1st Prize (10 Lakh)
        </p>
        <p className="text-[16px] md:text-[18px] font-normal ">Munia Islam</p>
        <p className="text-[12px] md:text-[14px] font-light ">
          Kurigram, Rangpur
        </p>
        <p className="text-[12px] md:text-[14px] font-light ">
          Draw Date: 11 Jun 2021
        </p>
      </div>
    </div>
  );
}
