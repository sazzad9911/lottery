"use client";
import { getApi, postApi, putApi } from "@/functions/API";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Pay({ params }: { params: { user: string } }) {
  const searchParams = useSearchParams();
  const amount = parseInt(searchParams.get("amount") as string) || 0;
  const redirectUrl = (searchParams.get("redirect") as string) || "/";
  const cancelUrl = (searchParams.get("cancelUrl") as string) || "/";
  const ref = (searchParams.get("ref") as string) || null;
  const quantity = (searchParams.get("quantity") as string) || null;
  const eventId = (searchParams.get("eventId") as string) || null;
  const status = (searchParams.get("status") as string) || null;
  const [myStatus, setMyStatus] = useState<string | undefined>("");
  const { user } = params;
  const [loader, setLoader] = useState(true);
  const [tickets, setTickets] = useState<string | undefined>();

  const onTimerEnd = () => {
    if (myStatus === "success") {
      return (window.location.href = `${redirectUrl}?tickets=${tickets}`);
    }
    window.location.href = cancelUrl;
  };
  const acceptTicket = async () => {  
    try {
      const strData = localStorage.getItem(user);
      if (!strData) return toast.error("Data not found!", { autoClose: 3000 });
      const data = JSON.parse(strData);
      const ticket = await postApi("/api/event", data);
      let strTick = "";
      ticket.data.map((tick: any, i: number) => {
        strTick =strTick+`${i === 0 ? `${tick.ticket_number}` : `&${tick.ticket_number}`}`
      });
      setTickets(strTick);
      setMyStatus("success");
      setLoader(false);
    } catch (error: any) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error, { autoClose: 3000 });
    }
  };

  const bkashPay = () => {
    setLoader(true);
    postApi("/api/bkash", {
      eventId: eventId,
      phone: user,
      amount: amount,
      quantity: quantity,
      ref: ref || "",
    })
      .then((res) => {
        localStorage.setItem(
          user,
          JSON.stringify({
            eventId: eventId,
            phone: user,
            amount: amount,
            quantity: quantity,
            ref: ref || "",
          })
        );
        window.location.href = res.data.url;
        //setLoader(false);
      })
      .catch((err) => {
        console.log(err.response.data.error);
        toast.error(err.response.data.error, { autoClose: 3000 });
        setLoader(false);
      });
  };
  const bkash = {
    image: "https://i.ibb.co/S6sXLdy/bkashP.png",
    name: "BKash",
    click: bkashPay,
  };
  useEffect(() => {
    if (status) {
      if (status === "success") {
        acceptTicket();
      } else {
        setMyStatus(status);
        setLoader(false);
      }
    } else {
      setLoader(false);
    }
  }, [status]);

  if (loader) {
    return (
      <div className="h-screen w-screen text-white  bg-[#2E4053] flex justify-center items-center absolute top-0 left-0 z-10">
        <h1 className="text-3xl">Loading....</h1>
      </div>
    );
  }
  return (
    <div className="h-screen w-screen text-white flex justify-center items-center top-0 left-0  px-5 py-3 absolute z-50 bg-white">
      <div className="max-w-[500px] min-h-[calc(100vh-100px)] overflow-y-scroll bg-[#2E4053] px-4 py-2 rounded-md">
        <p className="text-center text-3xl py-5">Online-Pay</p>
        <p className="text-center">
          Online pay is a online payment system for transaction money via mobile
          wallet
        </p>
        {myStatus ? (
          <>
            {myStatus === "success" ? (
              <div className="grid items-center w-full justify-center my-4">
                <img className="w-[150px] mb-2" src="/pay/success.png" />
                Purchase Ticket Complete, Ticket Numbers [{tickets}]
              </div>
            ) : (
              <div className="grid items-center w-full justify-center my-4">
                <img className="w-[150px] mb-2" src="/pay/failed.png" />
                Purchase Ticket Failed!
              </div>
            )}
          </>
        ) : (
          <>
            <p className="text-center my-1">
              Select your suitable payment wallet
            </p>
            <div className="flex flex-wrap gap-4 my-5 justify-center">
              <div
                onClick={() => bkash.click()}
                className="cursor-pointer hover:opacity-30"
              >
                <img
                  className="w-[100px] h-[100px]  rounded"
                  alt="image"
                  src={bkash.image}
                />
                <p className=" text-center my-1 font-bold">{bkash.name}</p>
              </div>
            </div>
          </>
        )}

        <button
          className="bg-red-500 rounded-md py-2 px-2 w-full my-6"
          onClick={onTimerEnd}
        >
          {myStatus ? "Go Back" : "Cancel"}
        </button>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
