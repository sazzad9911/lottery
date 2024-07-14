import React from 'react';

const DataDeletionPolicy = () => {
  return (
    <div className="container mx-auto px-2 md:px-8 ">
      <h1 className="text-3xl font-normal mb-4">Data Deletion Policy</h1>
      <p className="mb-6">
        At Dear Lottery, we prioritize the privacy and security of your personal information. We understand the importance of allowing our participants to control their data, including the right to have it deleted. This policy outlines our procedures for data deletion, ensuring transparency and compliance with applicable data protection regulations.
      </p>
      
      <section className="mb-6">
        <h2 className="text-2xl font-normal mb-2">Your Right to Data Deletion</h2>
        <h3 className="text-xl font-normal mb-1">1. Requesting Data Deletion:</h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>You have the right to request the deletion of your personal data from our systems at any time. This includes any information you have provided to us during the purchase of lottery tickets, registration, or other interactions with Dear Lottery.</li>
        </ul>
        <h3 className="text-xl font-normal mb-1">2. How to Request Data Deletion:</h3>
        <ul className="list-disc list-inside ml-4">
          <li>To request the deletion of your data, please contact our customer support team at [Your Email Address] or [Your Phone Number]. Provide your name, email address, and any other relevant information that will help us locate your data.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-normal mb-2">Our Data Deletion Process</h2>
        <h3 className="text-xl font-normal mb-1">1. Verification:</h3>
        <p className="mb-4">
          Upon receiving your data deletion request, we will verify your identity to ensure the security and integrity of the process. This may involve confirming your identity through email, phone, or other means.
        </p>
        <h3 className="text-xl font-normal mb-1">2. Review and Confirmation:</h3>
        <p className="mb-4">
          We will review your request and confirm the types of data you wish to be deleted. We will also inform you of any data that we are required to retain by law, which cannot be deleted.
        </p>
        <h3 className="text-xl font-normal mb-1">3. Data Deletion:</h3>
        <p className="mb-4">
          Once your request is verified and approved, we will delete your personal data from our active systems and databases. This process will be completed within 30 days of receiving your verified request.
        </p>
        <h3 className="text-xl font-normal mb-1">4. Notification:</h3>
        <p>
          After your data has been deleted, we will notify you to confirm that the deletion process has been completed.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-normal mb-2">Important Considerations</h2>
        <h3 className="text-xl font-normal mb-1">1. Data Retention Requirements:</h3>
        <p className="mb-4">
          Certain data may need to be retained for a specified period due to legal, regulatory, or contractual obligations. In such cases, we will inform you about the data we are required to keep and the reasons for its retention.
        </p>
        <h3 className="text-xl font-normal mb-1">2. Impact on Services:</h3>
        <p className="mb-4">
          Deleting your data may impact your ability to use certain services or features provided by Dear Lottery. For example, if you request the deletion of data necessary for account maintenance, you may no longer be able to access your account or participate in lottery draws.
        </p>
        <h3 className="text-xl font-normal mb-1">3. Backup Systems:</h3>
        <p>
          While we will delete your data from our active systems, some data may remain in our backup archives for a limited period. These backups are not accessible for daily business operations and will be purged according to our regular backup retention schedule.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-normal mb-2">Data Protection and Privacy</h2>
        <h3 className="text-xl font-normal mb-1">1. Security Measures:</h3>
        <p className="mb-4">
          We employ robust security measures to protect your personal data during the deletion process. This ensures that your data is securely erased and cannot be accessed or recovered by unauthorized parties.
        </p>
        <h3 className="text-xl font-normal mb-1">2. Compliance:</h3>
        <p>
          Our data deletion practices comply with relevant data protection regulations, including the General Data Protection Regulation (GDPR) and other applicable laws. We are committed to upholding your data privacy rights and maintaining transparency in our data handling practices.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-normal mb-2">Contact Us</h2>
        <p>
          If you have any questions or concerns about our Data Deletion Policy, please contact our customer support team.
        </p>
      </section>
    </div>
  );
};

export default DataDeletionPolicy;
