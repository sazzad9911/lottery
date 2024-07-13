"use client";
import { RootState } from "@/app/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ForgotPass() {
  const language = useSelector((state: RootState) => state.language.language);
  const [number, setNumber] = useState("");
  const router = useRouter();

  const handleVerifyNumber = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Mobile Number:", number);
    router.push("/pages/change-pass", { scroll: false });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#D94F72] text-white px-4 md:px-16 py-8 rounded-md shadow-md w-full max-w-lg mx-2 font-light">
        <h2 className="text-[18px] md:text-[24px]  mb-4 text-center">
          {language==="en"?"Forget Password":"পাসওয়ার্ড ভুলে গেছেন"}
        </h2>
        <p className="mb-8 text-center ">
        {language==="en"?"Forgot your password? No problem! Click on the":"আপনি কি পাসওয়ার্ড ভুলে গেছেন? সমস্যা নেই! ক্লিক করুন"} <span className="font-bold">{language==="en"?"Forget Password":"পাসওয়ার্ড ভুলে গেছেন"}</span>{" "}
        {language==="en"?"link, enter your registered email, and follow the instructions to reset your password."
          :"লিঙ্ক, আপনার নিবন্ধিত ইমেল লিখুন, এবং আপনার পাসওয়ার্ড পুনরায় সেট করতে নির্দেশাবলী অনুসরণ করুন।"} 
        </p>
        <form onSubmit={handleVerifyNumber}>
          <div className="mb-6">
            <label className="block mb-1 ">
            {language==="en"?"Mobile Number":"মোবাইল নম্বর"}
              </label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-[#D9D9D9] rounded-md text-black outline-[#D94F72]"
              placeholder={language==="en"?"Write your number":"আপনার নম্বর লিখুন"}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F9DC00] text-black py-2 rounded-md font-semibold hover:scale-105 duration-300"
          >
           {language==="en"?"Next":"পরবর্তী"} 
          </button>
        </form>

        <div className="mt-4 text-end">
          <Link href="/pages/login" className="text-[#F9DC00] hover:underline">
          {language==="en"?"Back to login?":"প্রবেশ করতে পেছানে যান?"} 
          </Link>
        </div>
      </div>
    </div>
  );
}
