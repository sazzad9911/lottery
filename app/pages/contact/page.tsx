"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
export default function page() {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl lg:text-4xl mb-10 text-[#000000] font-bold">
        {language === "en" ? "Contact Us" : "যোগাযোগ করুন"}
      </h1> 

      <div className="block sm:flex justify-between mb-14">
      <div className="mb-3">
        <p className="text-[#000000] text-xl lg:text-2xl mb-2">
        {language ==="en"?"Instant Messengering":"ইনস্ট্যান্ট মেসেঞ্জিং"}
          </p>
        <div className="flex gap-3">
          <svg
            className="w-10 h-10"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3707_706)">
              <path
                d="M11.3159 49.3142V60L21.3844 54.3195C24.191 55.1223 27.1744 55.5556 30.2655 55.5556C46.8351 55.5556 60.2655 43.118 60.2655 27.7778C60.2655 12.4365 46.8351 0 30.2655 0C13.6969 0 0.265503 12.4365 0.265503 27.7778C0.265503 36.4646 4.57211 44.2212 11.3159 49.3142Z"
                fill="url(#paint0_linear_3707_706)"
              />
              <path
                d="M26.8248 20.1445L10.7891 37.1229L25.3829 29.1159L33.008 37.1229L48.9531 20.1445L34.5212 28.0114L26.8248 20.1445Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_3707_706"
                x1="3000.27"
                y1="405.6"
                x2="3000.27"
                y2="5736"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00C6FF" />
                <stop offset="1" stop-color="#0068FF" />
              </linearGradient>
              <clipPath id="clip0_3707_706">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="w-10 h-10"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.875 0C16.3125 0 3.75 12.5625 3.75 28.125C3.75 34.5 5.8125 40.5 9.75 45.375L5.8125 57.375C5.625 58.125 5.8125 58.875 6.375 59.4375C6.5625 59.8125 7.125 60 7.5 60C7.6875 60 8.0625 60 8.25 59.8125L21.1875 54C24.5625 55.5 28.125 56.25 31.875 56.25C47.4375 56.25 60 43.6875 60 28.125C60 12.5625 47.4375 0 31.875 0Z"
              fill="#25D366"
            />
            <path
              d="M47.3125 40.3125C46.5625 42.5625 43.75 44.4375 41.3125 44.8125C40.75 45 40.1875 45 39.4375 45C37.9375 45 35.6875 44.625 31.75 42.9375C27.25 41.0625 22.75 37.125 19.1875 32.0625V31.875C18.0625 30.1875 16 27 16 23.625C16 19.5 18.0625 17.4375 18.8125 16.5C19.75 15.5625 21.0625 15 22.5625 15C22.9375 15 23.125 15 23.5 15C24.8125 15 25.75 15.375 26.6875 17.25L27.4375 18.75C28 20.25 28.75 21.9375 28.9375 22.125C29.5 23.25 29.5 24.1875 28.9375 25.125C28.75 25.6875 28.375 26.0625 28 26.4375C27.8125 26.8125 27.625 27 27.4375 27C27.25 27.1875 27.25 27.1875 27.0625 27.375C27.625 28.3125 28.75 30 30.25 31.3125C32.5 33.375 34.1875 33.9375 35.125 34.3125C35.5 33.9375 35.875 33.1875 36.4375 32.625L36.625 32.25C37.5625 30.9375 39.0625 30.5625 40.5625 31.125C41.3125 31.5 45.4375 33.375 45.4375 33.375L45.8125 33.5625C46.375 33.9375 47.125 34.125 47.5 34.875C48.25 36.5625 47.6875 39 47.3125 40.3125Z"
              fill="white"
            />
          </svg>
          <svg
            className="w-10 h-10"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 56.25C44.4975 56.25 56.25 44.4975 56.25 30C56.25 15.5025 44.4975 3.75 30 3.75C15.5025 3.75 3.75 15.5025 3.75 30C3.75 44.4975 15.5025 56.25 30 56.25Z"
              fill="url(#paint0_linear_3707_712)"
            />
            <path
              d="M43.0999 19.1415C43.3335 17.6312 41.8976 16.4392 40.5547 17.0287L13.809 28.7715C12.8461 29.1943 12.9165 30.6531 13.9153 30.9711L19.4308 32.7276C20.4836 33.0628 21.6234 32.8894 22.5427 32.2543L34.9781 23.6631C35.3531 23.4039 35.7619 23.9372 35.4414 24.2674L26.4902 33.4961C25.6219 34.3914 25.7942 35.9085 26.8387 36.5634L36.8606 42.8481C37.9847 43.5529 39.4307 42.8449 39.6409 41.4864L43.0999 19.1415Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3707_712"
                x1="30"
                y1="3.75"
                x2="30"
                y2="56.25"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#37BBFE" />
                <stop offset="1" stop-color="#007DBB" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div>
        <p className="text-[#000000] text-xl lg:text-2xl mb-2">
        {language ==="en"?"Direct Call":"সরাসরি কল"}
          </p>
        <div className="flex gap-1">
          <svg
            className="w-10 h-10"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M40.2518 33.3975L41.3905 32.2655C42.9645 30.7002 45.418 30.3787 47.432 31.4735L52.2083 34.07C55.2755 35.7372 55.9515 39.8237 53.5542 42.2075L50.0028 45.7385C49.0998 46.6365 47.9792 47.2927 46.6908 47.4127C43.7103 47.6907 37.5782 47.5407 30.3435 43.3057L40.2518 33.3975ZM25.4767 18.7064L26.1937 17.9934C27.9602 16.2371 28.1267 13.4173 26.5855 11.3587L23.4331 7.14769C21.5257 4.59979 17.8399 4.26322 15.6536 6.43707L11.7296 10.3388C10.6456 11.4167 9.91912 12.814 10.0072 14.364C10.169 17.2111 11.1395 22.4122 15.3794 28.8037L25.4767 18.7064Z"
              fill="#1C274C"
            />
            <path
              opacity="0.6"
              d="M30.1568 28.7428C22.7924 21.4201 25.459 18.7228 25.4757 18.7061L15.3784 28.8035C17.0439 31.314 19.2139 34.0085 22.0374 36.816C24.8867 39.649 27.6888 41.752 30.3425 43.3055L40.2507 33.3973C40.2507 33.3973 37.5443 36.0883 30.1568 28.7428Z"
              fill="#1C274C"
            />
          </svg>
          <a href="tel:+8809649110110"> 09649110110</a>
        </div>
      </div>
      </div>
      <p className="text-[#000000] text-xl lg:text-2xl mb-5">
      {language ==="en"?"With E-mail Support":"ই-মেইল সাপোর্ট"} 
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
        <div className="">
            <div className="pb-3">
              <label className="text-xl lg:text-2xl pb-3 text-[#000000]">
                {language ==="en"?"Name":"নাম"}
                </label>
            </div>
            <input
              type="text"
              placeholder={language ==="en"?"Name":"নাম"} 
              className="w-full p-3 bg-[#D9D9D9] rounded-md"
            />
          </div>
          <div className="">
            <div className="pb-3">
              <label className="text-xl lg:text-2xl pb-3 text-[#000000]">
                {language ==="en"?"E-mail":"ই-মেইল"}
                </label>
            </div>
            <input
              type="email"
              placeholder={language ==="en"?"Email":"ইমেইল"} 
              className="w-full p-3 bg-[#D9D9D9] rounded-md"
            />
          </div>
         </div>

         <div className="grid grid-cols-1 pb-3">
          <label className="text-xl lg:text-2xl pb-3 text-[#000000]">
          {language ==="en"?"Message":"বার্তা"} 
            </label>
          <textarea
            placeholder={language ==="en"?"Describe your problems":"সমস্যাগুলি বর্ণনা করুন"}
            className="w-full p-5 bg-[#D9D9D9] rounded-md"
          ></textarea>
        </div>

        <div className="text-center pt-4">
          <input
            type="submit"
            value={language ==="en"?"SEND":"পাঠান"}
            className="btn bg-[#D94F72] text-[#FFFFFF] px-8 py-2 rounded-md"
          />
        </div>
    </div>
  );
}
