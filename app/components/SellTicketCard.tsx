import React from "react";

export default function SellTicketCard() {
  return (
    <div className="bg-[#D94F72] rounded-md px-4 py-2">
      <div className="flex justify-between items-center">
        <p className="text-[16px] md:text-[20px] font-bold text-white">
          S5692KL
        </p>
        <p className="text-[14px] md:text-[16px] font-light text-white">
          6m ago
        </p>
      </div>
      <p className="text-[14px] md:text-[16px] font-light text-white mt-1">
        Ashulia, Dhaka, Bangladesh
      </p>
    </div>
  );
}
