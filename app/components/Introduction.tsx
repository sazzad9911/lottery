'use client'
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Introduction: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className="container mx-auto px-2 md:px-8">
      <div className=" text-black mt-6">
        <h1 className="text-3xl font-normal mb-4">
          {
            language ==='en'? 'Introduction':'ভূমিকা'
          }
        </h1>
        <div className="space-y-4">
      
          <p className="">
          {
            language ==='en'? 'The lottery process starts with players purchasing tickets from authorized retailers or online platforms. Each ticket has a unique set of numbers, either chosen by the player or randomly generated.':'খেলোয়াড়রা অনুমোদিত খুচরা বিক্রেতা বা অনলাইন প্ল্যাটফর্ম থেকে টিকিট কেনার মাধ্যমে লটারি প্রক্রিয়া শুরু হয়। প্রতিটি টিকিটের সংখ্যার একটি অনন্য সেট রয়েছে, হয় প্লেয়ার দ্বারা বাছাই করা বা এলোমেলোভাবে তৈরি করা।'
          }
          </p>
          <p className="">
            On the designated draw date, a public drawing occurs where a series
            of winning numbers are randomly selected. This is usually done with
            machines that mix and draw numbered balls or through computerized
            random number generators, ensuring the process is fair and
            transparent.
          </p>
          <p className="">
            After the drawing, players check their tickets against the winning
            numbers. This can be done at retail locations, online, or via
            official lottery apps. Matching tickets are identified as winners,
            with the prize amount depending on how many numbers match and the
            lottery’s specific rules.
          </p>
          <p className="">
            Winners must then claim their prizes within a set timeframe,
            presenting their winning tickets for validation. Small prizes can
            often be claimed at retail locations, while larger prizes may
            require a visit to a lottery office or submission through official
            channels. Payouts are typically made as lump sums or annuities, and
            taxes may be deducted.
          </p>
          <p className="">
            Unclaimed prizes, if not collected within the specified period, are
            usually redirected to future lottery draws, special promotions, or
            community programs. Lotteries are closely regulated to maintain
            integrity, with proceeds often funding public services such as
            education, infrastructure, and charitable initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
