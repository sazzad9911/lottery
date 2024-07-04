"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import people1 from "../../public/images/People1.png";
import people2 from "../../public/images/People2.png";
import bg from "../../public/images/bg.png";

export default function Banner() {
  const images = [people1, people2, people1, people2, people1];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const handleLoad = () => {
    setLoaded(true);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-2 md:px-8">
        <div className="aspect-[2/1] lg:aspect-auto lg:h-[550px]  xl:h-[750px] relative max-w-[3000px] mx-auto">
          {images.map((imageUrl, index) => (
            <Image
              placeholder="blur"
              key={index}
              alt="background Image"
              src={imageUrl}
              className={`absolute bottom-0 transition-opacity duration-1000 h-[650px] w-72 ${
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              } ${loaded ? "loaded" : ""}`}
              onLoad={handleLoad}
            />
          ))}
          <div className="absolute right-0 bottom-28 max-w-[600px]">
            <div className="flex flex-col items-center space-y-4 text-white">
              <h1 className="font-semibold text-[36px]">DEAR LOTTERY</h1>
              <div>
              <p className="font-semibold text-[28px] text-center">৳6</p>
              <p className="font-semibold text-[28px] text-center">Ticket</p>
              </div>
              <p  className="font-normal text-[16px]">
                {"Dear Lottery"} is a compelling drama that revolves around the
                lives of individuals whose fates are intertwined by a massive
                lottery win. The story delves into the complexities of luck,
                greed, and human nature, exploring how sudden wealth can both
                transform and complicate relationships. As characters navigate
                their newfound fortunes, they face moral dilemmas, unexpected
                challenges, and the poignant realization that money cant buy
                happiness.
              </p>
              <p  className="font-normal text-[16px] text-[#F7FF01]">
                Earn 5% commission on every ticket you resell! Join our program
                today and start making extra money by helping others find
                tickets to their favourite events!!!
              </p>
              <div className="flex gap-2">
                <button>btn 1</button>
                <button>btn 2</button>
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
      </div>
    </div>
  );
}
