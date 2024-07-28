"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const DataDeletionPolicy = () => {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className="container mx-auto px-2 md:px-8 ">
      <h1 className="text-3xl font-semibold mb-4">
        {language === "en" ? "Data Deletion Policy" : "ডেটা মুছে ফেলার নীতি"}
      </h1>
      <p className="mb-6">
        {language === "en"
          ? " At Dear Lottery, we prioritize the privacy and security of your personal information. We understand the importance of allowing our participants to control their data, including the right to have it deleted. This policy outlines our procedures for data deletion, ensuring transparency and compliance with applicable data protection regulations."
          : "ডিয়ার লটারিতে, আমরা আপনার ব্যক্তিগত তথ্যের গোপনীয়তা এবং নিরাপত্তাকে অগ্রাধিকার দিই। আমরা আমাদের অংশগ্রহণকারীদের তাদের ডেটা মুছে ফেলার অধিকার সহ নিয়ন্ত্রণ করার অনুমতি দেওয়ার গুরুত্ব বুঝি৷ এই নীতিটি ডেটা মুছে ফেলার জন্য আমাদের পদ্ধতির রূপরেখা দেয়, স্বচ্ছতা নিশ্চিত করে এবং প্রযোজ্য ডেটা সুরক্ষা প্রবিধানগুলির সাথে সম্মতি দেয়।"}
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
          {language === "en"
            ? "Your Right to Data Deletion"
            : "আপনার ডেটা মুছে ফেলার অধিকার"}
        </h2>
        <h3 className="text-xl font-medium mb-1">
          {language === "en"
            ? "1. Requesting Data Deletion:"
            : "১. ডেটা মুছে ফেলার অনুরোধ করা:"}
        </h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <p>
          {language === "en"
            ? "You have the right to request the deletion of your personal data from our systems at any time.This includes any information you have provided to us during the purchase of lottery tickets, registration,or other interactions with Dear Lottery."
            : "আমাদের সিস্টেম থেকে যেকোনো সময় আপনার ব্যক্তিগত ডেটা মুছে ফেলার অনুরোধ করার অধিকার আপনার আছে। এতে আপনার কাছে থাকা যেকোনো তথ্য অন্তর্ভুক্ত রয়েছে। ডিয়ার লটারির সাথে লটারির টিকিট, রেজিস্ট্রেশন বা অন্যান্য মিথস্ক্রিয়া কেনার সময় আমাদের সরবরাহ করা হয়েছে।"}           
          </p>
        </ul>
        <h3 className="text-xl font-medium mb-1">
        {language === "en"
            ? "2. How to Request Data Deletion:"
            : "২. কীভাবে ডেটা মুছে ফেলার অনুরোধ করবেন:"}          
        </h3>
        <ul className="list-disc list-inside ml-4">
          <p>
          {language === "en"
            ? "To request the deletion of your data, please contact our customer support team at [Your Email Address] or [Your Phone Number]. Provide your name, email address, and any other relevant information that will help us locate your data."
            : "আপনার ডেটা মুছে ফেলার অনুরোধ করতে, অনুগ্রহ করে [আপনার ইমেল ঠিকানা] বা [আপনার ফোন নম্বর] এ আমাদের গ্রাহক সহায়তা দলের সাথে যোগাযোগ করুন। আপনার নাম, ইমেল ঠিকানা, এবং অন্য কোন প্রাসঙ্গিক তথ্য প্রদান করুন যা আমাদের আপনার ডেটা সনাক্ত করতে সাহায্য করবে।"}           
          </p>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
        {language === "en"
            ? "Our Data Deletion Process"
            : "আমাদের ডেটা মুছে ফেলার প্রক্রিয়া"}           
          </h2>
        <h3 className="text-xl font-medium mb-1">
        {language === "en"
            ? "1. Verification:"
            : "১. যাচাইকরণ:"}          
          </h3>
        <p className="mb-4">
          Upon receiving your data deletion request, we will verify your
          identity to ensure the security and integrity of the process. This may
          involve confirming your identity through email, phone, or other means.
        </p>
        <h3 className="text-xl font-medium mb-1">
          2. Review and Confirmation:
        </h3>
        <p className="mb-4">
          We will review your request and confirm the types of data you wish to
          be deleted. We will also inform you of any data that we are required
          to retain by law, which cannot be deleted.
        </p>
        <h3 className="text-xl font-medium mb-1">3. Data Deletion:</h3>
        <p className="mb-4">
          Once your request is verified and approved, we will delete your
          personal data from our active systems and databases. This process will
          be completed within 30 days of receiving your verified request.
        </p>
        <h3 className="text-xl font-medium mb-1">4. Notification:</h3>
        <p>
          After your data has been deleted, we will notify you to confirm that
          the deletion process has been completed.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Important Considerations</h2>
        <h3 className="text-xl font-medium mb-1">
          1. Data Retention Requirements:
        </h3>
        <p className="mb-4">
          Certain data may need to be retained for a specified period due to
          legal, regulatory, or contractual obligations. In such cases, we will
          inform you about the data we are required to keep and the reasons for
          its retention.
        </p>
        <h3 className="text-xl font-medium mb-1">2. Impact on Services:</h3>
        <p className="mb-4">
          Deleting your data may impact your ability to use certain services or
          features provided by Dear Lottery. For example, if you request the
          deletion of data necessary for account maintenance, you may no longer
          be able to access your account or participate in lottery draws.
        </p>
        <h3 className="text-xl font-medium mb-1">3. Backup Systems:</h3>
        <p>
          While we will delete your data from our active systems, some data may
          remain in our backup archives for a limited period. These backups are
          not accessible for daily business operations and will be purged
          according to our regular backup retention schedule.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">
          Data Protection and Privacy
        </h2>
        <h3 className="text-xl font-medium mb-1">1. Security Measures:</h3>
        <p className="mb-4">
          We employ robust security measures to protect your personal data
          during the deletion process. This ensures that your data is securely
          erased and cannot be accessed or recovered by unauthorized parties.
        </p>
        <h3 className="text-xl font-medium mb-1">2. Compliance:</h3>
        <p>
          Our data deletion practices comply with relevant data protection
          regulations, including the General Data Protection Regulation (GDPR)
          and other applicable laws. We are committed to upholding your data
          privacy rights and maintaining transparency in our data handling
          practices.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-medium mb-2">Contact Us</h2>
        <p>
          If you have any questions or concerns about our Data Deletion Policy,
          please contact our customer support team.
        </p>
      </section>
    </div>
  );
};

export default DataDeletionPolicy;
