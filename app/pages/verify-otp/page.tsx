"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const router = useRouter();
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
        Verify OTP
        </h2>
        <p className="mb-6 text-center ">
        Enter the OTP sent to your email or phone to verify your account and complete the registration process. Need help? Contact support.
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-8">
            <label className="block mb-1 ">OTP</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-[#D9D9D9] rounded-md text-black outline-[#D94F72]"
              placeholder="Give your OTP..."
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#F9DC00] text-black py-2 rounded-md font-semibold hover:scale-105 duration-300"
          >
            Next
          </button>
        </form>
        <div className="mt-4 text-end">
          <Link href="/pages/login" className="text-[#F9DC00] hover:underline">
            Back to login?
          </Link>
        </div>
      </div>
    </div>
  );
}
