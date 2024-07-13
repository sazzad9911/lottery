"use client";
import { RootState } from "@/app/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ChangePass() {
  const language = useSelector((state: RootState) => state.language.language);
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const router = useRouter();

  const handleChangePass = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Password:", password);
    router.push("/", { scroll: false });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#D94F72] text-white px-4 md:px-16 py-8 rounded-md shadow-md w-full max-w-lg mx-2 font-light">
        <h2 className="text-[18px] md:text-[24px]  mb-4 text-center">
          {language==="en"?"New Password":"নতুন পাসওয়ার্ড"}
        </h2>
        <p className="mb-6 text-center ">
        {language==="en"?"Set a new password to secure your account. Ensure it’s strong and unique. Need assistance? Contact our support team."
        :"আপনার অ্যাকাউন্ট সুরক্ষিত করতে একটি নতুন পাসওয়ার্ড সেট করুন। এটি শক্তিশালী এবং অনন্য তা নিশ্চিত করুন। সহায়তা প্রয়োজন? আমাদের সমর্থন দলের সাথে যোগাযোগ করুন."}
        </p>
        <form onSubmit={handleChangePass}>
          <div className="mb-4 relative">
            <label className="block mb-1">
            {language==="en"?"New Password":"নতুন পাসওয়ার্ড"}
              </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-3 py-2 bg-[#D9D9D9] rounded-md text-black outline-[#D94F72]"
              placeholder={language==="en"?"Give new password":"নতুন পাসওয়ার্ড দিন"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 pt-7 flex items-center text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <div className="mb-6 relative">
            <label className="block mb-1">
            {language==="en"?"Re Type Password":"পাসওয়ার্ড পুনরায় টাইপ করুন"}
              </label>
            <input
              type={showPassword1 ? "text" : "password"}
              className="w-full px-3 py-2 bg-[#D9D9D9] rounded-md text-black outline-[#D94F72]"
              placeholder={language==="en"?"Give password again":"আবার পাসওয়ার্ড দিন"}
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              required
            />
            <button
              className="absolute inset-y-0 right-0 pr-3 pt-7 flex items-center text-gray-700"
              onClick={() => setShowPassword1(!showPassword1)}
            >
              {showPassword1 ? "🙈" : "👁️"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#F9DC00] text-black py-2 rounded-md font-semibold hover:scale-105 duration-300"
          >
            {language==="en"?"Done!":"সম্পন্ন!"}
          </button>
        </form>
        <div className="mt-4 text-end">
          <Link href="/pages/login" className="text-[#F9DC00] hover:underline">
          {language==="en"?"Back to login?":"লগইন করতে পেছান?"} 
          </Link>
        </div>
      </div>
    </div>
  );
}
