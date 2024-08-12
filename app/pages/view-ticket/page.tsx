"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import banner from "../../../public/images/ticket-banner.png";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Ticket from "@/app/components/Ticket";
import { MdPrint } from "react-icons/md";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";

function Page() {
  const language = useSelector((state: RootState) => state.language.language);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const printableAreaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const handleLoad = () => {
    setLoaded(true);
  };
  const handlePrint = () => {
    const printContent = document.getElementById("printable-area")?.innerHTML;

    if (printContent) {
      // Create a new window or frame
      const printWindow = window.open("", "", "height=600,width=800");

      if (printWindow) {
        // Write the content into the new window
        printWindow.document.write(
          "<html><head><title>Print</title></head><body>"
        );
        printWindow.document.write(printContent);
        printWindow.document.write("</body></html>");
        printWindow.document.close(); // Close the document to finish writing
        printWindow.focus(); // Focus on the new window

        // Trigger the print dialog
        printWindow.print();
      }
    }
  };
  const handleFullscreen = () => {
    const element = printableAreaRef.current;

    if (element) {
      if (document.fullscreenElement) {
        // Exit fullscreen if currently in fullscreen mode
        document.exitFullscreen();
      } else {
        // Request fullscreen for the element
        element.requestFullscreen().catch((err) => {
          console.error("Failed to enter fullscreen mode:", err);
        });
      }
    }
  };
  return (
    <div className=" -mt-6 md:-mt-10">
      <div className="mb-4 md:mb-8">
        <Image
          src={banner}
          alt="banner"
          className="relative max-h-[700px]"
        ></Image>
      </div>

      <div className="px-2 md:px-8">
        <div className="max-w-md mx-auto">
          <div className="mb-4 md:mb-6">
            <label className="block  font-semibold">
              {language === "en" ? "TICKET NUMBER" : "টিকেট নম্বর"}
            </label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 rounded-md bg-[#D9D9D9] outline-[#D94F72]"
              placeholder={
                language === "en"
                  ? "Write your ticket number"
                  : "আপনার টিকিট নম্বর লিখুন"
              }
            />
          </div>

          <button className="px-10  font-semibold bg-[#F9DC00] text-black py-2 rounded-md">
            {language === "en" ? "View" : "দেখুন"}
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center ">
        <div className="flex gap-4 w-full bg-blue-300 justify-center py-1 my-4">
          <MdPrint
            onClick={handlePrint}
            className="hover:text-red-700"
            size={30}
          />
          <BsArrowsFullscreen
            onClick={handleFullscreen}
            className="hover:text-red-700"
            size={30}
          />
          <IoMdDownload
            onClick={handlePrint}
            className="hover:text-red-700"
            size={30}
          />
        </div>
      </div>
      <div
        ref={printableAreaRef}
        className="h-[500px] overflow-y-scroll w-[calc(100%-60px)] mx-[30px] "
      >
        <div ref={contentRef} id="printable-area" className="bg-slate-200">
          {[2, 3, 4, 5].map((imageUrl, index) => (
            <Ticket
              key={index}
              amountBangla="১০"
              amountBanglaName="দশ টাকা"
              amountEnglish="10"
              amountEnglishName="TEN TAKA"
              drawDate="11 July 2022"
              name="eydkskakakakakakakakakakakak"
              ticketNumber="5854987"
              prizeAmount={"৫০"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
