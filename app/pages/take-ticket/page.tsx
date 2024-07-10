import Image from 'next/image'
import React from 'react'
import banner from '../../../public/images/ticket-banner.png'
import TicketForm from '@/app/components/TicketForm'

export default function TakeTicket() {
  return (
    <div className=' -mt-20 md:-mt-24'>
      <div className='mb-4 md:mb-8'>
        <Image src={banner} alt='banner' className='relative max-h-[700px]'></Image>
      </div>
      <div className='px-2 md:px-8'>
      <TicketForm></TicketForm>
      </div>
    </div>
  )
}
