import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us",
    description: "Learn more about us",
    keywords: ["aboutus", "company", "mission", "goals", "values"],
  };
}

export default function AboutUs() {
  return (
    <div className="about-us-container max-w-4xl mx-auto px-4 py-8 space-y-12">
      <section className="about-us">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg leading-relaxed text-gray-600">
          Welcome to <span className="font-bold text-purple-600">Recens</span>!
        </p>
        <p className="text-lg leading-relaxed text-gray-600">
          At Recens, we are redefining fashion by combining timeless elegance
          with sustainable practices.
        </p>
        <p className="text-lg leading-relaxed text-gray-600">
          We’re more than just a clothing brand – we’re a movement for
          individuality, quality, and craftsmanship. Our focus is on creating
          one-of-a-kind, customizable pieces – no mass production, no
          compromises.
        </p>
        <p className="text-lg leading-relaxed text-gray-600">
          Each dress is thoughtfully designed to prioritize comfort, style, and
          confidence. Whether you’re at home or stepping out, Recens ensures you
          feel effortlessly yourself.
        </p>
        <p className="text-lg leading-relaxed text-gray-600">
          We proudly say no to polyester and no to plastic in our fabrics and
          packaging. Every piece we create reflects our commitment to you and
          the planet.
        </p>
        <p className="text-lg leading-relaxed text-gray-600">
          At Recens, every piece tells a story – your story.
        </p>
      </section>

      <section className="contact-us">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          We’re here to assist you with any questions, inquiries, or custom
          order requests. Reach out to us:
        </p>
        <div className="space-y-4 mt-4">
          <p className="text-lg text-gray-600">
            📧 Email:{" "}
            <a
              href="mailto:recens.co.in@gmail.com"
              className="text-purple-600 underline"
            >
              recens.co.in@gmail.com
            </a>
          </p>
          <p className="text-lg text-gray-600">
            📞 Phone:{" "}
            <a href="tel:+918522999131" className="text-purple-600 underline">
              +91 8522999131
            </a>
          </p>
        </div>
        <p className="text-lg text-gray-600 mt-6">
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
