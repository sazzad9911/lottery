"use client";
import React, { useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  
  return (
    <div className="flex pt-3 lg:pt-5 gap-1 lg:gap-2 justify-start lg:mr-6"> 
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}  
        
      >
        <svg
          className=" text-[#000000] text-[16px] mr-0 sm:mr-0 w-7 h-7 sm:w-8 sm:h-7 lg:w-10 lg:h-11"
          viewBox="0 0 45 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="45" height="42" rx="5" fill="#D9D9D9" />
          <path
            d="M26.75 28.5L19.25 21L26.75 13.5"
            stroke="black"
            stroke-width="2" 
            stroke-linecap="round"  
            stroke-linejoin="round"
          />
        </svg>
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <div  
     
          className={`${currentPage === page ? 
            "bg-[#D94F72] text-[#000000] text-[14px] sm:text-[16px] rounded flex justify-center items-center w-6 h-6 sm:w-8 sm:h-7 lg:w-10 lg:h-9 mt-0.5 lg:mt-1" : 
            "w-6 h-6 sm:w-8 sm:h-7 lg:w-10 lg:h-9 mt-0.5 lg:mt-1 text-[14px] sm:text-[16px] text-[#000000] rounded border border-red-600 flex justify-center items-center" } cursor-pointer`}
          key={page} 
          onClick={() => onPageChange(page)}
               
        >
          {page}
        </div>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}        
      >
        <svg
          className="text-[#000000] text-[16px] ml-0 sm:ml-0 w-7 h-7 sm:w-8 sm:h-7 lg:w-10 lg:h-11"
          viewBox="0 0 45 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="45" height="42" rx="5" fill="#D9D9D9" />
          <path
            d="M19.2261 13.5116L26.7497 20.9878L19.2735 28.5115"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
