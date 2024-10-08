"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
// import { postApi } from "@/functions/API";
// import { toast } from "react-toastify";
export default function UserHeader() {
  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(true);
  const pathname = usePathname();
  const logOut = () => {
    Cookies.remove("token");
    window.location.href = "/login";
  };

  return (
    <div
      style={{
        backgroundColor: isOpen ? "#D94F72" : "#D94F72",
      }}
      className="h-[60px] p-1"
    >
      <div className="mx-5 sm:mx-8 lg:mx-14 flex justify-between items-center">
        <div className="md:flex">
          <Link
            href="/"
            className="text-white md:text-[18px] lg:text-[20px] font-bold"
          >
            DEAR LOTTERY AGENT
          </Link>
        </div>

        {/* <div className="ml-5 md:hidden"></div> */}

        <div className=" hidden md:flex items-center">
          <div className="rounded-full flex items-center">
            <Link href="/user">
              <div className="w-[40px] h-[40px]">
                <svg                 
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M23.7365 25.0275C23.5994 25.0079 23.4231 25.0079 23.2665 25.0275C19.8198 24.91 17.0781 22.09 17.0781 18.6237C17.0781 15.0791 19.9373 12.2004 23.5015 12.2004C27.046 12.2004 29.9248 15.0791 29.9248 18.6237C29.9052 22.09 27.1831 24.91 23.7365 25.0275Z"
                    stroke="white"
                    stroke-width="3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.34"
                    d="M36.6992 37.9527C33.2133 41.1448 28.5917 43.0835 23.5 43.0835C18.4083 43.0835 13.7866 41.1448 10.3008 37.9527C10.4966 36.1119 11.6716 34.3102 13.767 32.9002C19.1329 29.336 27.9063 29.336 33.2329 32.9002C35.3283 34.3102 36.5033 36.1119 36.6992 37.9527Z"
                    stroke="white"
                    stroke-width="3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.5003 43.0833C34.3158 43.0833 43.0837 34.3155 43.0837 23.5C43.0837 12.6844 34.3158 3.91666 23.5003 3.91666C12.6847 3.91666 3.91699 12.6844 3.91699 23.5C3.91699 34.3155 12.6847 43.0833 23.5003 43.0833Z"
                    stroke="white"
                    stroke-width="3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {/* <img src="./images/usericon" alt="image" /> */}
              </div>
            </Link>

            <div className="ml-5">
              <Link href="/user">
                <div>
                  <p className="text-[#FFFFFF] text-[16px]">Najmul Islam</p>
                </div>
              </Link>
              <div className="flex">
                <p className="text-[#FFFFFF] text-[14px]">200 BDT</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          {/* Mobile menu button */}
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75
            0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="35"
                height="35"
                viewBox="0 0 40 30"
              >
                <path
                  fill="#c2e8ff"
                  stroke="#7496c4"
                  stroke-miterlimit="20"
                  d="M1.5,18.5h37v3h-37V18.5z"
                ></path>
                <path
                  fill="#c2e8ff"
                  stroke="#7496c4"
                  stroke-miterlimit="20"
                  d="M1.5,8.5h37v3h-37V8.5z"
                ></path>
                <path
                  fill="#c2e8ff"
                  stroke="#7496c4"
                  stroke-miterlimit="20"
                  d="M1.5,28.5h37v3h-37V28.5z"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}

      {isOpen && (
        <div className="bg-[#D9D9D9] absolute h-full right-0 w-full overflow-y-auto text-white z-30 pb-10 pt-5 block md:hidden ">
          <div className="mb-2 flex justify-center items-center ">
            <li
              onClick={() => {
                setIsOpen(false);
              }}
              className={`list-none ${pathname === "/user"}`}
            >
              <Link href="/user">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.098 25.2423C23.0208 23.816 21.6271 22.6594 20.0268 21.8635C18.4264 21.0676 16.6631 20.6542 14.8758 20.6558C13.0884 20.6542 11.3251 21.0676 9.72478 21.8635C8.12443 22.6594 6.73075 23.816 5.65352 25.2423M24.098 25.2423C26.2001 23.3725 27.6826 20.9079 28.3518 18.1754C29.0209 15.4428 28.8437 12.5714 27.8435 9.94195C26.8432 7.31247 25.0673 5.04916 22.7512 3.45218C20.4351 1.8552 17.6883 1 14.875 1C12.0617 1 9.31488 1.8552 6.99879 3.45218C4.6827 5.04916 2.90678 7.31247 1.90656 9.94195C0.906331 12.5714 0.729057 15.4428 1.39824 18.1754C2.06743 20.9079 3.55146 23.3725 5.65352 25.2423M24.098 25.2423C21.5605 27.5057 18.2761 28.7544 14.8758 28.7495C11.4749 28.7548 8.19147 27.5061 5.65352 25.2423M19.5008 11.4058C19.5008 12.6324 19.0135 13.8088 18.1461 14.6762C17.2788 15.5435 16.1024 16.0308 14.8758 16.0308C13.6491 16.0308 12.4728 15.5435 11.6054 14.6762C10.738 13.8088 10.2508 12.6324 10.2508 11.4058C10.2508 10.1792 10.738 9.00278 11.6054 8.13543C12.4728 7.26807 13.6491 6.7808 14.8758 6.7808C16.1024 6.7808 17.2788 7.26807 18.1461 8.13543C19.0135 9.00278 19.5008 10.1792 19.5008 11.4058Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </li>
          </div>

          <li
            onClick={() => {
              setIsOpen(false);
            }}
            className={`list-none ${pathname === "/user"}`}
          >
            <Link href="/user">
              <p className="text-[#000000] hover:text-red-500 text-[16px] text-center">
                Najmul Islam
              </p>
            </Link>
          </li>

          <div className="flex justify-center items-center">
            <div>
              <p className="text-[#000000] text-[14px] mr-2">200</p>
            </div>
          </div>

          <div className="  font-normal flex flex-col justify-between">
            <div className="py-4 px-2 sm:px-6 ">
              <ul className=" space-y-4">
                <li
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={` flex items-center px-5 py-1 rounded-md ${
                    pathname === "/user" && "text-[#D94F72]"
                  }`}
                >
                  <Link href="/user" className=" flex gap-2 ">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.7754 14.2194H21.9316C21.6001 14.2194 21.2822 14.351 21.0478 14.5855C20.8133 14.8199 20.6816 15.1378 20.6816 15.4694V34.7319C20.6826 35.063 20.8146 35.3804 21.0488 35.6146C21.2831 35.8489 21.6005 35.9809 21.9316 35.9819H34.7754C35.1066 35.9809 35.424 35.8489 35.6582 35.6146C35.8924 35.3804 36.0244 35.063 36.0254 34.7319V15.4694C36.0254 15.1378 35.8937 14.8199 35.6593 14.5855C35.4248 14.351 35.1069 14.2194 34.7754 14.2194Z"
                        fill="#999999"
                      />
                      <path
                        d="M34.7754 3.51685H21.9316C21.6001 3.51685 21.2822 3.64855 21.0478 3.88296C20.8133 4.11738 20.6816 4.43533 20.6816 4.76685V11.1856C20.6826 11.5168 20.8146 11.8342 21.0488 12.0684C21.2831 12.3026 21.6005 12.4346 21.9316 12.4356H34.7754C35.1066 12.4346 35.424 12.3026 35.6582 12.0684C35.8924 11.8342 36.0244 11.5168 36.0254 11.1856V4.76685C36.0254 4.43533 35.8937 4.11738 35.6593 3.88296C35.4248 3.64855 35.1069 3.51685 34.7754 3.51685Z"
                        fill="#D94F72"
                      />
                      <path
                        d="M17.65 22.7819H4.8125C4.12214 22.7819 3.5625 23.3415 3.5625 24.0319V34.7319C3.5625 35.4222 4.12214 35.9819 4.8125 35.9819H17.65C18.3404 35.9819 18.9 35.4222 18.9 34.7319V24.0319C18.9 23.3415 18.3404 22.7819 17.65 22.7819Z"
                        fill="#D94F72"
                      />
                      <path
                        d="M17.65 3.51685H4.81251C4.6482 3.51627 4.48538 3.54821 4.33346 3.61083C4.18155 3.67344 4.04352 3.76548 3.92733 3.88167C3.81114 3.99786 3.71908 4.13588 3.65646 4.2878C3.59385 4.43972 3.56193 4.60253 3.56251 4.76685V19.7231C3.56251 20.0546 3.69421 20.3726 3.92863 20.607C4.16305 20.8414 4.48099 20.9731 4.81251 20.9731H17.65C17.9815 20.9731 18.2994 20.8414 18.5339 20.607C18.7683 20.3726 18.9 20.0546 18.9 19.7231V4.76685C18.9006 4.60253 18.8686 4.43972 18.806 4.2878C18.7434 4.13588 18.6514 3.99786 18.5352 3.88167C18.419 3.76548 18.2809 3.67344 18.1291 3.61083C17.9771 3.54821 17.8143 3.51627 17.65 3.51685Z"
                        fill="#999999"
                      />
                    </svg>
                    <span className="text-[#000000] hover:text-white">
                      Dashboard
                    </span>
                  </Link>
                </li>

                <li
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={` flex items-center px-5 py-1 rounded-md ${
                    pathname === "/user/sells" && "text-[#D94F72]"
                  }`}
                >
                  <Link href="/user/sells" className=" flex gap-2 ">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 41 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.1822 11.2695H33.3022C33.6119 11.2698 33.9104 11.3851 34.14 11.5929C34.3695 11.8008 34.5138 12.0864 34.5447 12.3945L35.3072 20.0195H32.7922L32.1672 13.7695H28.1822V17.5195C28.1822 17.8511 28.0505 18.169 27.8161 18.4034C27.5817 18.6378 27.2638 18.7695 26.9322 18.7695C26.6007 18.7695 26.2828 18.6378 26.0484 18.4034C25.8139 18.169 25.6822 17.8511 25.6822 17.5195V13.7695H15.6822V17.5195C15.6822 17.8511 15.5505 18.169 15.3161 18.4034C15.0817 18.6378 14.7638 18.7695 14.4322 18.7695C14.1007 18.7695 13.7828 18.6378 13.5484 18.4034C13.3139 18.169 13.1822 17.8511 13.1822 17.5195V13.7695H9.19474L7.19474 33.7695H20.6822V36.2695H5.81224C5.63765 36.2694 5.46503 36.2326 5.30551 36.1617C5.14599 36.0907 5.00309 35.9871 4.88604 35.8576C4.76898 35.7281 4.68036 35.5754 4.62589 35.4096C4.57141 35.2437 4.55228 35.0682 4.56974 34.8945L6.81974 12.3945C6.85071 12.0864 6.99494 11.8008 7.22449 11.5929C7.45405 11.3851 7.75258 11.2698 8.06224 11.2695H13.1822V10.397C13.1822 6.06203 16.5222 2.51953 20.6822 2.51953C24.8422 2.51953 28.1822 6.06203 28.1822 10.397V11.272V11.2695ZM25.6822 11.2695V10.397C25.6822 7.41203 23.4272 5.01953 20.6822 5.01953C17.9372 5.01953 15.6822 7.41203 15.6822 10.397V11.272H25.6822V11.2695ZM33.5497 30.1695L30.6822 27.3045V36.2695C30.6822 36.6011 30.5505 36.919 30.3161 37.1534C30.0817 37.3878 29.7638 37.5195 29.4322 37.5195C29.1007 37.5195 28.7828 37.3878 28.5484 37.1534C28.3139 36.919 28.1822 36.6011 28.1822 36.2695V27.3045L25.3172 30.1695C25.2019 30.2889 25.064 30.3841 24.9115 30.4497C24.759 30.5152 24.595 30.5497 24.429 30.5511C24.263 30.5525 24.0984 30.5209 23.9448 30.4581C23.7912 30.3952 23.6516 30.3024 23.5342 30.185C23.4169 30.0677 23.3241 29.9281 23.2612 29.7745C23.1984 29.6209 23.1667 29.4563 23.1682 29.2903C23.1696 29.1243 23.2041 28.9603 23.2696 28.8078C23.3351 28.6553 23.4304 28.5173 23.5497 28.402L28.5497 23.402C28.7842 23.1677 29.102 23.036 29.4335 23.036C29.7649 23.036 30.0828 23.1677 30.3172 23.402L35.3172 28.402C35.4366 28.5173 35.5319 28.6553 35.5974 28.8078C35.6629 28.9603 35.6974 29.1243 35.6988 29.2903C35.7002 29.4563 35.6686 29.6209 35.6058 29.7745C35.5429 29.9281 35.4501 30.0677 35.3327 30.185C35.2154 30.3024 35.0758 30.3952 34.9222 30.4581C34.7686 30.5209 34.604 30.5525 34.438 30.5511C34.272 30.5497 34.108 30.5152 33.9555 30.4497C33.803 30.3841 33.6651 30.2889 33.5497 30.1695Z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-[#000000] hover:text-white">
                      Sells
                    </span>
                  </Link>
                </li>

                <li
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={` flex items-center px-5 py-1 rounded-md ${
                    (pathname === "/user/results" && "text-[#D94F72]") 
                    // (pathname === "/user/invest" && "text-[#349407]")
                  }`}
                >
                  <Link href="/user/results" className=" flex gap-2 ">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 41 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3770_580)">
                        <path
                          d="M33.1826 37.5195C35.944 37.5195 38.1826 35.281 38.1826 32.5195C38.1826 29.7581 35.944 27.5195 33.1826 27.5195C30.4212 27.5195 28.1826 29.7581 28.1826 32.5195C28.1826 35.281 30.4212 37.5195 33.1826 37.5195Z"
                          fill="black"
                        />
                        <path
                          d="M15.6826 16.2695H13.1826V18.7695H15.6826V16.2695Z"
                          fill="black"
                        />
                        <path
                          d="M15.6826 22.5195H13.1826V25.0195H15.6826V22.5195Z"
                          fill="black"
                        />
                        <path
                          d="M15.6826 28.7695H13.1826V31.2695H15.6826V28.7695Z"
                          fill="black"
                        />
                        <path
                          d="M28.1826 16.2695H18.1826V18.7695H28.1826V16.2695Z"
                          fill="black"
                        />
                        <path
                          d="M28.1826 22.5195H18.1826V25.0195H28.1826V22.5195Z"
                          fill="black"
                        />
                        <path
                          d="M23.1827 28.7695H18.1826V31.2695H23.1827V28.7695Z"
                          fill="black"
                        />
                        <path
                          d="M9.43262 35.0195V8.76953H13.1826V12.5195H28.1826V8.76953H31.9326V22.5195H34.4326V8.76953C34.4326 8.10649 34.1692 7.4706 33.7004 7.00176C33.2315 6.53292 32.5957 6.26953 31.9326 6.26953H28.1826V5.01953C28.1826 4.35649 27.9192 3.72061 27.4504 3.25176C26.9815 2.78292 26.3457 2.51953 25.6826 2.51953H15.6826C15.0196 2.51953 14.3837 2.78292 13.9149 3.25176C13.446 3.72061 13.1826 4.35649 13.1826 5.01953V6.26953H9.43262C8.76958 6.26953 8.13369 6.53292 7.66485 7.00176C7.19601 7.4706 6.93262 8.10649 6.93262 8.76953V35.0195C6.93262 35.6826 7.19601 36.3185 7.66485 36.7873C8.13369 37.2561 8.76958 37.5195 9.43262 37.5195H23.1826V35.0195H9.43262ZM15.6826 5.01953H25.6826V10.0195H15.6826V5.01953Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3770_580">
                          <rect
                            width="40"
                            height="40"
                            fill="white"
                            transform="translate(0.682617 0.0195312)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="text-[#000000] hover:text-white">
                      Results
                    </span>
                  </Link>
                </li>

                <li
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={` flex items-center px-5 py-1 rounded-md ${
                    pathname === "/user/withdraws" && "text-[#D94F72]"
                  }`}
                >
                  <Link href="/user/withdraws" className=" flex gap-2 text-[#D94F72]">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 41 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M39.0163 6.6862C39.0163 3.92479 36.7778 1.6862 34.0163 1.6862H7.34961C4.58819 1.6862 2.34961 3.92479 2.34961 6.6862V23.3529C2.34961 26.1144 4.58819 28.3529 7.34961 28.3529H9.01628C9.93674 28.3529 10.6829 27.6067 10.6829 26.6862C10.6829 25.7657 9.93674 25.0195 9.01628 25.0195H7.34961C6.42914 25.0195 5.68294 24.2734 5.68294 23.3529V13.3529H35.6829V23.3529C35.6829 24.2734 34.9368 25.0195 34.0163 25.0195H32.3496C31.4291 25.0195 30.6829 25.7657 30.6829 26.6862C30.6829 27.6067 31.4291 28.3529 32.3496 28.3529H34.0163C36.7778 28.3529 39.0163 26.1144 39.0163 23.3529V6.6862ZM35.6829 10.0195V6.6862C35.6829 5.76574 34.9368 5.01954 34.0163 5.01954H7.34961C6.42914 5.01954 5.68294 5.76572 5.68294 6.6862V10.0195H35.6829Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M22.3489 36.6862C22.3489 37.6067 21.6028 38.3529 20.6823 38.3529C19.7618 38.3529 19.0156 37.6067 19.0156 36.6862V27.3644L16.8608 29.5189C16.2099 30.17 15.1547 30.17 14.5037 29.5189C13.8529 28.8684 13.8529 27.8129 14.5037 27.1622L19.5029 22.1734C20.1539 21.5235 21.2083 21.5242 21.8588 22.1745L26.8573 27.1732C27.5083 27.8242 27.5083 28.8794 26.8573 29.5304C26.2064 30.181 25.1511 30.181 24.5003 29.5304L22.3489 27.379V36.6862Z"
                        fill="#0F0F0F"
                      />
                    </svg>
                    <span className="text-[#000000] hover:text-white">
                      Withdraws
                    </span>
                  </Link>
                </li>

                {/* <li
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={` flex items-center px-5 py-1 rounded-md ${
                    pathname === "/user/withdraw" && "text-[#349407]"
                  }`}
                >
                  <Link href="/user/withdraw" className=" flex gap-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3 7.5L7.5 3M7.5 3L12 7.5M7.5 3V16.5M21 16.5L16.5 21M16.5 21L12 16.5M16.5 21V7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="hover:text-red-500">My Withdraws</span>
                  </Link>
                </li> */}

                {/* <li
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={` flex items-center px-5 py-1 rounded-md  ${
                    pathname === "/user/add-bank" && "text-[#349407]"
                  }`}
                >
                  <Link href="/user/add-bank" className=" flex gap-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 21V12.75M15.75 21V12.75M8.25 21V12.75M3 9L12 3L21 9M19.5 21V10.332C17.0189 9.94356 14.5113 9.74897 12 9.75C9.449 9.75 6.944 9.95 4.5 10.332V21M3 21H21M12 6.75H12.008V6.758H12V6.75Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="hover:text-red-500">My Bank</span>
                  </Link>
                </li> */}

            <li
                className={` flex items-center px-5 py-1 rounded-md ${
                   pathname === "/pages/login" && "text-[#D94F72]"
                }`}
              >
                <Link href="/pages/login" className=" flex gap-2 text-[#000000]">
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 23 22"
                      fill="none"
                    >
                      <path
                        d="M13 9.25V5.5C13 4.30653 13.4741 3.16193 14.318 2.31802C15.1619 1.47411 16.3065 1 17.5 1C18.6935 1 19.8381 1.47411 20.682 2.31802C21.5259 3.16193 22 4.30653 22 5.5V9.25M3.25 20.5H13.75C14.3467 20.5 14.919 20.2629 15.341 19.841C15.7629 19.419 16 18.8467 16 18.25V11.5C16 10.9033 15.7629 10.331 15.341 9.90901C14.919 9.48705 14.3467 9.25 13.75 9.25H3.25C2.65326 9.25 2.08097 9.48705 1.65901 9.90901C1.23705 10.331 1 10.9033 1 11.5V18.25C1 18.8467 1.23705 19.419 1.65901 19.841C2.08097 20.2629 2.65326 20.5 3.25 20.5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  <span className="text-[#000000] hover:text-white">Logout</span>
                </Link>
              </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
