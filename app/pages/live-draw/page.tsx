import RecentSellTicketPart from "@/app/components/RecentSellTicketPart";
import React from "react";

export default function LiveDraw() {
  return (
    <div className="container mx-auto px-2 md:px-8">
      <div className="md:flex justify-between pb-4 md:pb-12 flex-wrap">
        <div>
          <p className="text-[16px] md:text-[20px] font-bold text-black">
            Kazi Nazrul Islam Lottery 2024
          </p>
          <p className="text-[16px] md:text-[20px] font-light text-black">
            Draw: 20 July 2024 at 4:10 pm
          </p>
        </div>
        <div className="">
          <p className="text-[16px] md:text-[20px] font-bold text-black text-end">
            Ticket Is Open
          </p>
          <p className="text-[16px] md:text-[20px] font-light text-black text-end">
            End: 18 July 2024 at 4:10 pm
          </p>
        </div>
      </div>
      <p className="text-[14px] md:text-[16px] font-normal text-black">
        Live draw will start soon. Get ready to join the live for the current
        lottery
      </p>
      <p className="text-[16px] md:text-[20px] font-normal text-black py-4">
        Time Reminding - 2D 1H 20M 20S
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-[#8F8F8F] h-[250px] md:h-[400px] xl:h-[500px] flex justify-center items-center rounded">
          <svg
           className=" h-[50px] md:h-[100px] xl:h-[180px] cursor-pointer hover:scale-105 duration-300"
            viewBox="0 0 188 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M94 172.333C137.262 172.333 172.333 137.262 172.333 94C172.333 50.7376 137.262 15.6666 94 15.6666C50.7377 15.6666 15.6667 50.7376 15.6667 94C15.6667 137.262 50.7377 172.333 94 172.333Z"
              fill="#FF3742"
            />
            <path
              d="M120.741 102.296L83.7657 124.126C77.8141 127.64 70.5 123.066 70.5 115.83V72.1698C70.5 64.9343 77.8141 60.3607 83.7657 63.8746L120.741 85.7046C126.864 89.3204 126.864 98.6797 120.741 102.296Z"
              fill="#FF3742"
            />
          </svg>
        </div>
        <div className="lg:col-span-1 ">
          <p className="text-[16px] md:text-[20px] font-normal text-black pb-4">
          Recent Sell Tickets
          </p>
          <RecentSellTicketPart></RecentSellTicketPart>
        </div>
      </div>
    </div>
  );
}
