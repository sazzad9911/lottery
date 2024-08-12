import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/no.json";

export default function NoData({ message }: { message?: string }) {
  return (
    <div className="w-full h-[70vh] flex flex-col justify-center items-center">
      <div className="w-[200px]">
        <Lottie animationData={groovyWalkAnimation} />
      </div>
      <div className="text-center font-bold">{message ? message : "No Event Found!"}</div>
    </div>
  );
}
