"use client";
// import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export default function SideBar() {
  const pathname = usePathname();
//   const { userData } = useAuth();

  return (
    <div className="w-14 sm:w-[250px] h-full bg-[#C8C8C8] hidden md:block">
      <div className=" text-[#000000] font-normal flex flex-col justify-between">
        <div className="py-4 px-2 sm:px-6 ">
          <ul className=" space-y-4">
            <li
              className={` flex items-center px-5 py-1 rounded-md hover:text-white ${
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
                <span className="">Dashboard</span>
              </Link>
            </li>
            
              <li
                className={` flex items-center px-5 py-1 rounded-md hover:text-white ${
                  pathname === "/user/member" && "text-[#349407]"
                }`}
              >
                <Link href="/user/member" className=" flex gap-2 ">
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
                  <span className="">Sells</span>
                </Link>
              </li>
            

           <li
              className={` flex items-center px-5 py-1 rounded-md hover:text-white ${
                (pathname === "/user/plan" && "text-[#349407]") ||
                (pathname === "/user/invest" && "text-[#349407]")
              }`}
             >
              <Link href="/user/plan" className=" flex gap-2 ">
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
                <span>Result</span>
              </Link>
            </li>

            {/* {userData?.isAdmin && userData.isAgent && ( */}
              <li
                className={` flex items-center px-5 py-1 rounded-md hover:text-white ${
                   pathname === "/user/withdraw-request" && "text-[#349407]"
                }`}
              >
                <Link href="/user/withdraw-request" className=" flex gap-2 ">
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
                  <span className="">Withdraws</span>
                </Link>
              </li>
            {/* )} */}          
          </ul>
        </div>
      </div>
    </div>
  );
}
