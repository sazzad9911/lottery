"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const PrivacyPolicy: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className="container mx-auto px-2 md:px-8">
      <h1 className="text-3xl font-medium mb-4">
        {language === "en" ? "Privacy Policy" : "গোপনীয়তা নীতি"}
      </h1>
      <p className="mb-6">
        {language === "en"
          ? "Welcome to our Privacy Policy page. At Dear Lottery, we value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services. By accessing our website or services, you agree to the terms of this Privacy Policy."
          : "আমাদের গোপনীয়তা নীতি পৃষ্ঠায় স্বাগতম। ডিয়ার লটারিতে, আমরা আপনার গোপনীয়তাকে মূল্য দিই এবং আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে প্রতিশ্রুতিবদ্ধ। আপনি যখন আমাদের ওয়েবসাইট পরিদর্শন করেন বা আমাদের পরিষেবাগুলি ব্যবহার করেন তখন আমরা কীভাবে আপনার ডেটা সংগ্রহ করি, ব্যবহার করি, প্রকাশ করি এবং সুরক্ষিত করি এই নীতিটি রূপরেখা দেয়৷ আমাদের ওয়েবসাইট বা পরিষেবাগুলি অ্যাক্সেস করে, আপনি এই গোপনীয়তা নীতির শর্তাবলীতে সম্মত হন।"}
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
          {language === "en"
            ? "Information We Collect"
            : "আমরা তথ্য সংগ্রহ করি"}
        </h2>
        <h3 className="text-xl font-medium mb-1">
          {language === "en" ? "Personal Information:" : "ব্যক্তিগত তথ্য:"}
        </h3>
        <p className="mb-2">
          {language === "en"
            ? "Name and Contact Details: We collect your name, email address, phone number, and mailing address when you register on our site or subscribe to our newsletter."
            : "নাম এবং যোগাযোগের বিশদ: আপনি যখন আমাদের সাইটে নিবন্ধন করেন বা আমাদের নিউজলেটারে সাবস্ক্রাইব করেন তখন আমরা আপনার নাম, ইমেল ঠিকানা, ফোন নম্বর এবং মেইলিং ঠিকানা সংগ্রহ করি।:"}
        </p>
        <p className="mb-2">
          {language === "en"
            ? "Payment Information: For transactions, we collect payment details such as credit card information, billing address, and other related data."
            : "অর্থপ্রদানের তথ্য: লেনদেনের জন্য, আমরা পেমেন্টের বিশদ যেমন ক্রেডিট কার্ডের তথ্য, বিলিং ঠিকানা এবং অন্যান্য সম্পর্কিত ডেটা সংগ্রহ করি।"}
        </p>
        <h3 className="text-xl font-medium mb-1">
          {language === "en"
            ? "Non-Personal Information:"
            : "অ-ব্যক্তিগত তথ্য:"}
        </h3>
        <p className="mb-2">
          {language === "en"
            ? "Usage Data: We collect information about how you interact with our website, such as your IP address, browser type, pages visited, and the time and date of your visits."
            : "ব্যবহারের ডেটা: আপনি কীভাবে আমাদের ওয়েবসাইটের সাথে ইন্টারঅ্যাক্ট করেন সে সম্পর্কে আমরা তথ্য সংগ্রহ করি, যেমন আপনার IP ঠিকানা, ব্রাউজারের ধরন, পরিদর্শন করা পৃষ্ঠাগুলি এবং আপনার দর্শনের সময় এবং তারিখ।"}
        </p>
        <p className="mb-2">
          {language === "en"
            ? "Cookies: Our website uses cookies to enhance user experience, track usage patterns, and provide personalized content. You can choose to disable cookies through your browser settings."
            : "কুকিজ: আমাদের ওয়েবসাইট ব্যবহারকারীর অভিজ্ঞতা বাড়াতে, ব্যবহারের ধরণগুলি ট্র্যাক করতে এবং ব্যক্তিগতকৃত সামগ্রী সরবরাহ করতে কুকিজ ব্যবহার করে। আপনি আপনার ব্রাউজার সেটিংসের মাধ্যমে কুকিজ নিষ্ক্রিয় করতে বেছে নিতে পারেন।"}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
          {language === "en"
            ? "How We Use Your Information"
            : "আমরা কিভাবে আপনার তথ্য ব্যবহার করি"}
        </h2>
        <p className="mb-2">
          {language === "en"
            ? "To Provide and Improve Services:"
            : "পরিষেবা প্রদান এবং উন্নত করতে:"}
        </p>
        <ul className="list-disc ml-6 mb-2">
          <li>
            {language === "en"
              ? "We use your personal information to process transactions, manage your account, and provide customer support."
              : "আমরা লেনদেন প্রক্রিয়াকরণ, আপনার অ্যাকাউন্ট পরিচালনা এবং গ্রাহক সহায়তা প্রদান করতে আপনার ব্যক্তিগত তথ্য ব্যবহার করি ।"}
          </li>
          <li>
            {language === "en"
              ? " Usage data helps us analyze website performance, understand user behavior, and improve our services."
              : "ব্যবহারের ডেটা আমাদের ওয়েবসাইট কার্যক্ষমতা বিশ্লেষণ করতে, ব্যবহারকারীর আচরণ বুঝতে এবং আমাদের পরিষেবাগুলিকে উন্নত করতে সহায়তা করে।"}
          </li>
        </ul>
        <p className="mb-2">
          {language === "en" ? "Communication:" : "যোগাযোগ:"}
        </p>
        <ul className="list-disc ml-6 mb-2">
          <li>
            {language === "en"
              ? "We may use your contact details to send you updates, newsletters,promotional offers, and other information that may be of interest to you."
              : "আমরা আপনাকে আপডেট, নিউজলেটার, প্রচারমূলক অফার, এবং আপনার আগ্রহের হতে পারে এমন অন্যান্য তথ্য পাঠাতে আপনার যোগাযোগের বিবরণ ব্যবহার করতে পারি।"}
          </li>
          <li>
            {language === "en"
              ? "You can opt out of receiving these communications at any time."
              : "আপনি যেকোনো সময় এই যোগাযোগগুলি গ্রহণ করা থেকে অপ্ট আউট করতে পারেন ৷"}
          </li>
        </ul>
        <p className="mb-2">{language === "en" ? "Security:" : "নিরাপত্তা:"}</p>
        <ul className="list-disc ml-6 mb-2">
          <li>
            {language === "en"
              ? "We use the information collected to monitor and protect the security of our website and services, preventing fraud and other malicious activities."
              : "আমরা আমাদের ওয়েবসাইট এবং পরিষেবাগুলির নিরাপত্তা, জালিয়াতি এবং অন্যান্য দূষিত কার্যকলাপ প্রতিরোধে নিরীক্ষণ এবং সুরক্ষার জন্য সংগৃহীত তথ্য ব্যবহার করি ।"}
          </li>
        </ul>
        <p className="mb-2">
          {language === "en" ? "Legal Compliance:" : "বৈধ নালিশ:"}
        </p>
        <ul className="list-disc ml-6 mb-2">
          <li>
            {language === "en"
              ? " We may disclose your information to comply with legal obligations,respond to lawful requests, and protect our rights and property."
              : "আইনি বাধ্যবাধকতা মেনে চলার জন্য, আইনানুগ অনুরোধে সাড়া দিতে এবং আমাদের অধিকার ও সম্পত্তি রক্ষা করতে আমরা আপনার তথ্য প্রকাশ করতে পারি ।"}
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
          {language === "en"
            ? "Information Sharing and Disclosure"
            : "তথ্য শেয়ারিং এবং প্রকাশ"}
        </h2>
        <p className="mb-2">
          {language === "en"
            ? "Third-Party Service Providers:"
            : "তৃতীয় পক্ষের পরিষেবা প্রদানকারী:"}
        </p>
        <p className="mb-2">
          {language === "en"
            ? "We may share your information with third-party service providers who assist us in operating our website, processing payments, and delivering services. These providers are obligated to protect your data and use it only for the purposes we specify."
            : "আমরা আপনার তথ্য তৃতীয় পক্ষের পরিষেবা প্রদানকারীদের সাথে শেয়ার করতে পারি যারা আমাদের ওয়েবসাইট পরিচালনা, অর্থপ্রদান প্রক্রিয়াকরণ এবং পরিষেবা প্রদানে আমাদের সহায়তা করে। এই প্রদানকারীরা আপনার ডেটা সুরক্ষিত করতে এবং শুধুমাত্র আমরা নির্দিষ্ট করা উদ্দেশ্যে এটি ব্যবহার করতে বাধ্য।"}
        </p>
        <p className="mb-2">
          {language === "en" ? "Business Transfers:" : "ব্যবসা স্থানান্তর:"}
        </p>
        <p className="mb-2">
          {language === "en"
            ? " In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the acquiring entity."
            : "সম্পত্তির একীভূতকরণ, অধিগ্রহণ বা বিক্রয়ের ক্ষেত্রে, আপনার ব্যক্তিগত তথ্য অধিগ্রহণকারী সত্তার কাছে স্থানান্তরিত হতে পারে।"}
        </p>
        <p className="mb-2">
          {language === "en" ? "Legal Requirements:" : "আইনি প্রয়োজনীয়তা:"}
        </p>
        <p className="mb-2">
          {language === "en"
            ? "We may disclose your information if required by law or in response to valid requests by public authorities."
            : "আইন অনুসারে বা সরকারী কর্তৃপক্ষের বৈধ অনুরোধের প্রতিক্রিয়ায় আমরা আপনার তথ্য প্রকাশ করতে পারি ।"}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
          {language === "en" ? "Data Security" : "তথ্য নিরাপত্তা"}
        </h2>
        <p className="mb-2">
          {language === "en"
            ? " We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security."
            : "অননুমোদিত অ্যাক্সেস, পরিবর্তন, প্রকাশ বা ধ্বংস থেকে আপনার ব্যক্তিগত তথ্য রক্ষা করার জন্য আমরা শক্তিশালী নিরাপত্তা ব্যবস্থা বাস্তবায়ন করি। যাইহোক, ইন্টারনেট বা ইলেকট্রনিক স্টোরেজের মাধ্যমে ট্রান্সমিশনের কোনো পদ্ধতিই ১০০% নিরাপদ নয়। যদিও আমরা আপনার ডেটা সুরক্ষিত করার জন্য বাণিজ্যিকভাবে গ্রহণযোগ্য উপায়গুলি ব্যবহার করার চেষ্টা করি, আমরা এর সম্পূর্ণ নিরাপত্তার নিশ্চয়তা দিতে পারি না ।"}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
          {language === "en" ? "Your Rights" : "তোমার অধিকারগুলো"}
        </h2>
        <p className="mb-2">
          {language === "en"
            ? "Access and Correction:"
            : "অ্যাক্সেস এবং সংশোধন:"}
        </p>
        <p className="mb-2">
          {language === "en"
            ? "You have the right to access and update your personal information. If your data changes or you believe it is inaccurate, please contact us to make the necessary corrections."
            : "আপনার ব্যক্তিগত তথ্য অ্যাক্সেস এবং আপডেট করার অধিকার রয়েছে৷ যদি আপনার ডেটা পরিবর্তন হয় বা আপনি বিশ্বাস করেন যে এটি ভুল, প্রয়োজনীয় সংশোধন করতে আমাদের সাথে যোগাযোগ করুন ।"}
        </p>
        <p className="mb-2">{language === "en" ? "Deletion:" : "মুছে ফেলা:"}</p>
        <p className="mb-2">
          {language === "en"
            ? "You can request the deletion of your personal information, subject to certain legal restrictions."
            : "আপনি কিছু আইনি বিধিনিষেধ সাপেক্ষে আপনার ব্যক্তিগত তথ্য মুছে ফেলার অনুরোধ করতে পারেন ।"}
        </p>
        <p className="mb-2">{language === "en" ? "Opt-Out:" : "অপ্ট-আউট:"}</p>
        <p className="mb-2">
          {language === "en"
            ? " You have the right to opt out of receiving marketing communications from us. You can do so by following the unsubscribe instructions in our emails or contacting us directly."
            : "আমাদের কাছ থেকে বিপণন যোগাযোগ প্রাপ্তি থেকে অপ্ট আউট করার অধিকার আপনার আছে৷ আপনি আমাদের ইমেলগুলিতে সদস্যতা ত্যাগ করার নির্দেশাবলী অনুসরণ করে বা সরাসরি আমাদের সাথে যোগাযোগ করে তা করতে পারেন ।"}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
          {language === "en"
            ? "Changes to This Privacy Policy"
            : "এই গোপনীয়তা নীতি পরিবর্তন"}
        </h2>
        <p className="mb-2">
          {language === "en"
            ? "We may update our Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information."
            : "আমরা সময়ে সময়ে আমাদের গোপনীয়তা নীতি আপডেট করতে পারি আমাদের অনুশীলনের পরিবর্তনগুলিকে প্রতিফলিত করতে বা অন্যান্য কার্যক্ষম, আইনি বা নিয়ন্ত্রক কারণে। আমরা এই পৃষ্ঠায় নতুন নীতি পোস্ট করে কোনো উল্লেখযোগ্য পরিবর্তন সম্পর্কে আপনাকে অবহিত করব। আমরা কীভাবে আপনার তথ্য রক্ষা করছি সে সম্পর্কে অবগত থাকার জন্য আমরা আপনাকে নিয়মিত এই গোপনীয়তা নীতি পর্যালোচনা করতে উত্সাহিত করি ।"}
        </p>
      </section>

      <section className="pb-6">
        <h2 className="text-2xl font-medium mb-2">
          {language === "en" ? "Contact Us" : "যোগাযোগ করুন"}
        </h2>
        <p>
          {language === "en"
            ? "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:"
            : "এই গোপনীয়তা নীতি বা আমাদের ডেটা অনুশীলন সম্পর্কে আপনার কোন প্রশ্ন বা উদ্বেগ থাকলে, অনুগ্রহ করে আমাদের সাথে এখানে যোগাযোগ করুন:"}
        </p>
        <p>
          {language === "en" ? "DEAR LOTTERY" : "ডিয়ার লটারি"}
          <br />
          {language === "en" ? "Kishorganj, Dhaka- 1206" : "কিশোরগঞ্জ, ঢাকা- ১২০৬"}
          <br />
            {language === "en" ? "Dhaka, Bangladesh" : "ঢাকা, বাংলাদেশ"} 
          <br />
          <a href="mailto:support@dearlotterybd.com" className="text-blue-500">
          {language === "en" ? "support@dearlotterybd.com" : "support@dearlotterybd.com"} 
          </a>
          <br />
          {language === "en" ? "01234567899" : "01234567899"}
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
