import React from "react";
interface CardData{
    name:string,
    balance:string,
    bgColor:string
}
export default function Card({name,balance,bgColor}:CardData) {
  return (
    <div className={` h-[108px] font-bold text-black ${bgColor} rounded-lg flex flex-col justify-center items-center`}>
      <h1>{name}</h1>
      <span className="text-2xl md:text-lg lg:text-2xl">{balance} </span>
    </div>
  );
}