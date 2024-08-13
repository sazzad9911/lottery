"use client";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { postApi } from "@/functions/API";
import { toast } from "react-toastify";
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
}

const TicketForm = ({ data }: { data: Root }) => {
  const language = useSelector((state: RootState) => state.language.language);
  const [mobileNumber, setMobileNumber] = useState("");
  const [reference, setReference] = useState("");
  const [quantity, setQuantity] = useState(1);
  const ticketPrice = data.ticketPrice;
  const discount = 0;
  const totalPrice = ticketPrice * quantity - discount;

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await postApi("/api/buy-ticket", {
        cancelUrl: "/",
        redirectUrl: "/view-ticket",
        eventId: data.id,
        amount: totalPrice,
        quantity: quantity,
        phone: mobileNumber,
      });
      window.location.href=res.data.url
    } catch (error:any) {
      toast.error(error.response.data.error,{autoClose:2000})
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4 md:mb-6">
        <label className="block  font-semibold">
          {language === "en" ? "Mobile Number" : "মোবাইল নম্বর"}
        </label>
        <input
          required
          type="tel"
          className="mt-1 w-full px-3 py-2 rounded-md bg-[#D9D9D9] outline-[#D94F72]"
          placeholder={language === "en" ? "Write your number" : "নম্বর লিখুন"}
          value={mobileNumber}
          maxLength={11}
          pattern="[0-9]{11}" // Ensures only 11 digits
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
            if (value.length <= 11) {
              setMobileNumber(value); // Update the state only with numbers
            }
          }}
        />
      </div>
      <div className="mb-4 md:mb-6">
        <label className="block  font-semibold">
          {language === "en" ? "Reference" : "রেফারেন্স"} {"("}
          <span className="text-[#D94F72]">
            {language === "en" ? "Optional" : "অপশনাল"}
          </span>
          {")"}
        </label>
        <input
          type="text"
          className="mt-1 w-full px-3 py-2 rounded-md bg-[#D9D9D9] outline-[#D94F72]"
          placeholder={
            language === "en" ? "Reference if any" : "রেফারেন্স যদি থাকে"
          }
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />
      </div>
      <div className="mb-4 md:mb-6">
        <label className="block font-semibold">
          {language === "en" ? "Ticket Quantity" : "টিকিটের পরিমাণ"}
        </label>
        <div className="flex items-center">
          <button className="" onClick={handleDecrement}>
            <svg
              className="hover:scale-105 duration-300 h-12 w-12"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" fill="#CA5CB2" />
              <path
                d="M18.5 26H33.5"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <span className="mx-4 flex justify-center items-center bg-[#D9D9D9] rounded-full h-12 w-12">
            {quantity}
          </span>
          <div className="" onClick={handleIncrement}>
            <svg
              className="hover:scale-105 duration-300 h-12 w-12"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" fill="#D94F72" />
              <path
                d="M16 26H36M26 16V36"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex gap-2 md:gap-4 items-center flex-wrap">
        <div className=" font-semibold text-lg">
          <span>{language === "en" ? "Total Price:" : "মোট দাম:"}</span>
          <span className="">
            <span className="text-[#CA5CB2]">
              {ticketPrice} × {quantity} - {discount} = {totalPrice}
            </span>{" "}
            {language === "en" ? "BDT" : "বিডিটি"}
          </span>
        </div>
        {/* <Link href="/pages/view-ticket"> */}
        <button
          type="submit"
          className="px-10  font-semibold bg-[#F9DC00] text-black py-2 rounded-md"
        >
          {language === "en" ? "Buy" : "ক্রয় করুন"}
        </button>
        {/* </Link> */}
      </div>
    </form>
  );
};

export default TicketForm;
