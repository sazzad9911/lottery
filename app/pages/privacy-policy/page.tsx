import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-2 md:px-8">
      <h1 className="text-3xl font-medium mb-4">Privacy Policy</h1>
      <p className="mb-6">
        Welcome to our Privacy Policy page. At [Your Company Name], we value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services. By accessing our website or services, you agree to the terms of this Privacy Policy.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Information We Collect</h2>
        <h3 className="text-xl font-medium mb-1">Personal Information:</h3>
        <p className="mb-2">Name and Contact Details: We collect your name, email address, phone number, and mailing address when you register on our site or subscribe to our newsletter.</p>
        <p className="mb-2">Payment Information: For transactions, we collect payment details such as credit card information, billing address, and other related data.</p>
        <h3 className="text-xl font-medium mb-1">Non-Personal Information:</h3>
        <p className="mb-2">Usage Data: We collect information about how you interact with our website, such as your IP address, browser type, pages visited, and the time and date of your visits.</p>
        <p className="mb-2">Cookies: Our website uses cookies to enhance user experience, track usage patterns, and provide personalized content. You can choose to disable cookies through your browser settings.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">How We Use Your Information</h2>
        <p className="mb-2">To Provide and Improve Services:</p>
        <ul className="list-disc ml-6 mb-2">
          <li>We use your personal information to process transactions, manage your account, and provide customer support.</li>
          <li>Usage data helps us analyze website performance, understand user behavior, and improve our services.</li>
        </ul>
        <p className="mb-2">Communication:</p>
        <ul className="list-disc ml-6 mb-2">
          <li>We may use your contact details to send you updates, newsletters, promotional offers, and other information that may be of interest to you.</li>
          <li>You can opt out of receiving these communications at any time.</li>
        </ul>
        <p className="mb-2">Security:</p>
        <ul className="list-disc ml-6 mb-2">
          <li>We use the information collected to monitor and protect the security of our website and services, preventing fraud and other malicious activities.</li>
        </ul>
        <p className="mb-2">Legal Compliance:</p>
        <ul className="list-disc ml-6 mb-2">
          <li>We may disclose your information to comply with legal obligations, respond to lawful requests, and protect our rights and property.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Information Sharing and Disclosure</h2>
        <p className="mb-2">Third-Party Service Providers:</p>
        <p className="mb-2">We may share your information with third-party service providers who assist us in operating our website, processing payments, and delivering services. These providers are obligated to protect your data and use it only for the purposes we specify.</p>
        <p className="mb-2">Business Transfers:</p>
        <p className="mb-2">In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the acquiring entity.</p>
        <p className="mb-2">Legal Requirements:</p>
        <p className="mb-2">We may disclose your information if required by law or in response to valid requests by public authorities.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Data Security</h2>
        <p className="mb-2">
          We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Your Rights</h2>
        <p className="mb-2">Access and Correction:</p>
        <p className="mb-2">You have the right to access and update your personal information. If your data changes or you believe it is inaccurate, please contact us to make the necessary corrections.</p>
        <p className="mb-2">Deletion:</p>
        <p className="mb-2">You can request the deletion of your personal information, subject to certain legal restrictions.</p>
        <p className="mb-2">Opt-Out:</p>
        <p className="mb-2">You have the right to opt out of receiving marketing communications from us. You can do so by following the unsubscribe instructions in our emails or contacting us directly.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Changes to This Privacy Policy</h2>
        <p className="mb-2">We may update our Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
      </section>

      <section className="pb-6">
        <h2 className="text-2xl font-medium mb-2">Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
        <p>DEAR LOTTERY<br />
          Kishorganj, Dhaka- 1206<br />
          Dahaka, Bangladesh<br />
          <a href="mailto:support@dearlotterybd.com" className="text-blue-500">support@dearlotterybd.com</a><br />
          0998632442
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
