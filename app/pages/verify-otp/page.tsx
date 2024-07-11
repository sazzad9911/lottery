"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function VerifyOTP() {
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
          Verify OTP
        </h2>
        <p className="mb-6 text-center ">
          Enter the OTP sent to your email or phone to verify your account and
          complete the registration process. Need help? Contact support.
        </p>
        <form onSubmit={handleLogin}>
          <div className="">
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
          <div className="mt-2 mb-8">
            {resendAvailable ? (
              <button
                onClick={handleResendOTP}
                className="text-[#F9DC00] hover:underline"
              >
                Resend OTP
              </button>
            ) : (
              <span className="text-[#F9DC00]">
                Resend OTP in {timer} seconds
              </span>
            )}
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
