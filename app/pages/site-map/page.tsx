import React from 'react';

const SiteMap: React.FC = () => {
  return (
    <div className="container mx-auto px-2 md:px-8">
      <h1 className="text-3xl font-medium mb-4">Site Map</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Home</h2>
        <ul className="list-disc ml-6 mb-2">
          <li>Overview of Dear Lottery</li>
          <li>Featured lottery events and promotions</li>
          <li>Latest news and updates</li>
          <li>Live Draw</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Company History</h2>
        <ul className="list-disc ml-6 mb-2">
          <li>Mission and Vision</li>
          <li>Team</li>
          <li>Testimonials</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Result</h2>
        <ul className="list-disc ml-6 mb-2">
          <li>Current Lotteries</li>
          <ul className="list-disc ml-6 mb-2">
            <li>List of Active Lottery Events</li>
            <li>Details and Ticket Purchase Options</li>
          </ul>
          <li>Upcoming Lotteries</li>
          <ul className="list-disc ml-6 mb-2">
            <li>Calendar of Future Events</li>
            <li>Early Bird Offers and Information</li>
          </ul>
          <li>Past Lotteries</li>
          <ul className="list-disc ml-6 mb-2">
            <li>Archive of Completed Lotteries</li>
            <li>Winning Numbers and Payouts</li>
          </ul>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Buy Tickets</h2>
        <ul className="list-disc ml-6 mb-2">
          <li>How to Buy</li>
          <ul className="list-disc ml-6 mb-2">
            <li>Step-by-Step Guide</li>
            <li>Payment Options</li>
            <li>Ticket Prices</li>
            <li>Special Offers</li>
          </ul>
          <li>Reseller Program</li>
          <ul className="list-disc ml-6 mb-2">
            <li>Earn Commissions</li>
            <li>How to Join</li>
          </ul>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Results</h2>
        <ul className="list-disc ml-6 mb-2">
          <li>Latest Results</li>
          <ul className="list-disc ml-6 mb-2">
            <li>Most Recent Draws</li>
            <li>Winning Numbers</li>
          </ul>
          <li>Historical Results</li>
          <ul className="list-disc ml-6 mb-2">
            <li>Archive by Date</li>
            <li>Searchable Database</li>
          </ul>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Promotions</h2>
        <ul className="list-disc ml-6 mb-2">
          <li>Current Promotions</li>
          <ul className="list-disc ml-6 mb-2">
            <li>Active Deals and Discounts</li>
          </ul>
          <li>Loyalty Program</li>
          <ul className="list-disc ml-6 mb-2">
            <li>Benefits and How to Join</li>
          </ul>
          <li>Refer a Friend</li>
          <ul className="list-disc ml-6 mb-2">
            <li>Referral Bonuses</li>
          </ul>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Contact Us</h2>
        <ul className="list-disc ml-6 mb-2">
          <li>Customer Support</li>
          <ul className="list-disc ml-6 mb-2">
            <li>Email and Phone Support</li>
            <li>Live Chat</li>
          </ul>
          <li>Office Locations</li>
          <ul className="list-disc ml-6 mb-2">
            <li>Address and Maps</li>
          </ul>
        </ul>
      </section>

      <footer className="mt-6 border-t pt-4">
        <h2 className="text-xl font-medium mb-2">Footer</h2>
        <ul className="list-disc ml-6 mb-2">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Site Map (link)</li>
          <li>Social Media Links (Facebook, Twitter, Instagram, etc.)</li>
        </ul>
        <p>This site map outlines the key sections and pages of the Dear Lottery website, providing a clear structure to ensure easy navigation and a user-friendly experience.</p>
      </footer>
    </div>
  );
};

export default SiteMap;
