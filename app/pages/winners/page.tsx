import WinnerCard from '@/app/components/WinnerCard'
import React from 'react'

export default function Winners() {
  return (
    <div className="container mx-auto px-2 md:px-8">
      <h1 className='text-[16px] md:text-[20px] font-bold text-center'>Winners</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-6 md:py-10 py-4'>
        <WinnerCard></WinnerCard>
        <WinnerCard></WinnerCard>
        <WinnerCard></WinnerCard>
        <WinnerCard></WinnerCard>
        <WinnerCard></WinnerCard>
        <WinnerCard></WinnerCard>
        <WinnerCard></WinnerCard>
        <WinnerCard></WinnerCard>
        <WinnerCard></WinnerCard>
        <WinnerCard></WinnerCard>
        <WinnerCard></WinnerCard>
    
        <WinnerCard></WinnerCard>
      </div>
    </div>
  )
}
