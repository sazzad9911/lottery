"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function SellTicketCard() {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className="bg-[#D94F72] rounded-md px-4 py-2">
      <div className="flex justify-between items-center">
        <p className="text-[16px] md:text-[20px] font-bold text-white">
        {language === "en" ? "S5692KL" : "S5692KL"}
        </p>
        <p className="text-[14px] md:text-[16px] font-light text-white">
        {language === "en" ? "6m ago" : "৬ মি আগে"}
        </p>
      </div>
      <p className="text-[14px] md:text-[16px] font-light text-white mt-1">
      {language === "en" ? "Ashulia, Dhaka, Bangladesh" : "আশুলিয়া, ঢাকা, বাংলাদেশ"}
      </p>
    </div>
  );
}
