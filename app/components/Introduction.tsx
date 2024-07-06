"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Introduction: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className="container mx-auto px-2 md:px-8">
      <div className="text-black mt-6">
        <h1 className="text-3xl font-normal mb-4">
          {language === "en" ? "Introduction" : "ভূমিকা"}
        </h1>
        <div className="space-y-4">
          <p className="">
            {language === "en"
              ? "The lottery process starts with players purchasing tickets from authorized retailers or online platforms. Each ticket has a unique set of numbers, either chosen by the player or randomly generated."
              : "খেলোয়াড়রা অনুমোদিত খুচরা বিক্রেতা বা অনলাইন প্ল্যাটফর্ম থেকে টিকিট কেনার মাধ্যমে লটারি প্রক্রিয়া শুরু হয়। প্রতিটি টিকিটের সংখ্যার একটি অনন্য সেট রয়েছে, হয় প্লেয়ার দ্বারা বাছাই করা বা এলোমেলোভাবে তৈরি করা।"}
          </p>
          <p className="">
            {language === "en"
              ? " On the designated draw date, a public drawing occurs where a series of winning numbers are randomly selected. This is usually done with machines that mix and draw numbered balls or through computerized random number generators, ensuring the process is fair and transparent."
              : "নির্ধারিত ড্র তারিখে, একটি সর্বজনীন অঙ্কন ঘটে যেখানে বিজয়ী সংখ্যার একটি সিরিজ এলোমেলোভাবে নির্বাচন করা হয়। এটি সাধারণত এমন মেশিনের মাধ্যমে করা হয় যা সংখ্যাযুক্ত বলগুলিকে মিশ্রিত করে এবং আঁকে বা কম্পিউটারাইজড এলোমেলো নম্বর জেনারেটরের মাধ্যমে, প্রক্রিয়াটি ন্যায্য এবং স্বচ্ছ তা নিশ্চিত করে।"}
          </p>
          <p className="">
            {language === "en"
              ? "After the drawing, players check their tickets against the winning numbers. This can be done at retail locations, online, or via official lottery apps. Matching tickets are identified as winners, with the prize amount depending on how many numbers match and the lottery’s specific rules."
              : "অঙ্কনের পরে, খেলোয়াড়রা বিজয়ী সংখ্যার বিপরীতে তাদের টিকিট পরীক্ষা করে। এটি খুচরা অবস্থানে, অনলাইনে বা অফিসিয়াল লটারি অ্যাপের মাধ্যমে করা যেতে পারে। ম্যাচিং টিকিটকে বিজয়ী হিসেবে চিহ্নিত করা হয়, পুরস্কারের পরিমাণ কত নম্বরের সাথে মিলছে এবং লটারির নির্দিষ্ট নিয়মের উপর নির্ভর করে।"}
          </p>
          <p className="">
            {language === "en"
              ? "Winners must then claim their prizes within a set timeframe, presenting their winning tickets for validation. Small prizes can often be claimed at retail locations, while larger prizes may require a visit to a lottery office or submission through official channels. Payouts are typically made as lump sums or annuities, and taxes may be deducted."
              : "বিজয়ীদের অবশ্যই একটি নির্দিষ্ট সময়সীমার মধ্যে তাদের পুরস্কার দাবি করতে হবে, বৈধতার জন্য তাদের বিজয়ী টিকিট উপস্থাপন করতে হবে। ছোট পুরষ্কারগুলি প্রায়শই খুচরা অবস্থানগুলিতে দাবি করা যেতে পারে, যখন বড় পুরস্কারগুলির জন্য লটারি অফিসে যাওয়া বা অফিসিয়াল চ্যানেলগুলির মাধ্যমে জমা দেওয়ার প্রয়োজন হতে পারে৷ পেআউটগুলি সাধারণত একক বার্ষিক হিসাবে তৈরি করা হয় এবং কর কাটা যেতে পারে।"}
          </p>
          <p className="">
          {language === "en"
              ? "Unclaimed prizes, if not collected within the specified period, are usually redirected to future lottery draws, special promotions, or community programs. Lotteries are closely regulated to maintain integrity, with proceeds often funding public services such as education, infrastructure, and charitable initiatives."
              : "দাবি না করা পুরস্কার, যদি নির্দিষ্ট সময়ের মধ্যে সংগ্রহ না করা হয়, তাহলে সাধারণত ভবিষ্যতে লটারি ড্র, বিশেষ প্রচার বা কমিউনিটি প্রোগ্রামে পুনঃনির্দেশিত হয়। লটারিগুলি অখণ্ডতা বজায় রাখার জন্য ঘনিষ্ঠভাবে নিয়ন্ত্রিত হয়, আয় প্রায়শই শিক্ষা, অবকাঠামো এবং দাতব্য উদ্যোগের মতো সরকারি পরিষেবাগুলিতে অর্থায়ন করে।"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
