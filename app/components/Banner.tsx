"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import React, { useEffect, useState } from "react";
import people1 from "../../public/images/People1.png";
import people2 from "../../public/images/People2.png";
import people3 from "../../public/images/People3.png";
import bg from "../../public/images/bg.png";
import Link from "next/link";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Banner() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const language = useSelector((state: RootState) => state.language.language);
  const images = [people2, people1, people3];
  const [value, setValue] = React.useState("uddokta");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const route = useRouter();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const handleLoad = () => {
    setLoaded(true);
  };
  const handleChange = (value: string) => {
    setValue(value);
    route.push(`/pages/take-ticket?value=${value}`);
  };
  return (
    <div className="bg-gradient-to-r from-[#FF3742] to-[#B40309]">
      <div className="container mx-auto px-2 md:px-8">
        <div className="h-[800px] lg:h-[650px]  xl:h-[750px] relative max-w-[3000px] mx-auto flex lg:block justify-center">
          {images.map((imageUrl, index) => (
            <Image
              placeholder="blur"
              key={index}
              alt="background Image"
              src={imageUrl}
              className={`absolute  bottom-0 transition-opacity duration-1000 h-[300px] w-48 lg:h-[450px] xl:h-[650px] lg:w-56 xl:w-80 ${
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              } ${loaded ? "loaded" : ""}`}
              onLoad={handleLoad}
            />
          ))}
          <div className="absolute right-0 top-24 xl:top-28 max-w-[650px] xl:max-w-[800px]">
            <div className="flex flex-col items-center space-y-2 xl:space-y-4 text-white">
              <h1 className="font-semibold text-[20px] lg:text-[36px] font-serif">
                {language === "en" ? "DEAR LOTTERY" : "ডিয়ার লটারি"}
              </h1>
              <div>
                <p className="font-semibold text-[18px] md:text-[28px] text-center">
                  {language === "en" ? "৳ 6" : "৳ ৬"}
                </p>
                <p className="font-semibold text-[18px] md:text-[28px] text-center font-sans">
                  {language === "en" ? "Ticket" : "টিকিট"}
                </p>
              </div>
              <p className="font-normal text-[14px] md:text-[16px] text-justify">
                {language === "en"
                  ? "Dear Lottery is a compelling drama that revolves around the lives of individuals whose fates are intertwined by a massive lottery win. The story delves into the complexities of luck, greed, and human nature, exploring how sudden wealth can both transform and complicate relationships. As characters navigate their newfound fortunes, they face moral dilemmas, unexpected challenges, and the poignant realization that money cant buy happiness."
                  : "প্রিয় লটারি হল একটি আকর্ষক নাটক যা সেই ব্যক্তিদের জীবনের চারপাশে আবর্তিত হয় যাদের ভাগ্য একটি বিশাল লটারি জয়ের সাথে জড়িত। গল্পটি ভাগ্য, লোভ এবং মানব প্রকৃতির জটিলতাগুলিকে আবিষ্কার করে, কীভাবে আকস্মিক সম্পদ সম্পর্ককে রূপান্তরিত এবং জটিল করে তুলতে পারে। অক্ষরগুলি যখন তাদের নতুন ভাগ্যের দিকে নেভিগেট করে, তারা নৈতিক দ্বিধা, অপ্রত্যাশিত চ্যালেঞ্জ এবং মর্মান্তিক উপলব্ধির মুখোমুখি হয় যে অর্থ সুখ কিনতে পারে না"}
              </p>
              <p className="font-normal text-[14px] md:text-[16px] text-[#F7FF01] text-justify">
                {language === "en"
                  ? "Earn 5% commission on every ticket you resell! Join our program today and start making extra money by helping others find tickets to their favourite events!!!"
                  : "আপনি পুনরায় বিক্রি করা প্রতিটি টিকিটে 5% কমিশন উপার্জন করুন! আজই আমাদের প্রোগ্রামে যোগ দিন এবং অন্যদের তাদের প্রিয় ইভেন্টের টিকিট খুঁজে পেতে সাহায্য করে অতিরিক্ত অর্থ উপার্জন শুরু করুন!!!"}
              </p>
              <div className="flex gap-4 text-black">
                {/* <Link href="/pages/take-ticket">
                  <div className="flex justify-center w-40 items-center h-10 lg:h-14 px-4 bg-[#F9DC00] rounded-md cursor-pointer hover:shadow-md hover:scale-110 duration-300 text-[14px] md:text-[16px]">
                    {language === "en" ? "Take a Ticket" : "টিকিট নিন"}
                  </div>
                </Link> */}
                <div
                  onClick={onOpen}
                  className="flex justify-center w-40 items-center h-10 lg:h-14 px-4 bg-[#F9DC00] rounded-md cursor-pointer hover:shadow-md hover:scale-110 duration-300 text-[14px] md:text-[16px]"
                >
                  {language === "en" ? "Take a Ticket" : "টিকিট নিন"}
                </div>
                <Link href="/pages/login">
                  <div className="flex justify-center  items-center h-10 lg:h-14 w-40 bg-[#F9DC00] rounded-md cursor-pointer hover:shadow-md hover:scale-110 duration-300">
                    {language === "en" ? "Join as Reseller" : "বিক্রেতা হন"}
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full absolute bottom-4">
            <div className="flex md:gap-[20px] gap-[9px] justify-center">
              {images.map((imageUrl, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`md:h-[13px] h-[8px] md:w-[70px] w-[30px] cursor-pointer hover:scale-105 duration-200 rounded-[20px] ${
                    currentImageIndex === index
                      ? "bg-[#F9DC00]"
                      : "bg-[#D9D9D9]"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        {/* modal for selection  */}
        <Modal size="xs" isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent backgroundColor="#D94F72">
            <ModalHeader color="white">Select a slot</ModalHeader>
            <ModalCloseButton color="white" />
            <ModalBody>
              <RadioGroup
                className="mb-4"
                onChange={handleChange}
                value={value}
              >
                <Stack gap={6} direction="column">
                  <Radio  value="uddokta1">
                    <Text color="white"> uddokta1</Text>
                  </Radio>
                  <Radio value="uddokta2">
                    <Text color="white"> uddokta2</Text>
                  </Radio>
                  <Radio value="uddokta3">
                    <Text color="white"> uddokta3</Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
