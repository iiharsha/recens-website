import React from "react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Privacy Policy",
    description: "Our Privacy Policy page",
    keywords: ["privacy", "policy"],
  };
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-lg mb-4">
        At <strong>Recens</strong>, we value your trust and are committed to
        protecting your privacy. This Privacy Policy outlines how we collect,
        use, and safeguard your personal information when you interact with our
        website or services.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <p className="text-lg mb-4">
          We collect personal information to provide you with the best shopping
          experience. The information we collect includes:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Personal Details:</strong> Name, email address, phone
            number, and shipping/billing address.
          </li>
          <li>
            <strong>Order Information:</strong> Payment details, purchase
            history, and preferences.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about your interaction with
            our website, such as IP address, browser type, and device
            information.
          </li>
          <li>
            <strong>Cookies:</strong> Small data files stored on your device
            that help us enhance your browsing experience.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <p className="text-lg mb-4">We use the information we collect for:</p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Order Processing:</strong> To process and deliver your
            purchases, including customization requests.
          </li>
          <li>
            <strong>Customer Support:</strong> To assist with inquiries,
            returns, or exchanges.
          </li>
          <li>
            <strong>Personalization:</strong> To tailor your experience on our
            website based on your preferences.
          </li>
          <li>
            <strong>Marketing Communications:</strong> To send promotional
            offers, new product launches, and updates (with your consent).
          </li>
          <li>
            <strong>Website Improvements:</strong> To monitor and improve our
            website’s performance and functionality.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          3. Sharing Your Information
        </h2>
        <p className="text-lg mb-4">
          We do not sell or share your personal information with third parties,
          except as necessary to provide our services:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Service Providers:</strong> Such as payment processors,
            shipping companies, and marketing tools.
          </li>
          <li>
            <strong>Legal Compliance:</strong> When required by law or to
            protect our rights, users, or property.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p className="text-lg mb-4">
          We are committed to protecting your personal information by:
        </p>
        <ul className="list-disc pl-6">
          <li>Using secure servers and SSL encryption for all transactions.</li>
          <li>Restricting access to your data to authorized personnel only.</li>
          <li>
            Regularly updating our security measures to prevent unauthorized
            access or breaches.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          5. Cookies and Tracking Technologies
        </h2>
        <p className="text-lg mb-4">
          Our website uses cookies to enhance your browsing experience. Cookies
          help us:
        </p>
        <ul className="list-disc pl-6">
          <li>Remember your preferences and login information.</li>
          <li>Track website analytics to improve functionality.</li>
        </ul>
        <p className="text-lg mt-4">
          You can disable cookies through your browser settings; however, doing
          so may limit certain website features.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
        <p className="text-lg mb-4">You have the right to:</p>
        <ul className="list-disc pl-6">
          <li>Access the personal data we hold about you.</li>
          <li>Request corrections or updates to your personal information.</li>
          <li>
            Opt-out of marketing communications at any time by clicking
            "unsubscribe" in our emails or contacting us.
          </li>
          <li>
            Request the deletion of your personal data (where applicable).
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Third-Party Links</h2>
        <p className="text-lg mb-4">
          Our website may contain links to third-party websites. Please note
          that we are not responsible for the privacy practices of these
          external sites. We encourage you to review their privacy policies.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Children’s Privacy</h2>
        <p className="text-lg mb-4">
          Our website is not intended for individuals under the age of 14. We do
          not knowingly collect personal information from children.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          9. Changes to This Privacy Policy
        </h2>
        <p className="text-lg mb-4">
          We reserve the right to update this Privacy Policy at any time. Any
          changes will be posted on this page with the updated date. We
          encourage you to review this policy periodically.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
        <p className="text-lg">
          If you have any questions about this Privacy Policy or how we handle
          your data, please contact us at:
        </p>
        <ul className="list-none pl-6 mt-4">
          <li>
            <strong>Email:</strong> recens.co.in@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> +91 8522999131
          </li>
        </ul>
      </div>
    </div>
  );
}
