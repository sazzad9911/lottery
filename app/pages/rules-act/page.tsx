"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const LotteryRules = () => {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className="container mx-auto px-2 md:px-8">
      <h1 className="text-3xl font-semibold mb-6">
        {language === "en" ? "Lottery Rules & Act" : "লটারির নিয়ম ও আইন"}
      </h1>
      <p className="mb-4">
        {language === "en"
          ? " Welcome to our comprehensive guide on Lottery Rules & Act. Whether you are a new player or a seasoned enthusiast, understanding the rules and regulations that govern lotteries is crucial to ensure a fair and enjoyable experience. Below, we outline the key aspects of lottery rules and the legislative framework that oversees lottery activities."
          : "লটারি নিয়ম ও আইনের উপর আমাদের ব্যাপক গাইডে স্বাগতম। আপনি একজন নতুন খেলোয়াড় বা একজন অভিজ্ঞ উত্সাহী হোন না কেন, লটারি পরিচালনা করে এমন নিয়ম ও বিধিগুলি বোঝা একটি ন্যায্য এবং আনন্দদায়ক অভিজ্ঞতা নিশ্চিত করার জন্য অত্যন্ত গুরুত্বপূর্ণ ৷ নীচে, আমরা লটারি বিধি এবং লটারি কার্যক্রম তত্ত্বাবধান করে এমন আইনী কাঠামোর মূল দিকগুলির রূপরেখা দিই ৷"}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-medium mb-4">
          {language === "en"
            ? "Understanding Lottery Rules"
            : "লটারির নিয়ম বোঝা"}
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">
            {language === "en" ? "Eligibility:" : "যোগ্যতা:"}
          </h3>
          <ul className="list-disc pl-5">
            <li>
              {language === "en"
                ? " Participants must be of legal age, usually 18 or older, to purchase lottery tickets."
                : "লটারির টিকিট কেনার জন্য অংশগ্রহণকারীদের আইনি বয়স হতে হবে, সাধারণত 18 বা তার বেশি।"}
            </li>
            <li>
              {language === "en"
                ? "Certain lotteries may have residency requirements or other eligibility criteria."
                : "কিছু লটারিতে বসবাসের প্রয়োজনীয়তা বা অন্যান্য যোগ্যতার মানদণ্ড থাকতে পারে।"}
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">
            {language === "en" ? "Ticket Purchase:" : "টিকিট ক্রয়:"}
          </h3>
          <ul className="list-disc pl-5">
            <li>
              {language === "en"
                ? "Tickets must be purchased through authorized sellers or official online platforms."
                : "টিকিট অবশ্যই অনুমোদিত বিক্রেতা বা কর্মকর্তার মাধ্যমে ক্রয় করতে হবে অনলাইন প্ল্যাটফর্ম।"}
            </li>
            <li>
              {language === "en"
                ? "Each ticket must be bought before the specified deadline for it to be valid for the draw."
                : "প্রতিটি টিকিট ড্রয়ের জন্য বৈধ হওয়ার জন্য নির্দিষ্ট সময়সীমার আগে কিনতে হবে।"}
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">
            {language === "en" ? "Draw Procedures:" : "আঁকার পদ্ধতি:"}
          </h3>
          <ul className="list-disc pl-5">
            <li>
              {language === "en"
                ? "ottery draws are conducted using random number generators or mechanical draw machines to ensure fairness."
                : "ন্যায্যতা নিশ্চিত করার জন্য র্যান্ডম নম্বর জেনারেটর বা যান্ত্রিক ড্র মেশিন ব্যবহার করে ওটারি ড্র পরিচালিত হয়।"}
            </li>
            <li>
              {language === "en"
                ? "Draws are typically supervised by an independent auditor to maintain transparency."
                : "স্বচ্ছতা বজায় রাখার জন্য ড্রগুলি সাধারণত একজন স্বাধীন নিরীক্ষকের তত্ত্বাবধানে থাকে।"}
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">
            {language === "en" ? "Winning Numbers:" : "বিজয়ী সংখ্যা:"}
          </h3>
          <ul className="list-disc pl-5">
            <li>
              {language === "en"
                ? "Winning numbers are announced publicly through various channels, including websites, newspapers, and official apps."
                : "বিজয়ী নম্বরগুলি ওয়েবসাইট, সংবাদপত্র এবং অফিসিয়াল অ্যাপ সহ বিভিন্ন চ্যানেলের মাধ্যমে সর্বজনীনভাবে ঘোষণা করা হয়।"}
            </li>
            <li>
              {language === "en"
                ? "It is the responsibility of the ticket holder to check the winning numbers."
                : "বিজয়ী নম্বর চেক করার দায়িত্ব টিকেটধারীর।"}
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">
            {language === "en" ? "Claiming Prizes:" : "পুরস্কার দাবি করা:"}
          </h3>
          <ul className="list-disc pl-5">
            <li>
              {language === "en"
                ? "Winners must present their winning ticket and valid identification to claim their prize."
                : "বিজয়ীদের তাদের পুরস্কার দাবি করার জন্য তাদের বিজয়ী টিকিট এবং বৈধ পরিচয় উপস্থাপন করতে হবে।"}
            </li>
            <li>
              {language === "en"
                ? "Prizes must be claimed within a specified period, often ranging from 30 days to one year."
                : "পুরস্কার একটি নির্দিষ্ট সময়ের মধ্যে দাবি করতে হবে, প্রায়ই 30 দিন থেকে এক বছরের মধ্যে।"}
            </li>
            <li>
              {language === "en"
                ? "Prizes may be subject to taxes and other deductions as per local laws."
                : "পুরস্কার স্থানীয় আইন অনুযায়ী কর এবং অন্যান্য কর্তনের বিষয় হতে পারে।"}
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">
            {language === "en"
              ? " Anonymity and Publicity:"
              : "নাম প্রকাশ না করা এবং প্রচার:"}
          </h3>
          <ul className="list-disc pl-5">
            <li>
              {language === "en"
                ? "Winners may choose to remain anonymous in some jurisdictions,while others may require winners to participate in publicity."
                : "বিজয়ীরা কিছু বিচারব্যবস্থায় বেনামী থাকতে বেছে নিতে পারেন, অন্যদের জন্য বিজয়ীদের প্রচারে অংশগ্রহণের প্রয়োজন হতে পারে।"}
            </li>
            <li>
              {language === "en"
                ? "Check local regulations to understand your rights regarding anonymity."
                : "নাম প্রকাশ না করার বিষয়ে আপনার অধিকারগুলি বুঝতে স্থানীয় প্রবিধানগুলি দেখুন ৷"}
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-medium mb-4">
          {language === "en" ? "Legislative Framework" : "আইনগত কাঠামো"}
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">
            {language === "en"
              ? "Regulation and Oversight:"
              : "নিয়ন্ত্রণ এবং তদারকি:"}
          </h3>
          <ul className="list-disc pl-5">
            <li>
              {language === "en"
                ? "Lotteries are regulated by government agencies to ensure compliance with laws and ethical standards."
                : "আইন এবং নৈতিক মানগুলির সাথে সম্মতি নিশ্চিত করতে লটারিগুলি সরকারী সংস্থাগুলি দ্বারা নিয়ন্ত্রিত হয় ৷"}
            </li>
            <li>
              {language === "en"
                ? "These agencies are responsible for licensing operators, auditing games, and enforcing regulations."
                : "এই সংস্থাগুলি অপারেটরদের লাইসেন্সিং, গেম অডিটিং এবং প্রবিধান প্রয়োগের জন্য দায়ী ৷"}
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">
            {language === "en" ? "Consumer Protection:" : "ভোক্তা সুরক্ষা:"}
          </h3>
          <ul className="list-disc pl-5">
            <li>
              {language === "en"
                ? "Laws are in place to protect consumers from fraudulent activities and ensure the integrity of the lottery."
                : "ভোক্তাদের প্রতারণামূলক কার্যকলাপ থেকে রক্ষা করতে এবং লটারির অখণ্ডতা নিশ্চিত করতে আইন রয়েছে ৷"}
            </li>
            <li>
              {language === "en"
                ? "Operators must adhere to strict advertising standards to avoid misleading or exploiting players."
                : "খেলোয়াড়দের বিভ্রান্তিকর বা শোষণ এড়াতে অপারেটরদের অবশ্যই কঠোর বিজ্ঞাপনের মান মেনে চলতে হবে।"}
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">
            {language === "en" ? "Revenue Allocation:" : "রাজস্ব বরাদ্দ:"}
          </h3>
          <ul className="list-disc pl-5">
            <li>
              {language === "en"
                ? "A significant portion of lottery revenue is often allocated to public welfare programs, such as education, health, and infrastructure."
                : "লটারি রাজস্বের একটি উল্লেখযোগ্য অংশ প্রায়ই শিক্ষা, স্বাস্থ্য এবং অবকাঠামোর মতো জনকল্যাণমূলক কর্মসূচিতে বরাদ্দ করা হয় ।"}
            </li>
            <li>
              {language === "en"
                ? "Transparency in how lottery funds are used is crucial for maintaining public trust."
                : "লটারি তহবিল কীভাবে ব্যবহার করা হয় তাতে স্বচ্ছতা জনগণের আস্থা বজায় রাখার জন্য অত্যন্ত গুরুত্বপূর্ণ ।"}
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">
            {language === "en" ? "Responsible Gaming:" : "দায়িত্বশীল গেমিং:"}
          </h3>
          <ul className="list-disc pl-5">
            <li>
              {language === "en"
                ? "Lotteries promote responsible gaming by providing resources and support for players who may develop gambling problems."
                : "লটারিগুলি জুয়ার সমস্যা তৈরি করতে পারে এমন খেলোয়াড়দের জন্য সংস্থান এবং সহায়তা প্রদানের মাধ্যমে দায়িত্বশীল গেমিং প্রচার করে।"}
            </li>
            <li>
              {language === "en"
                ? "Self-exclusion programs and spending limits are available to help players manage their participation."
                : "খেলোয়াড়দের তাদের অংশগ্রহণ পরিচালনা করতে সাহায্য করার জন্য স্ব-বর্জন প্রোগ্রাম এবং ব্যয়ের সীমা উপলব্ধ।"}
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">
            {language === "en"
              ? "International Lotteries:"
              : "আন্তর্জাতিক লটারি"}
          </h3>
          <ul className="list-disc pl-5">
            <li>
              {language === "en"
                ? "Cross-border lotteries are subject to additional regulations and agreements between participating countries."
                : "ক্রস-বর্ডার লটারিগুলি অংশগ্রহণকারী দেশগুলির মধ্যে অতিরিক্ত প্রবিধান এবং চুক্তির সাপেক্ষে৷"}
            </li>
            <li>
              {language === "en"
                ? "Players should be aware of the specific rules governing international lottery participation and prize claims."
                : "খেলোয়াড়দের আন্তর্জাতিক লটারি অংশগ্রহণ এবং পুরষ্কার দাবি নিয়ন্ত্রণকারী নির্দিষ্ট নিয়ম সম্পর্কে সচেতন হওয়া উচিত।"}
            </li>
          </ul>
        </div>
      </section>

      <section className="pb-8">
        <h2 className="text-2xl font-medium mb-4">
          {language === "en"
            ? "Compliance and Fair Play"
            : "কমপ্লায়েন্স এবং ফেয়ার প্লে"}
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">
            {language === "en" ? "Fraud Prevention:" : "প্রতারনা প্রতিরোধ:"}
          </h3>
          <ul className="list-disc pl-5">
            <li>
              {language === "en"
                ? "Rigorous security measures are in place to prevent ticket fraud,scams, and other illegal activities."
                : "টিকিট জালিয়াতি, কেলেঙ্কারি এবং অন্যান্য অবৈধ কার্যকলাপ প্রতিরোধে কঠোর নিরাপত্তা ব্যবস্থা রয়েছে ।"}
            </li>
            <li>
              {language === "en"
                ? "Players should only purchase tickets from authorized sellers to avoid counterfeit tickets."
                : "জাল টিকিট এড়াতে খেলোয়াড়দের শুধুমাত্র অনুমোদিত বিক্রেতাদের কাছ থেকে টিকিট কেনা উচিত ।"}
            </li>
          </ul>
        </div>

        <div className="pb-6">
          <h3 className="text-xl font-medium mb-2">
            {language === "en" ? "Dispute Resolution:" : "বিরোধ নিষ্পত্তি:"}
          </h3>
          <ul className="list-disc pl-5">
            <li>
              {language === "en"
                ? "In case of disputes, clear procedures are established for players to lodge complaints and seek resolution."
                : "বিরোধের ক্ষেত্রে, খেলোয়াড়দের অভিযোগ দায়ের এবং সমাধানের জন্য স্পষ্ট পদ্ধতি প্রতিষ্ঠিত হয় ।"}
            </li>
            <li>
              {language === "en"
                ? "Independent arbitration bodies may be involved to ensure fair treatment of all parties."
                : "সব পক্ষের ন্যায্য আচরণ নিশ্চিত করার জন্য স্বাধীন সালিশি সংস্থা জড়িত হতে পারে ।"}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LotteryRules;
