"use client";
import React from 'react'
import UserHeader from '@/app/components/UserHeader';
import SideBar from '@/app/components/SideBar';
import Card from '@/app/components/Card';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <UserHeader></UserHeader>
      <div className='fixed h-screen w-screen'>
      <SideBar></SideBar>
      </div>
      <div className='md:ml-[250px]'>
        {children}
      </div>
    </div>
  );
}
