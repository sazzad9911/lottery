import React from "react";

function page() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 container mx-auto text-center pt-8 pb-5">
        <h1 className="text-2xl lg:text-4xl pb-5 text-[#000000] font-bold">
          Drop You Complain Here
        </h1>
        <p className="justify-center text-justify  text-[16px] pb-8 text-[#000000]">
          We value your feedback and are committed to providing the best service
          possible. If you have experienced any issues or have concerns, please
          let us know by dropping your complaint here. Our dedicated support
          team will review your complaint promptly and work towards a swift
          resolution.
        </p>
      </div>

      <div className="container mx-auto pb-20 gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="">
            <div className="pb-3">
              <label className="text-xl lg:text-2xl pb-3 text-[#000000]">Name</label>
            </div>
            <input
              type="text"
              placeholder="Write your name..."
              className="w-full p-3 bg-[#D9D9D9] rounded-md"
            />
          </div>
          <div className="pb-4">
            <div className="pb-3">
              <label className="text-xl lg:text-2xl pb-3 text-[#000000]">
                Contact Number
              </label>
            </div>
            <input
              type="text"
              placeholder="Contact Number 11 digit"
              className="w-full p-3 bg-[#D9D9D9] rounded-md"
            />
          </div>
        </div>

        <div>
          <div className="pb-3">
              <label className="text-xl lg:text-2xl pb-3 text-[#000000]">
                Select a point
              </label>
            </div>
          <select 
            className="w-full p-3 bg-[#D9D9D9] rounded-md mb-4">
            <option selected>
                Nothing Selected
            </option>
            <option>Game</option>
            <option>Lottery</option>          
          </select>
        </div>

        <div className="grid grid-cols-1 pb-3">
          <label className="text-xl lg:text-2xl pb-3 text-[#000000]">Message</label>
          <textarea
            placeholder="Describe your problems"
            className="w-full p-5 bg-[#D9D9D9] rounded-md"
          ></textarea>
        </div>

        <div className="text-center pt-4">
          <input
            type="submit"
            value="Submit Complain"
            className="btn bg-[#D94F72] text-[#FFFFFF] px-5 py-2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
