import { Metadata } from "next";
import { tenorsans } from "@/fonts/fonts";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us",
    description:
      "Contact Recens for any kind of queries or customizing options",
    keywords: ["contact", "help", "customize", "report"],
  };
}

export default function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 space-y-12 min-h-[60vh]">
      <section className="contact-us">
        <h2 className={`${tenorsans.variable} font-tenor text-center text-3xl sm:text-4xl font-semibold mb-6`}>Contact Us</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          We’re here to assist you with any questions, inquiries, or custom
          order requests. Reach out to us:
        </p>
        <div className="space-y-4 mt-4">
          <p className="text-lg text-gray-800">
            📧 Email:{" "}
            <a
              href="mailto:recens.co.in@gmail.com"
              className="text-purple-600 underline"
            >
              recens.co.in@gmail.com
            </a>
          </p>
          <p className="text-lg text-gray-800">
            📞 Phone:{" "}
            <a href="tel:+91 9949489384" className="text-purple-600 underline">
              +91 9949489384
            </a>
          </p>
        </div>
        <p className="text-lg text-gray-800 mt-6">
          Follow us on Instagram:
          <a
            href="https://www.instagram.com/recens.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 underline ml-1"
          >
            @recens.co.in
          </a>
        </p>
      </section>
    </div>
  );
}
