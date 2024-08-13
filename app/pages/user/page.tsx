"use client";
import React, { useEffect, useState } from "react";
import Card from "./dashboard/Card";
// import { getApi } from "@/functions/API";
import { toast } from "react-toastify";



interface DashboardTypes {
  balance: number;
  totalWithdraw: number;
  myLevel: number;
  myMember: number;
  list: List[];
}

interface List {
  id: string;
  name: string;
  fatherName: string;
  motherName: string;
  address: string;
  postCode: string;
  reference: string;
  refId: string;
  date: string;
  tranxId: string;
  amount: number;
  status: string;
  walletId: string;
  userId: string;
  acceptedBy: any;
  user: User;
  level: number;
}

interface User {
  id: string;
  serialNumber: number;
  gender: any;
  age: any;
  phone: string;
  password: string;
  pushToken: any;
  balance: number;
  coins: number;
  name: string;
  isAdmin: boolean;
  division: any;
  district: any;
  subDistrict: any;
  isAgent: boolean;
}

export default function Page() {

  return (
    <div className="container mx-auto p-2 md:p-10">
      <div className="grid md:grid-cols-4 gap-6 grid-cols-2">
        <Card
          name="Total Withdraw"
           balance="00"
          bgColor="bg-[#ECADAD]"
        />
        <Card
          name="My Level"
          balance="00"
          bgColor="bg-[#B1B5FF]"
        />
        <Card
          name="My Member"
           balance="00"
          bgColor="bg-[#BEE9FF]"
        />
      </div>
      
      <div className="text-white mb-5">Members Position</div>
      <div className="py-2 bg-[#D9D9D9] text-black grid grid-cols-3 my-2">
        <p className="pl-7">Level</p>
        <p>Investor Name</p>
        <p className=" text-end pr-5">Join Date</p>
      </div>
      
      
    </div>
  );
}
interface RowProps {
  level: string;
  investor: string;
  price: string;
}

const Row: React.FC<RowProps> = ({ level, investor, price }) => {
  const [colors, setColors] = useState([
    "#292A2A",
    "#1F618D",
    "#76448A",
    "##196F3D",
    "#0E6655",
    "#943126",
    "#9C640C",
    "#117864"
  ]);
  return (
    <div
      style={{
        backgroundColor: colors[Math.floor(Math.random() * 6)],
      }}
      className={`p-1 grid grid-cols-3 mb-2 text-white`}
    >
      <p className="ps-6">{level}</p>
      <p>{investor}</p>
      <p className="text-end pr-6">{price}</p>
    </div>
  );
};
