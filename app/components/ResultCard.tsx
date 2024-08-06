"use client";
import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function ResultCard() {
    const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className="bg-[#D94F72] rounded-md px-4 py-2">
    <div className="flex justify-between items-center">
      <p className="text-[16px] md:text-[20px] font-bold text-white">
      {language === "en" ? "Kazi Nazrul Islam Lottery" : "Kazi Nazrul Islam Lottery"}
      </p>
      
    </div>
    <p className="text-[14px] md:text-[16px] font-light text-white mt-1">
    {language === "en" ? "Draw Date: 12 June 2024" : "Draw Date: 12 June 2024"}
    </p>
  </div>
  )
}

export default ResultCard
