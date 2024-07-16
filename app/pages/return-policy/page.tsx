"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const ReturnPolicy = () => {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className="container mx-auto px-2 md:px-8 ">
      <h1 className="text-3xl font-medium mb-4">
        {language === "en" ? "Return Policy" : "প্রত্যাবর্তন নীতিমালা"}
      </h1>
      <p className="mb-6">
        {language === "en"
          ? "At Dear Lottery, we aim to provide a seamless and satisfactory experience for all our participants. While we strive to ensure that every transaction is smooth and transparent, we understand that issues may occasionally arise. Our return policy is designed to address such situations fairly and efficiently."
          : "ডিয়ার লটারিতে, আমরা আমাদের সকল অংশগ্রহণকারীদের জন্য একটি নিরবচ্ছিন্ন এবং সন্তোষজনক অভিজ্ঞতা প্রদানের লক্ষ্য রাখি। যদিও আমরা প্রতিটি লেনদেন মসৃণ এবং স্বচ্ছ হয় তা নিশ্চিত করার চেষ্টা করি, আমরা বুঝতে পারি যে মাঝে মাঝে সমস্যা দেখা দিতে পারে। আমাদের রিটার্ন নীতিটি এই ধরনের পরিস্থিতি মোকাবেলা করার জন্য ডিজাইন করা হয়েছে সুষ্ঠু এবং দক্ষতার সাথে।"}
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
          {language === "en"
            ? "Eligibility for Returns"
            : "রিটার্নের জন্য যোগ্যতা"}
        </h2>
        <h3 className="text-xl font-medium mb-1">
          {language === "en" ? "1. Time Frame:" : "১. সময়সীমা:"}
        </h3>
        <p className="mb-2">
          {language === "en"
            ? "All return requests must be made within 7 days of the ticket purchase date. After this period, tickets are no longer eligible for return or refund."
            : "টিকিট কেনার তারিখের ৭ দিনের মধ্যে সমস্ত ফেরত অনুরোধ করতে হবে। এই সময়ের পরে, টিকিট আর ফেরত বা ফেরতের জন্য যোগ্য নয়।"}
        </p>
        <h3 className="text-xl font-medium mb-1">
          {language === "en" ? "2. Condition:" : "২. শর্ত:"}
        </h3>
        <p className="mb-2">
          {language === "en"
            ? "Tickets must be returned in their original condition and must not have been used, damaged, or tampered with in any way."
            : "টিকিট অবশ্যই তাদের আসল অবস্থায় ফেরত দিতে হবে এবং ব্যবহার করা, ক্ষতিগ্রস্থ করা বা কোনোভাবেই টেম্পার করা যাবে না।"}
        </p>
        <h3 className="text-xl font-medium mb-1">
          {language === "en"
            ? "3. Non-Returnable Items:"
            : "৩. ফেরতযোগ্য নয় আইটেম:"}
        </h3>
        <ul className="list-disc ml-6 mb-2">
          <li>
            {language === "en"
              ? "Lottery tickets that have already been entered into a draw or are past the draw date."
              : "লটারির টিকিট যা ইতিমধ্যেই ড্র করা হয়েছে বা ড্রয়ের তারিখ পেরিয়ে গেছে ৷"}
          </li>
          <li>
            {language === "en"
              ? "Tickets purchased through third-party sellers or resellers."
              : "তৃতীয় পক্ষের বিক্রেতা বা রিসেলারদের মাধ্যমে কেনা টিকিট ।"}
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
          {language === "en"
            ? "How to Return a Ticket"
            : "কিভাবে একটি টিকিট ফেরত"}
        </h2>
        <h3 className="text-xl font-medium mb-1">
        {language === "en"
            ? "1. Initiate a Return:"
            : "১. একটি প্রত্যাবর্তন শুরু করুন:"}
          </h3>
        <p className="mb-2">
        {language === "en"
            ? "Contact our customer support team at "
            : "এ আমাদের গ্রাহক সহায়তা দলের সাথে যোগাযোগ করুন "}
          <a href="mailto:youremail@example.com" className="text-blue-500">
          {language === "en"
            ? "Your Email Address"
            : "আপনার ইমেইল ঠিকানা"}
          </a>{" "}
          {language === "en"
            ? "or"
            : "বা"}
          {" "}
          <a href="tel:+1234567890" className="text-blue-500">
          {language === "en"
            ? "Your Phone Number"
            : "আপনার ফোন নম্বর"}
           
          </a>{" "}
          {language === "en"
            ? "to initiate a return. Please provide your purchase details, including the ticket number, purchase date, and reason for the return."
            : "একটি প্রত্যাবর্তন শুরু করতে টিকিট নম্বর, ক্রয়ের তারিখ এবং ফেরতের কারণ সহ আপনার ক্রয়ের বিশদ বিবরণ দিন।"}
        </p>
        <h3 className="text-xl font-medium mb-1">
        {language === "en"
            ? "2. Verification Process:"
            : "২. যাচাইকরণ প্রক্রিয়া:"}
          
          </h3>
        <p className="mb-2">
        {language === "en"
            ? "Our team will verify the eligibility of your return request. This includes checking the ticket condition and ensuring it has not been entered into a draw or used in any way."
            : "আমাদের দল আপনার রিটার্ন অনুরোধের যোগ্যতা যাচাই করবে। এর মধ্যে রয়েছে টিকিটের অবস্থা পরীক্ষা করা এবং নিশ্চিত করা যে এটি কোনও ড্রয়ে প্রবেশ করা হয়নি বা কোনওভাবে ব্যবহার করা হয়নি ।"}
        </p>
        <h3 className="text-xl font-medium mb-1">
        {language === "en"
            ? "3. Returning the Ticket:"
            : "৩. টিকিট ফেরত দেওয়া:"}
          </h3>
        <p className="mb-2">
        {language === "en"
            ? " If your return is approved, you will receive instructions on how to return the ticket. Ensure the ticket is securely packaged to prevent damage during transit."
            : "আপনার রিটার্ন অনুমোদিত হলে, আপনি কীভাবে টিকিট ফেরত দেবেন তার নির্দেশাবলী পাবেন। ট্রানজিটের সময় ক্ষতি এড়াতে টিকিটটি নিরাপদে প্যাকেজ করা হয়েছে তা নিশ্চিত করুন ।"}
         
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
        {language === "en"
            ? "Processing Your Return"
            : "আপনার রিটার্ন প্রক্রিয়াকরণ"}
          </h2>
        <h3 className="text-xl font-medium mb-1">
        {language === "en"
            ? "1. Inspection:"
            : "১. পরিদর্শন:"}
          </h3>
        <p className="mb-2">
        {language === "en"
            ? "Once we receive your returned ticket, we will inspect it to confirm it meets the return criteria."
            : "একবার আমরা আপনার রিটার্ন টিকিট পেয়ে গেলে, এটি ফেরতের মানদণ্ড পূরণ করে তা নিশ্চিত করতে আমরা এটি পরীক্ষা করব ।"}
        </p>
        <h3 className="text-xl font-medium mb-1">
        {language === "en"
            ? "2. Refunds:"
            : "২. ফেরত:"}
          </h3>
        <p className="mb-2">
        {language === "en"
            ? "If the return is approved, a refund will be issued to your original payment method within 5-10 business days. Please note that any transaction fees incurred during the purchase are non-refundable."
            : "রিটার্ন অনুমোদিত হলে, ৫-১০ ব্যবসায়িক দিনের মধ্যে আপনার মূল অর্থপ্রদানের পদ্ধতিতে একটি ফেরত জারি করা হবে। অনুগ্রহ করে মনে রাখবেন ক্রয়ের সময় যে কোনো লেনদেনের ফি ফেরতযোগ্য নয়।"}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
        {language === "en"
            ? "Damaged or Defective Tickets"
            : "ক্ষতিগ্রস্ত বা ত্রুটিপূর্ণ টিকিট"}
        </h2>
        <p className="mb-2">
        {language === "en"
            ? "If you receive a damaged or defective ticket, please contact our customer support team immediately at "
            : "আপনি যদি একটি ক্ষতিগ্রস্ত বা ত্রুটিপূর্ণ টিকিট পান, অনুগ্রহ করে অবিলম্বে আমাদের গ্রাহক সহায়তা দলের সাথে যোগাযোগ করুন "}
          <a href="mailto:youremail@example.com" className="text-blue-500">
          {language === "en"
            ? "Your Email Address "
            : "আপনার ইমেইল ঠিকানা "}
          </a>
          {language === "en"
            ? "or "
            : "বা "}
          <a href="tel:+1234567890" className="text-blue-500">
          {language === "en"
            ? "Your Phone Number "
            : "আপনার ফোন নম্বর "}
          </a>
          {language === "en"
            ? "Provide your purchase details and a description of the issue. We will investigate the problem and, if necessary, provide a replacement ticket or a full refund."
            : "আপনার ক্রয়ের বিশদ এবং সমস্যার একটি বিবরণ প্রদান করুন। আমরা সমস্যাটি তদন্ত করব এবং প্রয়োজনে প্রতিস্থাপনের টিকিট বা সম্পূর্ণ অর্থ ফেরত প্রদান করব।"}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
        {language === "en"
            ? "Important Notes"
            : "গুরুত্বপূর্ণ নোট"}
          
          </h2>
        <h3 className="text-xl font-medium mb-1">
        {language === "en"
            ? "1. Final Sale:"
            : "১ . চূড়ান্ত বিক্রয়:"}
          
          </h3>
        <p className="mb-2">
        {language === "en"
            ? "All ticket sales are final. Except as explicitly stated in this return policy, tickets cannot be returned, exchanged, or refunded."
            : "সকল টিকেট বিক্রয় চূড়ান্ত হয়। এই রিটার্ন নীতিতে স্পষ্টভাবে উল্লেখ করা ছাড়া, টিকিট ফেরত, বিনিময় বা ফেরত দেওয়া যাবে না।"}
        </p>
        <h3 className="text-xl font-medium mb-1">
        {language === "en"
            ? "2. Legal Compliance:"
            : "২. আইনি সম্মতি:"}
          </h3>
        <p className="mb-2">
        {language === "en"
            ? "All return and refund requests are subject to local laws and regulations governing lottery ticket sales and returns."
            : "সমস্ত রিটার্ন এবং রিফান্ডের অনুরোধ লটারি টিকিট বিক্রয় এবং রিটার্ন নিয়ন্ত্রণকারী স্থানীয় আইন এবং প্রবিধানের অধীন।"}         
        </p>
      </section>

      <section className="pb-6">
        <h2 className="text-2xl font-medium mb-2">
        {language === "en"
            ? "Contact Us"
            : "যোগাযোগ করুন"}          
          </h2>
        <p>
        {language === "en"
            ? "For any questions or concerns regarding our return policy, please reach out to our customer support team."
            : "আমাদের রিটার্ন নীতি সংক্রান্ত কোনো প্রশ্ন বা উদ্বেগের জন্য, অনুগ্রহ করে আমাদের গ্রাহক সহায়তা দলের সাথে যোগাযোগ করুন।"} 
        </p>
      </section>
    </div>
  );
};

export default ReturnPolicy;
