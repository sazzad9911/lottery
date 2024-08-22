"use client";
import React, { useState } from "react";
import UserPagination from "@/app/components/UserPagination";

function Page() {
  const [page, setPage] = useState<number>(1);

  return (
    <div className="bg-white">
      <div className="bg-[#D9D9D9] mx-3 sm:mx-10 lg:mx-12 xl:mx-20 my-5 pt-10 pb-20 rounded-[10px]">
        <div className="pb-8 pl-2 pr-2 sm:mx-8 md:mx-4 lg:mx-12 mb-10 w-auto overflow-x-auto">
          <h1 className="text-black text-[20px] font-semibold mb-4">
            Ticket Sells
          </h1>
          <table className="table w-full mb-16">
            <thead>
              <tr className="text-left text-[14px] sm:text-[16px] text-[#000000]">
                <th>SL</th>
                <th>Account No</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="text-[14px] sm:text-[16px] text-[#000000]">
              <tr className="border-t-2 border-t-[#000000] text-left">
                <td className="">01</td>
                <td className="">123456</td>
                <td className="">123456</td>
                <td className="">20 April 2024</td>
              </tr>
              <tr className="text-left border-t-2 border-t-[#000000]">
                <td className="">02</td>
                <td className="">123456</td>
                <td className="">123456</td>
                <td className="">20 April 2024</td>
              </tr>
              <tr className="text-left border-t-2 border-t-[#000000]">
                <td className="">03</td>
                <td className="">123456</td>
                <td className="">123456</td>
                <td className="">20 April 2024</td>
              </tr>
              <tr className="text-left border-t-2 border-t-[#000000]">
                <td className="">04</td>
                <td className="">123456</td>
                <td className="">123456</td>
                <td className="">20 April 2024</td>
              </tr>
              <tr className="text-left border-t-2 border-t-[#000000]">
                <td className="">05</td>
                <td className="">123456</td>
                <td className="">123456</td>
                <td className="">20 April 2024</td>
              </tr>
            </tbody>
          </table>
          <UserPagination
            currentPage={page}
            totalPages={3}
            onPageChange={(e) => setPage(e)}
          />
        </div>       
      </div>
    </div>
  );
}

export default Page;
