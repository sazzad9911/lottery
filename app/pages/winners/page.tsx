"use client";
import WinnerCard from '@/app/components/WinnerCard'
import WinnerCard2 from '@/app/components/WinnerCard2'
import WinnerCard3 from '@/app/components/WinnerCard3'
import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function Winners() {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className="container mx-auto px-2 md:px-8">
      <h1 className='text-[16px] md:text-[20px] font-bold text-center'>
      {language==="en"?"Winners":"বিজয়ীরা"} 
        </h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-6 md:py-10 py-4'>
        <WinnerCard3></WinnerCard3>
        <WinnerCard2></WinnerCard2>
        <WinnerCard></WinnerCard>
        <WinnerCard3></WinnerCard3>
        <WinnerCard2></WinnerCard2>
        <WinnerCard></WinnerCard>
        <WinnerCard3></WinnerCard3>
        <WinnerCard2></WinnerCard2>
        <WinnerCard></WinnerCard>
        <WinnerCard3></WinnerCard3>
        <WinnerCard2></WinnerCard2>    
        <WinnerCard></WinnerCard>
      </div>
    </div>
  )
}
