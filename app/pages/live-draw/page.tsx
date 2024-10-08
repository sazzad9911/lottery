"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { getApi } from "@/functions/API";
import Loader from "@/app/components/Loader";
import NoData from "@/app/components/NoData";
import TimeCounter from "@/app/components/TimeCounter";
import SellTicketCard from "@/app/components/SellTicketCard";

interface Root {
  id: string;
  title: string;
  description: string;
  image: string;
  ticketOpenFrom: string;
  ticketCloseTo: string;
  drawDate: string;
  date: string;
  ticketPrice: number;
  live_link: string;
  tickets: Ticket[];
}

interface Ticket {
  id: string;
  price: number;
  phone: string;
  ticket_number: number;
  eventId: string;
  date: string;
  ref: string;
}

export default function LiveDraw() {
  const language = useSelector((state: RootState) => state.language.language);
  const [data, setData] = useState<Root>();
  const getYouTubeVideoId = (url: string): string | null => {
    const regExp =
      /^.*(youtu.be\/|v\/|embed\/|watch\?v=|watch\?.+&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  useEffect(() => {
    getApi("/api/live-draw")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  if (!data) {
    return <Loader />;
  }
  if (!data.id) {
    return <NoData />;
  }
  return (
    <div className="container mx-auto px-2 md:px-8">
      <div className="md:flex justify-between pb-4 md:pb-12 flex-wrap">
        <div>
          <p className="text-[16px] md:text-[20px] font-bold text-black">
            {data.title}
          </p>
          <p className="text-[16px] md:text-[20px] font-light text-black">
            {language === "en" ? "Draw: " : "ড্র: "}
            {new Date(data.drawDate).toDateString()}{" "}
            {new Date(data.drawDate).toLocaleTimeString()}
          </p>
        </div>
        <div className="">
          {new Date(data.ticketCloseTo) > new Date() ? (
            <p className="text-[16px] md:text-[20px] font-bold text-black text-end">
              {language === "en" ? "Ticket Is Open" : "টিকিট চালু"}
            </p>
          ) : (
            <p className="text-[16px] md:text-[20px] font-bold text-black text-end">
              {language === "en" ? "Ticket Is Closed" : "টিকিট বন্ধ"}
            </p>
          )}
          <p className="text-[16px] md:text-[20px] font-light text-black text-end">
            {language === "en" ? "End: " : "শেষ: "}
            {new Date(data.ticketCloseTo).toDateString()}{" "}
            {new Date(data.ticketCloseTo).toLocaleTimeString()}
          </p>
        </div>
      </div>
      <p className="text-[14px] md:text-[16px] font-normal text-black">
        {language === "en"
          ? "Live draw will start soon, Get ready to join the live for the current lottery"
          : "লাইভ ড্র শীঘ্রই শুরু হবে, বর্তমান লটারির জন্য লাইভে যোগ দিতে প্রস্তুত হন"}
      </p>
      <p className="text-[16px] md:text-[20px] font-normal text-black py-4 flex">
        {language === "en" ? "Time Reminding - " : "আর বাকি- "}
        <TimeCounter targetDate={data.drawDate} />
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-[#8F8F8F] h-[250px] md:h-[400px] xl:h-[500px] flex justify-center items-center rounded">
          {/* <svg
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
          </svg> */}
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${getYouTubeVideoId(
              data.live_link
            )}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="lg:col-span-1 ">
          <p className="text-[16px] md:text-[20px] font-normal text-black pb-4">
            {language === "en"
              ? "Recent Sell Tickets"
              : "সাম্প্রতিক বিক্রি টিকিট"}
          </p>
          <div className="space-y-2 max-h-[500px] lg:h-[350px] xl:h-[450px] overflow-y-auto scrollbar-custom">
            {data.tickets?.map((doc,i)=>(
              <SellTicketCard date={doc.date} number={doc.ticket_number.toString()} title={data.title} key={i}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
