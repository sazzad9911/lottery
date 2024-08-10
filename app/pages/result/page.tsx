"use client";
import React from "react";
import { NextPage } from "next";
import ResultPart from "@/app/components/ResultPart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paginations from "@/app/components/Pagination";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const theme = createTheme();

const PaginationPage: NextPage = () => {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div>
      <p className="text-center text-[20px] sm:text-[26px] lg:text-[32px] text-[#000000 mb-6">
      {language === "en" ? "Published Lottery Results" : "প্রকাশিত লটারি ফলাফল"}
        
      </p>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-2 sm:px-5 ">
          <ResultPart></ResultPart>
          
          <div className="lg:col-span-2 bg-[#8F8F8F] h-[250px] md:h-[400px] lg:h-[500px] flex justify-center items-center rounded "></div>
          {/* <Paginations></Paginations> */}
        </div>
      </div>
    </div>
  );
};

export default PaginationPage;
