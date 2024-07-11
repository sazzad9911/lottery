"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ForgotPass() {
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
          Forget Password
        </h2>
        <p className="mb-8 text-center ">
          Forgot your password? No problem! Click on the <span className="font-bold">{"'Forgot Password'"}</span>{" "}
          link, enter your registered email, and follow the instructions to
          reset your password.
        </p>
        <form onSubmit={handleVerifyNumber}>
          <div className="mb-6">
            <label className="block mb-1 ">Mobile Number</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-[#D9D9D9] rounded-md text-black outline-[#D94F72]"
              placeholder="Write your number..."
              value={number}
              onChange={(e) => setNumber(e.target.value)}
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
