"use client";
import { getApi, postApi, putApi } from "@/functions/API";
import axios from "axios";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import bkashPay from "./bkashPay";
interface wallets {
  name: string;
  id: string;
  icon: string;
  cashout: boolean;
  payment: boolean;
}
interface walletNameTypes {
  id: string;
  number: string;
}
interface searchParamsTypes {
  redirectUrl: string;
  token: string;
}

const Data = [
  ,
  {
    image: "https://i.ibb.co/871kCp5/nagadP.png",
    name: "Nagad",
  },
  {
    image: "https://i.ibb.co/XSjF1Kh/rocketP.png",
    name: "Rocket",
  },
];
export default function Pay({ params }: { params: { user: string } }) {
  const [walletDetails, setWalletDetails] = useState<wallets[] | null>();
  const [walletName, setWalletName] = useState<walletNameTypes | null>();
  const [id, setId] = useState<wallets | null>();
  const searchParams = useSearchParams();
  const amount = parseInt(searchParams.get("amount") as string) || 0;
  const redirectUrl = (searchParams.get("redirect") as string) || "/";
  const cancelUrl = (searchParams.get("cancelUrl") as string) || "/";
  const ref = (searchParams.get("ref") as string) || null;
  const postCode = (searchParams.get("postCode") as string) || null;
  const address = (searchParams.get("address") as string) || null;
  const motherName = (searchParams.get("motherName") as string) || null;
  const fatherName = (searchParams.get("fatherName") as string) || null;
  const name = (searchParams.get("name") as string) || null;
  const refId = (searchParams.get("refId") as string) || null;
  const { user } = params;
  const [loader, setLoader] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(5 * 60);
  const [transactionId, setTransactionId] = useState<string>();

  const onTimerEnd = () => {
    window.location.href = cancelUrl;
  };
  const startTimer = () => {
    setTimeRemaining(5 * 60);
  };
  const resetTimer = () => {
    setTimeRemaining(0);
  };
 
  const bkash = {
    image: "https://i.ibb.co/S6sXLdy/bkashP.png",
    name: "BKash",
    click: bkashPay,
    data: {
      username: "sandboxTokenizedUser02",
      password: "sandboxTokenizedUser02@12345",
      app_key: "4f6o0cjiki2rfm34kfdadl1eqq",
      app_secret: "2is7hdktrekvrbljjh44ll3d9l1dtjo4pasmjvs5vl5qr3fug4b",
      amount:"50",
      callBack:""
    },
  };

  if (loader) {
    return (
      <div className="h-screen w-screen text-white  bg-[#2E4053] flex justify-center items-center absolute top-0 left-0 z-10">
        <h1 className="text-3xl">Loading....</h1>
      </div>
    );
  }
  return (
    <div className="h-screen w-screen text-white flex justify-center items-center top-0 left-0  px-5 py-3 absolute z-50 bg-white">
      <div className="max-w-[500px] min-h-[calc(100vh-100px)] overflow-y-scroll bg-[#2E4053] px-4 py-2 rounded-md">
        <p className="text-center text-3xl py-5">Online-Pay</p>
        <p className="text-center">
          Online pay is a online payment system for transaction money via mobile
          wallet
        </p>
        <p className="text-center my-1">Select your suitable payment wallet</p>
        <div className="flex flex-wrap gap-4 my-5 justify-center">
          <div
            onClick={() => bkash.click(bkash.data)}
            className="cursor-pointer hover:opacity-30"
          >
            <img
              className="w-[100px] h-[100px]  rounded"
              alt="image"
              src={bkash.image}
            />
            <p className=" text-center my-1 font-bold">{bkash.name}</p>
          </div>
        </div>
        <button
          className="bg-red-500 rounded-md py-2 px-2 w-full my-6"
          onClick={onTimerEnd}
        >
          Cancel
        </button>
      </div>
   
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
