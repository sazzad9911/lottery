import React, { useState } from "react";
import Resultcard from "./ResultCard";
import Pagination from "@/app/components/Pagination";

function ResultPart() {
  const [page, setPage] = useState<number>(1);
  return (
    <div className="space-y-2 max-h-[500px] lg:h-[350px] xl:h-[450px] ">
      <Resultcard></Resultcard>
      <Resultcard></Resultcard>
      <Resultcard></Resultcard>
      <Resultcard></Resultcard>
      
      
      <Pagination
          currentPage={page}
          onPageChange={(d) => setPage(d)}
          totalPages={5}
          />
      
    </div>
  );
}

export default ResultPart;
