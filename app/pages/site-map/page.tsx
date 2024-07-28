"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const SiteMap: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className="container mx-auto px-2 md:px-8">
      <h1 className="text-3xl font-medium mb-4">
        {language === "en" ? "Site Map" : "সাইট ম্যাপ"}
      </h1>
      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
          {language === "en" ? "Home" : "হোম"}
        </h2>
        <ul className="list-disc ml-6 mb-2">
          <li>
            {language === "en"
              ? "Overview of Dear Lottery"
              : "ডিয়ার লটারি ওভারভিউ"}
          </li>
          <li>
            {language === "en"
              ? "Featured lottery events and promotions"
              : "বৈশিষ্ট্যযুক্ত লটারি ইভেন্ট এবং প্রচার"}
          </li>
          <li>
            {language === "en"
              ? "Latest news and updates"
              : "সর্বশেষ খবর এবং আপডেট"}
          </li>
          <li>
            {language === "en"
             ? "Live Draw" 
             : "লাইভ ড্র"}
             </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
        {language === "en"
             ? "Company History" 
             : "প্রতিষ্ঠানের ইতিহাস"}
          </h2>
        <ul className="list-disc ml-6 mb-2">
          <li>
          {language === "en"
             ? "Mission and Vision" 
             : "মিশন এবং ভিশন"}            
            </li>
          <li>
          {language === "en"
             ? "Team" 
             : "টীম"}             
            </li>
          <li>
          {language === "en"
             ? "Testimonials" 
             : "প্রশংসাপত্র"}
            </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
        {language === "en"
             ? "Result" 
             : "ফলাফল"}          
          </h2>
        <ul className="list-disc ml-6 mb-2">
          <li>
          {language === "en"
             ? "Current Lotteries" 
             : "বর্তমান লটারি"}            
            </li>
          <ul className="list-disc ml-6 mb-2">
            <li>
            {language === "en"
             ? "List of Active Lottery Events" 
             : "সক্রিয় লটারি ইভেন্টের তালিকা"}              
              </li>
            <li>
            {language === "en"
             ? "Details and Ticket Purchase Options" 
             : "বিশদ বিবরণ এবং টিকিট ক্রয়ের বিকল্প"}               
              </li>
          </ul>
          <li>
          {language === "en"
             ? "Upcoming Lotteries" 
             : "আসন্ন লটারি"}             
            </li>
          <ul className="list-disc ml-6 mb-2">
            <li>
            {language === "en"
             ? "Calendar of Future Events" 
             : "ভবিষ্যতের ইভেন্টের ক্যালেন্ডার"}              
              </li>
            <li>
            {language === "en"
             ? "Early Bird Offers and Information" 
             : "প্রারম্ভিক পাখি অফার এবং তথ্য"}             
              </li>
          </ul>
          <li>
          {language === "en"
             ? "Past Lotteries" 
             : "অতীত লটারি"}             
            </li>
          <ul className="list-disc ml-6 mb-2">
            <li>
            {language === "en"
             ? "Archive of Completed Lotteries" 
             : "সমাপ্ত লটারি সংরক্ষণাগার"}              
              </li>
            <li>
            {language === "en"
             ? "Winning Numbers and Payouts" 
             : "বিজয়ী নম্বর এবং পেআউট"}               
              </li>
          </ul>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
        {language === "en"
             ? "Buy Tickets" 
             : "টিকেট কেনা"}          
          </h2>
        <ul className="list-disc ml-6 mb-2">
          <li>
          {language === "en"
             ? "How to Buy" 
             : "কিভাবে কিনবো"}            
            </li>
          <ul className="list-disc ml-6 mb-2">
            <li>
            {language === "en"
             ? "Step-by-Step Guide" 
             : "ধাপে ধাপে নির্দেশিকা"}              
              </li>
            <li>
            {language === "en"
             ? "Payment Options" 
             : "পেমেন্ট অপশন"}              
              </li>
            <li>
            {language === "en"
             ? "Ticket Prices" 
             : "টিকেট মূল্য"}               
              </li>
            <li>
            {language === "en"
             ? "Special Offers" 
             : "বিশেষ অফার"}              
              </li>
          </ul>
          <li>
          {language === "en"
             ? "Reseller Program" 
             : "রিসেলার প্রোগ্রাম"}            
            </li>
          <ul className="list-disc ml-6 mb-2">
            <li>
            {language === "en"
             ? "Earn Commissions" 
             : "কমিশন উপার্জন"}               
              </li>
            <li>
            {language === "en"
             ? "How to Join" 
             : "কিভাবে জয়েন করবেন"}               
              </li>
          </ul>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
        {language === "en"
             ? "Results" 
             : "ফলাফল"}          
          </h2>
        <ul className="list-disc ml-6 mb-2">
          <li>
          {language === "en"
             ? "Latest Results" 
             : "সর্বশেষ ফলাফল"}            
            </li>
          <ul className="list-disc ml-6 mb-2">
            <li>
            {language === "en"
             ? "Most Recent Draws" 
             : "সবচেয়ে সাম্প্রতিক ড্র"}             
              </li>
            <li>
            {language === "en"
             ? "Winning Numbers" 
             : "বিজয়ী সংখ্যা"}              
              </li>
          </ul>
          <li>
          {language === "en"
             ? "Historical Results" 
             : "ঐতিহাসিক ফলাফল"}           
            </li>
          <ul className="list-disc ml-6 mb-2">
            <li>
            {language === "en"
             ? "Archive by Date" 
             : "তারিখ অনুযায়ী সংরক্ষণাগার"}              
              </li>
            <li>
            {language === "en"
             ? "Searchable Database" 
             : "অনুসন্ধানযোগ্য ডাটাবেস"}              
              </li>
          </ul>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
        {language === "en"
             ? "Promotions" 
             : "প্রচার"}         
          </h2>
        <ul className="list-disc ml-6 mb-2">
          <li>
          {language === "en"
             ? "Current Promotions" 
             : "বর্তমান প্রচার"}             
            </li>
          <ul className="list-disc ml-6 mb-2">
            <li>
            {language === "en"
             ? "Active Deals and Discounts" 
             : "সক্রিয় ডিল এবং ডিসকাউন্ট"}              
              </li>
          </ul>
          <li>
          {language === "en"
             ? "Loyalty Program" 
             : "বিশ্বস্ততা প্রোগ্রাম"}           
            </li>
          <ul className="list-disc ml-6 mb-2">
            <li>
            {language === "en"
             ? "Benefits and How to Join" 
             : "সুবিধা এবং যোগদান কিভাবে"}              
              </li>
          </ul>
          <li>
          {language === "en"
             ? "Refer a Friend" 
             : "একটা বন্ধুকে রেফার কর"}           
            </li>
          <ul className="list-disc ml-6 mb-2">
            <li>
            {language === "en"
             ? "Referral Bonuses" 
             : "রেফারেল বোনাস"}             
              </li>
          </ul>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
        {language === "en"
             ? "Contact Us" 
             : "যোগাযোগ করুন"}           
          </h2>
        <ul className="list-disc ml-6 mb-2">
          <li>
          {language === "en"
             ? "Customer Support" 
             : "গ্রাহক সমর্থন"}            
            </li>
          <ul className="list-disc ml-6 mb-2">
            <li>
            {language === "en"
             ? "Email and Phone Support" 
             : "ইমেল এবং ফোন সমর্থন"}              
              </li>
            <li>
            {language === "en"
             ? " Live Chat" 
             : "সরাসরি কথোপকথন"}             
              </li>
          </ul>
          <li>
          {language === "en"
             ? "Office Locations" 
             : "অফিসের অবস্থান"}            
            </li>
          <ul className="list-disc ml-6 mb-2">
            <li>
            {language === "en"
             ? "Address and Maps" 
             : "ঠিকানা এবং মানচিত্র"}               
              </li>
          </ul>
        </ul>
      </section>

      <footer className="mt-6 border-t pt-4">
        <h2 className="text-xl font-medium mb-2">
        {language === "en"
             ? "Footer" 
             : "ফুটার"}         
          </h2>
        <ul className="list-disc ml-6 mb-2">
          <li>
          {language === "en"
             ? "Terms of Service" 
             : "সেবা পাবার শর্ত"}             
            </li>
          <li>
          {language === "en"
             ? "Privacy Policy" 
             : "গোপনীয়তা নীতি"}            
            </li>
          <li>
          {language === "en"
             ? "Site Map (link)" 
             : "সাইট ম্যাপ (লিংক)"}            
            </li>
          <li>
          {language === "en"
             ? "Social Media Links (Facebook, Twitter, Instagram, etc.)" 
             : "সোশ্যাল মিডিয়া লিংক (ফেসবুক, টুইটার, ইনস্টাগ্রাম, ইত্যাদি)"}            
            </li>
        </ul>
        <p>
        {language === "en"
             ? "This site map outlines the key sections and pages of the Dear Lottery website,providing a clear structure to ensure easy navigation and a user-friendly experience." 
             : "এই সাইট ম্যাপটি প্রিয় লটারি ওয়েবসাইটের মূল বিভাগ এবং পৃষ্ঠাগুলির রূপরেখা দেয়, সহজে নেভিগেশন এবং ব্যবহারকারী-বান্ধব অভিজ্ঞতা নিশ্চিত করার জন্য একটি পরিষ্কার কাঠামো প্রদান করে।"} 
        </p>
      </footer>
    </div>
  );
};

export default SiteMap;
