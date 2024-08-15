"use client";
import React, { useEffect, useState } from "react";

function page() {
  return (
    <div className="bg-[#D9D9D9] mx-3 sm:mx-10 lg:mx-12 xl:mx-20 my-5 pt-10 pb-20 rounded-[10px]">
      <div className="pb-8 pl-2 pr-2 sm:mx-8 md:mx-4 lg:mx-12 mb-10 w-auto overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr className="text-[14px] sm:text-[16px] text-[#000000] ">
              <th>SL</th>
              <th>Account No</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>            
          </thead>
          <tbody className="text-[14px] sm:text-[16px] text-[#000000]">
            <tr className="text-center ">
              <td className="">01</td>
              <td className="">123456</td>
              <td className="">123456</td>
              <td className="">20 April 2024</td>
            </tr>
            <tr className="text-center">
              <td className="">01</td>
              <td className="">123456</td>
              <td className="">123456</td>
              <td className="">20 April 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default page;
