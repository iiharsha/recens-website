import React from "react";
import Head from "next/head";
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
    <>
      <Head>
        <title>Privacy Policy - CALVOR</title>
        <meta name="description" content="Privacy policy outlining how CALVOR collects, uses, and protects your personal information." />
      </Head>
      <div className="max-w-4xl mx-auto p-4 mb-12">

        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-lg mb-4">Last updated on Jan 4th, 2025</p>

        <div className="border-b mb-6"></div>

        <h2 className="text-xl font-semibold mb-4">WHAT DO WE DO WITH YOUR INFORMATION?</h2>
        <p>When you purchase something from our store, as part of the buying and selling process, we collect personal information such as your name, address, and email.</p>
        <p>When you browse our store, we automatically receive your IP address to learn about your browser and operating system.</p>
        <p>If you opt-in, we may send emails about our store, new products, and updates.</p>

        <div className="border-b mb-6"></div>

        <h2 className="text-xl font-semibold mb-4">CONSENT</h2>
        <p><strong>How do you get my consent?</strong></p>
        <p>Providing personal information for a transaction implies consent. For marketing purposes, we ask for explicit consent.</p>
        <p><strong>How do I withdraw my consent?</strong></p>
        <p>You may withdraw consent by contacting us at <a href="mailto:recens.co.in@gmail.com" className="text-blue-500">recens.co.in@gmail.com</a> or mailing us at Plot No-623, Norville, Mathrusri Nagar, Miyapur Hyderabad TELANGANA 500049.</p>

        <div className="border-b mb-6"></div>

        <h2 className="text-xl font-semibold mb-4">DISCLOSURE</h2>
        <p>We may disclose your personal information if required by law or if you violate our Terms of Service.</p>

        <div className="border-b mb-6"></div>

        <h2 className="text-xl font-semibold mb-4">PAYMENT</h2>
        <p>We use Razorpay for processing payments. Card data is encrypted via PCI-DSS standards and not stored by us.</p>
        <p>For more details, visit <a href="https://razorpay.com" className="text-blue-500">Razorpay</a>.</p>

        <div className="border-b mb-6"></div>

        <h2 className="text-xl font-semibold mb-4">THIRD-PARTY SERVICES</h2>
        <p>Third-party providers collect and use information as needed to perform their services.</p>
        <p>Once you leave our website or are redirected, you are no longer governed by our Privacy Policy.</p>

        <div className="border-b mb-6"></div>

        <h2 className="text-xl font-semibold mb-4">SECURITY</h2>
        <p>We follow industry best practices to protect your personal information from unauthorized access, misuse, or loss.</p>

        <div className="border-b mb-6"></div>

        <h2 className="text-xl font-semibold mb-4">COOKIES</h2>
        <p>We use cookies to maintain user sessions. They do not personally identify you on other websites.</p>

        <div className="border-b mb-6"></div>

        <h2 className="text-xl font-semibold mb-4">AGE OF CONSENT</h2>
        <p>By using this site, you confirm that you are of legal age in your jurisdiction.</p>

        <div className="border-b mb-6"></div>

        <h2 className="text-xl font-semibold mb-4">CHANGES TO THIS PRIVACY POLICY</h2>
        <p>We reserve the right to modify this policy at any time. Changes take effect immediately upon posting.</p>

        <div className="border-b mb-6"></div>

        <h2 className="text-xl font-semibold mb-4">QUESTIONS AND CONTACT INFORMATION</h2>
        <p>For access, corrections, or deletion of your data, contact our Privacy Compliance Officer at <a href="mailto:recens.co.in@gmail.com" className="text-blue-500">recens.co.in@gmail.com</a> or by mail at:</p>
        <p>Plot No-623, Norville, Mathrusri Nagar, Miyapur Hyderabad TELANGANA 500049</p>
      </div>
    </>
  );
}

