"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import timeAgo from "@/functions/timeAgo";

export default function SellTicketCard({
  date,
  number,
  title,
}: {
  date: string;
  number: string;
  title: string;
}) {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className="bg-[#D94F72] rounded-md px-4 py-2">
      <div className="flex justify-between items-center">
        <p className="text-[16px] md:text-[20px] font-bold text-white">
          {number}
        </p>
        <p className="text-[14px] md:text-[16px] font-light text-white">
          {timeAgo(date, language)}
        </p>
      </div>
      <p className="text-[14px] md:text-[16px] font-light text-white mt-1">
        {title}
      </p>
    </div>
  );
}
