import React from "react";
import Resultcard from "./ResultCard";

function ResultPart() {
  return (
    <div className="space-y-2 max-h-[500px] lg:h-[350px] xl:h-[450px] overflow-y-auto scrollbar-custom">
      <Resultcard></Resultcard>
      <Resultcard></Resultcard>
      <Resultcard></Resultcard>
      <Resultcard></Resultcard>
      <Resultcard></Resultcard>
      
    </div>
  );
}

export default ResultPart;
