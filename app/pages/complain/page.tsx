"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

function ComplainBox() {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className="grid justify-items-center">
    <div className="w-full max-w-5xl px-2 md:px-8">
      <div className="grid grid-cols-1 text-center pt-8 pb-5">
        <h1 className="text-2xl lg:text-4xl pb-5 text-[#000000] font-bold">
          {language === "en"
            ? "Drop You Complain Here"
            : "এখানে অভিযোগ ড্রপ করুন"}
        </h1>
        <p className="justify-center text-justify  text-[16px] pb-8 text-[#000000]">
          {language === "en"
            ? "We value your feedback and are committed to providing the best service possible. If you have experienced any issues or have concerns, please let us know by dropping your complaint here. Our dedicated support team will review your complaint promptly and work towards a swift resolution."
            : "আমরা আপনার মতামতকে মূল্য দিই এবং সম্ভাব্য সর্বোত্তম পরিষেবা প্রদানের জন্য প্রতিশ্রুতিবদ্ধ। আপনি যদি কোনো সমস্যা অনুভব করেন বা উদ্বেগ থেকে থাকেন, তাহলে অনুগ্রহ করে এখানে আপনার অভিযোগ ড্রপ করে আমাদের জানান। আমাদের ডেডিকেটেড সাপোর্ট টিম আপনার অভিযোগটি দ্রুত পর্যালোচনা করবে এবং দ্রুত সমাধানের জন্য কাজ করবে।"}
        </p>
      </div>

      <form className="pb-4 lg:pb-20 gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="">
            <div className="pb-3">
              <label className="text-xl lg:text-2xl pb-3 text-[#000000]">
                {language === "en" ? "Name" : "নাম"}
              </label>
            </div>
            <input
              type="text"
              maxLength={30}
              placeholder={
                language === "en" ? "Write your name" : "তোমার নাম লিখ"
              }
              className="w-full outline-[#D94F72] p-3 bg-[#D9D9D9] rounded-md"
            />
          </div>
          <div className="pb-4">
            <div className="pb-3">
              <label className="text-xl lg:text-2xl pb-3 text-[#000000]">
                {language === "en" ? "Contact Number" : "যোগাযোগের নম্বর"}
              </label>
            </div>
            <input
              type="text"
              maxLength={11}
              placeholder={
                language === "en"
                  ? "Contact Number 11 digit"
                  : "যোগাযোগ নম্বর ১১ সংখ্যা"
              }
              className="w-full outline-[#D94F72] p-3 bg-[#D9D9D9] rounded-md"
            />
          </div>
        </div>

        <div>
          <div className="pb-3">
            <label className="text-xl lg:text-2xl pb-3 text-[#000000]">
              {language === "en" ? "Select a point" : "নির্বাচন করুন"}
            </label>
          </div>
          <select className="w-full outline-[#D94F72] p-3 bg-[#D9D9D9] rounded-md mb-4">
            <option disabled selected>
              {language === "en" ? "Nothing Selected" : "নির্বাচিত নয়"}
            </option>
            <option>Result</option>
            <option>Time</option>
            <option>Lottery</option>
          </select>
        </div>

        <div className="grid grid-cols-1 pb-3">
          <label className="text-xl lg:text-2xl pb-3 text-[#000000]">
            {language === "en" ? "Message" : "বার্তা"}
          </label>
          <textarea
            maxLength={150}
            placeholder={
              language === "en"
                ? "Describe your problems"
                : "সমস্যাগুলি বর্ণনা করুন"
            }
            className="w-full outline-[#D94F72] p-5 bg-[#D9D9D9] rounded-md"
          ></textarea>
        </div>

        <div className="text-center pt-4">
          <input
            type="submit"
            value={language === "en" ? "Submit Complain" : "অভিযোগ জমা দিন"}
            className="btn bg-[#D94F72] text-[#FFFFFF] px-5 py-2 rounded-md"
          />
        </div>
      </form>
    </div>
   </div>
  );
}

export default ComplainBox;
