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
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
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
        className={`w-full flex justify-center items-center z-10 bg-[#ffffffcc] shadow-md h-[60px] md:h-[80px] overflow-hidden transition-transform duration-300 fixed ${
          showHeader ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center max-w-[1400px] px-2 md:px-8 w-full">
          <Link href="/">
            <div className="flex gap-1 items-center ">
              logo
            </div>
          </Link>
          <div className="lg:flex justify-end items-center gap-2 md:gap-4 hidden">
            <Link
              href="/"
              className={`text-[12px] font-normal md:font-medium md:text-[16px] ${
                route == "/"
                  ? "text-customYellow"
                  : "text-primaryBlack hover:text-customYellow transition-colors duration-300"
              }`}
            >
              Home
            </Link>
            <Link
              href="/src/pages/plans"
              className={`text-[12px] font-normal md:font-medium md:text-[16px] ${
                route == "/src/pages/plans"
                  ? "text-customYellow"
                  : "text-primaryBlack hover:text-customYellow transition-colors duration-300"
              }`}
            >
              Plans
            </Link>
            {/* <Link
              href="/src/pages/products"
              className={`text-[12px] font-normal md:font-medium md:text-[16px] ${
                route == "/src/pages/products"
                  ? "text-customYellow"
                  : "text-primaryBlack hover:text-customYellow transition-colors duration-300"
              }`}
            >
              Products
            </Link> */}
            <Link
              href="/src/pages/about"
              className={`text-[12px] font-normal md:font-medium md:text-[16px] ${
                route == "/src/pages/about"
                  ? "text-customYellow"
                  : "text-primaryBlack hover:text-customYellow transition-colors duration-300"
              }`}
            >
              About
            </Link>

            <Link
              href="/src/pages/support"
              className={`text-[12px] font-normal md:font-medium md:text-[16px] ${
                route == "/src/pages/support"
                  ? "text-customYellow"
                  : "text-primaryBlack hover:text-customYellow transition-colors duration-300"
              }`}
            >
              Support
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
          <DrawerHeader
            className="flex items-center justify-between"
            borderBottomWidth="1px"
          >
            <p>Money Chain</p>
            <AiOutlineClose
              onClick={onCloseNav}
              className="h-6 w-6 text-customRed hover:scale-105 duration-300 cursor-pointer"
            />
          </DrawerHeader>
          <DrawerBody>
            <div className="flex flex-col gap-4">
              <Link
                onClick={onCloseNav}
                href="/"
                className={`text-[14px] border-b border-b-customRed font-medium pb-1 ${
                  route == "/"
                    ? "text-customYellow"
                    : "text-primaryBlack hover:text-customYellow transition-colors duration-300"
                }`}
              >
                Home
              </Link>
              <Link
                onClick={onCloseNav}
                href="/src/pages/plans"
                className={`text-[14px] border-b border-b-customRed font-medium pb-1 ${
                  route == "/src/pages/plans"
                    ? "text-customYellow"
                    : "text-primaryBlack hover:text-customYellow transition-colors duration-300"
                }`}
              >
                Plans
              </Link>
              {/* <Link
                onClick={onCloseNav}
                href="/src/pages/products"
                className={`text-[14px] border-b border-b-customRed font-medium pb-1 ${
                  route == "/src/pages/products"
                    ? "text-customYellow"
                    : "text-primaryBlack hover:text-customYellow transition-colors duration-300"
                }`}
              >
                Products
              </Link> */}

              <Link
                onClick={onCloseNav}
                href="/src/pages/about"
                className={`text-[14px] border-b border-b-customRed font-medium pb-1 ${
                  route == "/src/pages/about"
                    ? "text-customYellow"
                    : "text-primaryBlack hover:text-customYellow transition-colors duration-300"
                }`}
              >
                About
              </Link>

              <Link
                onClick={onCloseNav}
                href="/src/pages/support"
                className={`text-[14px] border-b border-b-customRed font-medium pb-1 ${
                  route == "/src/pages/support"
                    ? "text-customYellow"
                    : "text-primaryBlack hover:text-customYellow transition-colors duration-300"
                }`}
              >
                Support
              </Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
