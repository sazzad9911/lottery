"use client";
import React from "react";
interface CardData{
    name:string,
    balance:string,
    bgColor:string
}
export default function Card({name,balance,bgColor}:CardData) {
  return (
    <div className={` h-[108px] font-medium text-black ${bgColor} rounded-lg flex flex-col justify-center items-center`}>
      <h1>{name}</h1>
      <span className="text-2xl md:text-lg lg:text-2xl">{balance} </span>
    </div>
  );
}



// import React from 'react'

// function Card() {
//   return (
//     <div className='flex gap-5 pt-8 justify-center items-center'>
//         <div className="grid md:grid-cols-4 gap-6 grid-cols-2">
//         <div className="bg-[#D9D9D9] h-[108px] p-2 md:p-10 font-bold text-black  rounded-lg flex flex-col justify-center items-center">
//           <h1>Shares</h1>
//           <p className="text-2xl md:text-lg lg:text-2xl">5%</p>
//         </div>

//         <div className="bg-[#D9D9D9] h-[108px] p-2 md:p-10 font-bold text-black  rounded-lg flex flex-col justify-center items-center">
//           <h1>Withdraw</h1>
//           <p className="text-2xl md:text-lg lg:text-2xl">1100</p>
//         </div>

//         <div className="bg-[#D9D9D9] h-[108px] p-2 md:p-10 font-bold text-black  rounded-lg flex flex-col justify-center items-center">
//           <h1>Earnings</h1>
//           <p className="text-2xl md:text-lg lg:text-2xl">1100</p>
//         </div>

//         <div className="bg-[#D9D9D9] h-[108px] p-2 md:p-10 font-bold text-black  rounded-lg flex flex-col justify-center items-center">
//           <h1>Sell</h1>
//           <p className="text-2xl md:text-lg lg:text-2xl">12</p>
//         </div>
//         </div>
//         </div>
//   )
// }

// export default Card



