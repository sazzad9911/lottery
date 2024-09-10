"use client";
import { RootState } from "@/app/redux/store";
import { postApi } from "@/functions/API";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Login() {
  const language = useSelector((state: RootState) => state.language.language);
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const id = toast.loading("Loading...");
    try {
      const res = await postApi("/api/auth/login", {
        password: password,
        phone: `+88${mobileNumber}`,
      });
      //console.log(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      router.replace("/user");
      toast.update(id, {
        render: "Successful",
        type: "success",
        isLoading: false,
      });
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
          {language === "en" ? "Log In" : "লগ ইন"}
        </h2>
        <p className="mb-6 text-center ">
          {language === "en"
            ? "Welcome to our login page! Securely access your account to manage your profile, view activity, and stay connected with our services."
            : "আমাদের লগইন পৃষ্ঠায় স্বাগতম! আপনার প্রোফাইল পরিচালনা করতে, কার্যকলাপ দেখতে এবং আমাদের পরিষেবাগুলির সাথে সংযুক্ত থাকতে আপনার অ্যাকাউন্টে নিরাপদে অ্যাক্সেস করুন৷"}
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-1 ">
              {language === "en" ? "Mobile Number" : "মোবাইল নম্বর"}
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-[#D9D9D9] rounded-md text-black outline-[#D94F72]"
              placeholder={
                language === "en" ? "Write your number" : "আপনার নম্বর লিখুন"
              }
              value={mobileNumber}
              maxLength={11}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-1 relative">
            <label className="block mb-1">
              {language === "en" ? "Password" : "পাসওয়ার্ড"}
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-3 py-2 bg-[#D9D9D9] rounded-md text-black outline-[#D94F72]"
              placeholder={
                language === "en" ? "Give password" : "পাসওয়ার্ড দিন"
              }
              value={password}
              maxLength={10}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 pt-7 flex items-center text-gray-700"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <div className="mb-4">
            <Link
              href="/pages/forgot-password"
              className="text-[#F9DC00] hover:underline"
            >
              {language === "en"
                ? "Forgot Password?"
                : "পাসওয়ার্ড ভুলে গেছেন?"}
            </Link>
          </div>
         
            <button
              type="submit"
              className="w-full bg-[#F9DC00] text-black py-2 rounded-md font-semibold hover:scale-105 duration-300"
            >
              {language === "en" ? "Log In" : "লগ ইন"}
            </button>
        
        </form>
        <div className="mt-4 text-end">
          <Link
            href="/pages/sign-up"
            className="text-[#F9DC00] hover:underline"
          >
            {language === "en"
              ? "Create New Account?"
              : "নতুন অ্যাকাউন্ট তৈরি করুন?"}
          </Link>
        </div>
      </div>
    </div>
  );
}
