import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="container mx-auto px-2 md:px-8 ">
      <h1 className="text-3xl font-medium mb-4">Return Policy</h1>
      <p className="mb-6">
        At Dear Lottery, we aim to provide a seamless and satisfactory experience for all our participants. While we strive to ensure that every transaction is smooth and transparent, we understand that issues may occasionally arise. Our return policy is designed to address such situations fairly and efficiently.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Eligibility for Returns</h2>
        <h3 className="text-xl font-medium mb-1">1. Time Frame:</h3>
        <p className="mb-2">All return requests must be made within 7 days of the ticket purchase date. After this period, tickets are no longer eligible for return or refund.</p>
        <h3 className="text-xl font-medium mb-1">2. Condition:</h3>
        <p className="mb-2">Tickets must be returned in their original condition and must not have been used, damaged, or tampered with in any way.</p>
        <h3 className="text-xl font-medium mb-1">3. Non-Returnable Items:</h3>
        <ul className="list-disc ml-6 mb-2">
          <li>Lottery tickets that have already been entered into a draw or are past the draw date.</li>
          <li>Tickets purchased through third-party sellers or resellers.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">How to Return a Ticket</h2>
        <h3 className="text-xl font-medium mb-1">1. Initiate a Return:</h3>
        <p className="mb-2">Contact our customer support team at <a href="mailto:youremail@example.com" className="text-blue-500">[Your Email Address]</a> or <a href="tel:+1234567890" className="text-blue-500">[Your Phone Number]</a> to initiate a return. Please provide your purchase details, including the ticket number, purchase date, and reason for the return.</p>
        <h3 className="text-xl font-medium mb-1">2. Verification Process:</h3>
        <p className="mb-2">Our team will verify the eligibility of your return request. This includes checking the ticket condition and ensuring it has not been entered into a draw or used in any way.</p>
        <h3 className="text-xl font-medium mb-1">3. Returning the Ticket:</h3>
        <p className="mb-2">If your return is approved, you will receive instructions on how to return the ticket. Ensure the ticket is securely packaged to prevent damage during transit.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Processing Your Return</h2>
        <h3 className="text-xl font-medium mb-1">1. Inspection:</h3>
        <p className="mb-2">Once we receive your returned ticket, we will inspect it to confirm it meets the return criteria.</p>
        <h3 className="text-xl font-medium mb-1">2. Refunds:</h3>
        <p className="mb-2">If the return is approved, a refund will be issued to your original payment method within 5-10 business days. Please note that any transaction fees incurred during the purchase are non-refundable.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Damaged or Defective Tickets</h2>
        <p className="mb-2">
          If you receive a damaged or defective ticket, please contact our customer support team immediately at <a href="mailto:youremail@example.com" className="text-blue-500">[Your Email Address]</a> or <a href="tel:+1234567890" className="text-blue-500">[Your Phone Number]</a>. Provide your purchase details and a description of the issue. We will investigate the problem and, if necessary, provide a replacement ticket or a full refund.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Important Notes</h2>
        <h3 className="text-xl font-medium mb-1">1. Final Sale:</h3>
        <p className="mb-2">All ticket sales are final. Except as explicitly stated in this return policy, tickets cannot be returned, exchanged, or refunded.</p>
        <h3 className="text-xl font-medium mb-1">2. Legal Compliance:</h3>
        <p className="mb-2">All return and refund requests are subject to local laws and regulations governing lottery ticket sales and returns.</p>
      </section>

      <section className="pb-6">
        <h2 className="text-2xl font-medium mb-2">Contact Us</h2>
        <p>For any questions or concerns regarding our return policy, please reach out to our customer support team.</p>
      </section>
    </div>
  );
};

export default ReturnPolicy;
