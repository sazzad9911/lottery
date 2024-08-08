"use client";
import React from 'react'
import ResultPart from '@/app/components/ResultPart'
import { Pagination } from '@mui/material'

export default function Result() {
  return (
    <div>
      <p className='text-center text-[32px] text-[#000000 mb-6'>Published Lottery Results</p>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-2 sm:px-5 ">
       <ResultPart></ResultPart>
       <div>
       {/* <Pagination></Pagination> */}
       </div>
        <div className="lg:col-span-2 bg-[#8F8F8F] h-[250px] md:h-[400px] xl:h-[500px] flex justify-center items-center rounded">
    </div>
    
    </div>
    </div>
  )
}
