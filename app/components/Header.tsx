"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import LanguageToggle from "./LanguageToggle";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Header() {
  const language = useSelector((state: RootState) => state.language.language);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const {
    isOpen: isOpenNav,
    onOpen: onOpenNav,
    onClose: onCloseNav,
  } = useDisclosure();

  const route = usePathname();

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);
  return (
    <div className={`${pathname.split("/")[1] === "dashboard" && "hidden"}`}>
      <div
        className={`w-full flex justify-center items-center z-10 ${pathname === '/' || pathname === '/pages/take-ticket' ? 'bg-[#98478664]':'bg-[#D94F72]'}  shadow-md h-[60px] md:h-[80px] overflow-hidden transition-transform duration-300 fixed ${
          showHeader ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center container px-2 md:px-8 w-full">
          <Link href="/">
            <div className="flex gap-1 items-center ">logo</div>
          </Link>
          <div className="lg:flex justify-end items-center gap-2 md:gap-4 lg:gap-10  hidden">
            <Link
              href="/"
              className={`text-[12px] font-normal md:font-medium md:text-[16px] ${
                route == "/"
                  ? "text-[#F9DC00]"
                  : "text-[#FFFFFF] hover:text-[#F9DC00] transition-colors duration-300"
              }`}
            >
              {language === "en" ? "HOME" : "হোম"}
            </Link>
            <Link
              href="/pages/live-draw"
              className={`text-[12px] font-normal md:font-medium md:text-[16px] ${
                route == "/pages/live-draw"
                  ? "text-[#F9DC00]"
                  : "text-[#FFFFFF] hover:text-[#F9DC00] transition-colors duration-300"
              }`}
            >
              {language === "en" ? "LIVE DRAW" : "লাইভ ড্র"}
            </Link>

            <Link
              href="/pages/result"
              className={`text-[12px] font-normal md:font-medium md:text-[16px] ${
                route == "/pages/result"
                  ? "text-[#F9DC00]"
                  : "text-[#FFFFFF] hover:text-[#F9DC00] transition-colors duration-300"
              }`}
            >
              {language === "en" ? "RESULT" : "রেজাল্ট"}
            </Link>
            <Link
              href="/pages/winners"
              className={`text-[12px] font-normal md:font-medium md:text-[16px] ${
                route == "/pages/winners"
                  ? "text-[#F9DC00]"
                  : "text-[#FFFFFF] hover:text-[#F9DC00] transition-colors duration-300"
              }`}
            >
              {language === "en" ? "WINNERS" : "বিজয়ী"}
            </Link>
            <Link
              href="/pages/complain"
              className={`text-[12px] font-normal md:font-medium md:text-[16px] ${
                route == "/pages/complain"
                  ? "text-[#F9DC00]"
                  : "text-[#FFFFFF] hover:text-[#F9DC00] transition-colors duration-300"
              }`}
            >
              {language === "en" ? "COMPLAIN BOX" : "অভিযোগ বাক্স"}
            </Link>
            <Link
              href="/pages/contact"
              className={`text-[12px] font-normal md:font-medium md:text-[16px] ${
                route == "/pages/contact"
                  ? "text-[#F9DC00]"
                  : "text-[#FFFFFF] hover:text-[#F9DC00] transition-colors duration-300"
              }`}
            >
              {language === "en" ? "  CONACT US" : "যোগাযোগ করুন"}
            </Link>
            <div className="hidden md:block">
              <LanguageToggle></LanguageToggle>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle></LanguageToggle>
            <div className=" cursor-pointer" onClick={onOpenNav}>
              <AiOutlineAlignRight className="h-8 w-8 text-customRed hover:scale-105 duration-300" />
            </div>
          </div>
        </div>
      </div>
      {/* mobile nav side bar  */}
      <Drawer onClose={onCloseNav} isOpen={isOpenNav}>
        <DrawerOverlay />
        <DrawerContent>
          <div className="bg-[#D94F72] h-full">
            <DrawerHeader
              className="flex items-center justify-between"
              borderBottomWidth="1px"
            >
              <p className="text-[#FFFFFF]">
              {language === "en" ? "BD Lottery" : "বিডি লটারি"}               
                </p>
              <AiOutlineClose
                onClick={onCloseNav}
                className="h-7 w-7 text-[#FFFFFF] hover:scale-105 duration-300 cursor-pointer"
              />
            </DrawerHeader>
            <DrawerBody>
              <div className="flex flex-col gap-4 mt-2">
                <Link
                  onClick={onCloseNav}
                  href="/"
                  className={`text-[14px] font-medium pb-1 ${
                    route == "/"
                      ? "text-[#F9DC00]"
                      : "text-[#FFFFFF] hover:text-[#F9DC00] transition-colors duration-300"
                  }`}
                >
                  {language === "en" ? "HOME" : "হোম"}
                </Link>
                <Link
                  onClick={onCloseNav}
                  href="/pages/live-draw"
                  className={`text-[14px] font-medium pb-1 ${
                    route == "/pages/live-draw"
                      ? "text-[#F9DC00]"
                      : "text-[#FFFFFF] hover:text-[#F9DC00] transition-colors duration-300"
                  }`}
                >
                  {language === "en" ? "LIVE DRAW" : "লাইভ ড্র"}
                </Link>

                <Link
                  onClick={onCloseNav}
                  href="/pages/result"
                  className={`text-[14px] font-medium pb-1 ${
                    route == "/pages/result"
                      ? "text-[#F9DC00]"
                      : "text-[#FFFFFF] hover:text-[#F9DC00] transition-colors duration-300"
                  }`}
                >
                  {language === "en" ? "RESULT" : "রেজাল্ট"}
                </Link>

                <Link
                  onClick={onCloseNav}
                  href="/pages/winners"
                  className={`text-[14px] font-medium pb-1 ${
                    route == "/pages/winners"
                      ? "text-[#F9DC00]"
                      : "text-[#FFFFFF] hover:text-[#F9DC00] transition-colors duration-300"
                  }`}
                >
                  {language === "en" ? "WINNERS" : "বিজয়ী"}
                </Link>
                <Link
                  onClick={onCloseNav}
                  href="/pages/complain"
                  className={`text-[14px] font-medium pb-1 ${
                    route == "/pages/complain"
                      ? "text-[#F9DC00]"
                      : "text-[#FFFFFF] hover:text-[#F9DC00] transition-colors duration-300"
                  }`}
                >
                  {language === "en" ? "COMPLAIN BOX" : "অভিযোগ বাক্স"} 
                </Link>
                <Link
                  onClick={onCloseNav}
                  href="/pages/contact"
                  className={`text-[14px] font-medium pb-1 ${
                    route == "/pages/contact"
                      ? "text-[#F9DC00]"
                      : "text-[#FFFFFF] hover:text-[#F9DC00] transition-colors duration-300"
                  }`}
                >
                  {language === "en" ? "  CONACT US" : "যোগাযোগ করুন"}
                </Link>
              </div>
            </DrawerBody>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
