import React from "react";
import Resultcard from "./ResultCard";
import Paginations from "./Pagination";

function ResultPart() {
  return (
    <div className="space-y-2 max-h-[500px] lg:h-[350px] xl:h-[450px] ">
      <Resultcard></Resultcard>
      <Resultcard></Resultcard>
      <Resultcard></Resultcard>
      <Resultcard></Resultcard>
      <Resultcard></Resultcard>
      <Paginations></Paginations>
      
    </div>
  );
}

export default ResultPart;
