import { Metadata } from "next";
import { tenorsans } from "@/fonts/fonts";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us",
    description: "Learn more about us",
    keywords: ["aboutus", "company", "mission", "goals", "values"],
  };
}

export default function AboutUs() {
  return (
    <div className="about-us-container max-w-4xl mx-auto px-4 py-8 space-y-12 mb-14">
      <section className="about-us">
        <h3 className={`${tenorsans.variable} font-tenor text-center text-3xl sm:text-4xl font-semibold mb-6`}>About Us</h3>
        <p className="text-lg leading-relaxed text-gray-800">
          Welcome to <span className="font-semibold text-black text-xl">Recens</span>!
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          At Recens, we are redefining fashion by combining timeless elegance
          with sustainable practices.
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          We’re more than just a clothing brand – we’re a movement for
          individuality, quality, and craftsmanship. Our focus is on creating
          one-of-a-kind, customizable pieces – no mass production, no
          compromises.
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          Each dress is thoughtfully designed to prioritize comfort, style, and
          confidence. Whether you’re at home or stepping out, Recens ensures you
          feel effortlessly yourself.
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          We proudly say no to polyester and no to plastic in our fabrics and
          packaging. Every piece we create reflects our commitment to you and
          the planet.
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          At Recens, every piece tells a story – your story.
        </p>
      </section>

      <section className="contact-us">
        <h3 className={`${tenorsans.variable} font-tenor text-center text-3xl sm:text-4xl font-semibold mb-6`}>Contact Us</h3>
        <p className="text-lg leading-relaxed text-gray-800">
          We’re here to assist you with any questions, inquiries, or custom
          order requests. Reach out to us:
        </p>
        <div className="space-y-4 mt-4">
          <p className="text-lg text-gray-600">
            📧 Email:{" "}
            <a
              href="mailto:recens.co.in@gmail.com"
              className="text-gray-800 underline"
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
            className="text-gray-800 underline ml-1"
          >
            @recens.co.in
          </a>
        </p>
      </section>
    </div>
  );
}
