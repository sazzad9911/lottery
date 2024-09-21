"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { getApi } from "@/functions/API";
import { toast } from "react-toastify";

export default function SignUp() {
  const language = useSelector((state: RootState) => state.language.language);
  const [mobileNumber, setMobileNumber] = useState("");
  const router = useRouter();
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = toast.loading("Loading...");
    try {
      const res = await getApi("/api/auth/create", {
        phoneNumber: `+88${mobileNumber}`,
      });
      toast.update(id, {
        render: "Successful",
        type: "success",
        isLoading: false,
      });
      router.push(`/pages/verify-otp?token=${res.data.key}&number=${mobileNumber}`, { scroll: false });
    } catch (error: any) {
      toast.update(id, {
        render: error.response.data.error,
        type: "error",
        isLoading: false,
      });
    } finally {
      setTimeout(() => {
        toast.dismiss(id);
      }, 3000);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#D94F72] text-white px-4 md:px-16 py-8 rounded-md shadow-md w-full max-w-lg mx-2 font-light">
        <h2 className="text-[18px] md:text-[24px]  mb-4 text-center">
          {language === "en" ? "New Account" : "নতুন অ্যাকাউন্ট"}
        </h2>
        <p className="mb-6 text-center ">
          {language === "en"
            ? "Create a new account to enjoy personalized content, exclusive offers,and seamless access to our services. Sign up by providing your details, verifying your phone, and setting a secure password."
            : "ব্যক্তিগতকৃত সামগ্রী, একচেটিয়া অফার, এবং আমাদের পরিষেবাগুলিতে বিরামহীন অ্যাক্সেস উপভোগ করতে একটি নতুন অ্যাকাউন্ট তৈরি করুন৷ আপনার বিশদ প্রদান করে, আপনার ফোন যাচাই করে এবং একটি সুরক্ষিত পাসওয়ার্ড সেট করে সাইন আপ করুন।"}
        </p>
        <form onSubmit={handleSignUp}>
          <div className="mb-8">
            <label className="block mb-1 ">
              {language === "en" ? "Mobile Number" : "মোবাইল নম্বর"}
            </label>
            <input
              type="tel"
              className="w-full px-3 py-2 bg-[#D9D9D9] rounded-md text-black outline-[#D94F72]"
              placeholder={"01*********"}
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              maxLength={11}
              minLength={11}
              pattern="[0-9]{11}"
            />
          </div>
         
          <button
            type="submit"
            className="w-full bg-[#F9DC00] text-black py-2 rounded-md font-semibold hover:scale-105 duration-300"
          >
            {language === "en" ? "Next" : "পরবর্তী"}
          </button>
        
        </form>
        <div className="mt-4 text-end">
          <Link href="/pages/login" className="text-[#F9DC00] hover:underline">
            {language === "en" ? "Back to login?" : "লগইন করতে পেছান?"}
          </Link>
        </div>
      </div>
    </div>
  );
}
