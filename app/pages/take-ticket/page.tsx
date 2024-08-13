"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import banner from "../../../public/images/ticket-banner.png";
import TicketForm from "@/app/components/TicketForm";
import { getApi } from "@/functions/API";
import { useSearchParams } from "next/navigation";
import Loader from "@/app/components/Loader";
interface Root {
  id: string;
  title: string;
  description: string;
  image: string;
  ticketOpenFrom: string;
  ticketCloseTo: string;
  drawDate: string;
  date: string;
  ticketPrice: number;
  live_link: string;
}

export default function TakeTicket() {
  const params = useSearchParams();
  const [data, setData] = useState<Root>();
  useEffect(() => {
    getApi("/api/current-event", {
      id: params.get("value"),
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!data) return <Loader />;
  return (
    <div className=" -mt-20 md:-mt-24">
      <div className="mb-4 md:mb-8">
        <img
          src={data.image}
          alt="banner"
          className="relative max-h-[700px] w-full"
        ></img>
      </div>
      <div className="px-2 md:px-8">
        <TicketForm data={data}></TicketForm>
      </div>
    </div>
  );
}
