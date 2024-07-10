"use client";
import React, { useState } from "react";

const TicketForm: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [reference, setReference] = useState("");
  const [quantity, setQuantity] = useState(1);
  const ticketPrice = 6;
  const discount = 5;
  const totalPrice = ticketPrice * quantity - discount;

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-4 md:mb-6">
        <label className="block  font-semibold">Mobile Number</label>
        <input
          type="text"
          className="mt-1 w-full px-3 py-2 rounded-md bg-[#D9D9D9] outline-[#D94F72]"
          placeholder="Write your number..."
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>
      <div className="mb-4 md:mb-6">
        <label className="block  font-semibold">
          Reference {"("}
          <span className="text-[#D94F72]">Optional</span>
          {")"}
        </label>
        <input
          type="text"
          className="mt-1 w-full px-3 py-2 rounded-md bg-[#D9D9D9] outline-[#D94F72]"
          placeholder="Reference if any"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />
      </div>
      <div className="mb-4 md:mb-6">
        <label className="block font-semibold">Ticket Quantity</label>
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
          <button className="" onClick={handleIncrement}>
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
          </button>
        </div>
      </div>
      <div className="flex gap-2 md:gap-4 items-center flex-wrap">
        <div className=" font-semibold text-lg">
          <span>Total Price: </span>
          <span className="">
            <span className="text-[#CA5CB2]">
              {ticketPrice} × {quantity} - {discount} = {totalPrice}
            </span>{" "}
            BDT
          </span>
        </div>
        <button className="px-10  font-semibold bg-[#F9DC00] text-black py-2 rounded-md">
          Buy
        </button>
      </div>
    </div>
  );
};

export default TicketForm;
