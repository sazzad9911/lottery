"use client";
import SideBar from '@/app/components/SideBar';
import UserHeader from '@/app/components/UserHeader';
import React from 'react'


function layout() {
  return (
    <div className='h-screen w-screen'>
      <UserHeader></UserHeader>
      <SideBar></SideBar>
    </div>
  )
}

export default layout
