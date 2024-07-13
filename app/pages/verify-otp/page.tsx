"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function VerifyOTP() {
  const language = useSelector((state: RootState) => state.language.language);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(10); // Timer set to 60 seconds
  const [resendAvailable, setResendAvailable] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setResendAvailable(true);
    }
  }, [timer]);

  const handleResendOTP = () => {
    // Logic to resend OTP
    console.log("Resending OTP...");
    setTimer(10); // Reset timer to 60 seconds
    setResendAvailable(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Mobile Number:", otp);
    router.push("/pages/info", { scroll: false });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#D94F72] text-white px-4 md:px-16 py-8 rounded-md shadow-md w-full max-w-lg mx-2 font-light">
        <h2 className="text-[18px] md:text-[24px]  mb-4 text-center">
        {language==="en"?"Verify OTP":"ওটিপি যাচাই করুন"}
        </h2>
        <p className="mb-6 text-center ">
        {language==="en"?"Enter the OTP sent to your email or phone to verify your account and complete the registration process. Need help? Contact support."
          :"আপনার অ্যাকাউন্ট যাচাই করতে আপনার ইমেল বা ফোনে পাঠানো ওটিপি লিখুন এবং নিবন্ধন প্রক্রিয়া সম্পূর্ণ করুন। সাহায্য দরকার? যোগাযোগ সমর্থন।"} 
        </p>
        <form onSubmit={handleLogin}>
          <div className="">
            <label className="block mb-1 ">
            {language==="en"?"OTP":"ওটিপি"}
              </label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-[#D9D9D9] rounded-md text-black outline-[#D94F72]"
              placeholder={language==="en"?"Give your OTP":"আপনার ওটিপি দিন"}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <div className="mt-2 mb-8">
            {resendAvailable ? (
              <button
                onClick={handleResendOTP}
                className="text-[#F9DC00] hover:underline"
              >
                {language==="en"?"Resend OTP":"আবার ওটিপি পাঠান"}
              </button>
            ) : (
              <span className="text-[#F9DC00]">
                {language==="en"?"Resend OTP in":"আবার ওটিপি পাঠান"} {timer} {language==="en"?"seconds":"সেকেন্ড"}
              </span>
            )}
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
