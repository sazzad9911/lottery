"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";


export default function Page() {
 
  return (
    <div className="bg-white">
    <div className="mx-5 sm:mx-8 lg:mx-14 pt-10">
    <div className="grid md:grid-cols-4 gap-6 grid-cols-2">
    <Card
      name="Shares"
      balance="5%"
      bgColor="bg-[#D9D9D9]"
    />
    <Card
      name="Withdraw"
      balance="1100"
      bgColor="bg-[#D9D9D9]"
    />
    <Card
      name="Earnings"
      balance="2000"
      bgColor="bg-[#D9D9D9]"
    />
    <Card
      name="Sell"
      balance="12"
      bgColor="bg-[#D9D9D9]"
    />
  </div>
  </div>
  
    <p className="text-[#000000] text-[20px] mt-5 ml-5 lg:ml-14">Sell Statistics</p>
    <div className="mx-8 lg:mx-14">
    <img src="../images/chart-imge.png" 
     alt="img"
     className="w-full h-auto"
    />
  </div>
  <p className="text-[#000000] text-[20px] pl-5 lg:pl-14 mb-3">Recent Sell</p>
<div className="mx-5 sm:mx-8 lg:mx-14 mb-10">
  <table className="border-collapse border w-full">
  <thead className="text-left">
    <tr>
      <th className="border border-slate-600 bg-[#CBD5E1] p-2 ">Ticket Number</th>
      <th className="border border-slate-600 bg-[#CBD5E1] p-2">Phone Number</th>
      <th className="border border-slate-600 bg-[#CBD5E1] p-2">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-600 bg-[#FFEAEA] p-2">123456</td>
      <td className="border border-slate-600 bg-[#FFEAEA] p-2">12345678910</td>
      <td className="border border-slate-600 bg-[#FFEAEA] p-2">12 jun 2024</td>
    </tr>
    <tr>
      <td className="border border-slate-600 bg-[#FFEAEA] p-2">123456</td>
      <td className="border border-slate-600 bg-[#FFEAEA] p-2">12345678910</td>
      <td className="border border-slate-600 bg-[#FFEAEA] p-2">12 jun 2024</td>
    </tr>
    <tr>
      <td className="border border-slate-600 bg-[#FFEAEA] p-2">123456</td>
      <td className="border border-slate-600 bg-[#FFEAEA] p-2">12345678910</td>
      <td className="border border-slate-600 bg-[#FFEAEA] p-2">12 jun 2024</td>
    </tr>
  </tbody>
</table>
</div>

  </div>

  );
}

