"use client";
import React from "react";
import Image from "next/image";
import banner from "../../../public/images/ticket-banner.png";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
// import Ticket from '@/app/components/Ticket'
// import {ReactComponent as Ticket} from "../../../public/images/ticket.svg"

function Page() {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className=" -mt-6 md:-mt-10">
      <div className="mb-4 md:mb-8">
        <Image
          src={banner}
          alt="banner"
          className="relative max-h-[700px]"
        ></Image>
      </div>

  <div className="max-w-md mx-auto">
      <div className="mb-4 md:mb-6">
        <label className="block  font-semibold">
          {language === "en" ? "TICKET NUMBER" : "টিকেট নম্বর"}
        </label>
        <input
          type="text"
          className="mt-1 w-full px-3 py-2 rounded-md bg-[#D9D9D9] outline-[#D94F72]"
          placeholder={
            language === "en"
              ? "Write your ticket number"
              : "আপনার টিকিট নম্বর লিখুন"
          }
        />
      </div>
    </div>

    {/* <Ticket/> */}
    </div>
  );
}

export default Page;
