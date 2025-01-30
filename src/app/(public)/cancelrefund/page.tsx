import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cancellationa/Refund",
    description: "Know about item cancellation or refund.",
    keywords: ["help", "exchange", "return", "cancel", "refund"],
  };
}

export default function CancelRefund() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
      {/* Heading */}
      <section className="policy-header">
        <h1 className="text-4xl font-bold text-gray-800">
          Cancellation and Exchange Policy
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          At <span className="font-bold text-purple-600">Recens</span>, we
          strive to deliver one-of-a-kind clothing pieces crafted with care and
          precision. While we aim for perfection in every order, we understand
          that sometimes adjustments might be needed. Below are our policies
          regarding cancellations and exchanges:
        </p>
      </section>

      {/* Order Cancellation */}
      <section className="order-cancellation">
        <h2 className="text-2xl font-semibold text-gray-800">
          Order Cancellation
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-600 mt-4 space-y-2">
          <li>
            You may cancel your order within{" "}
            <span className="font-bold">24 hours</span> of placing it.
          </li>
          <li>
            After 24 hours, cancellations are not permitted as production for
            your custom piece begins immediately.
          </li>
          <li>
            To cancel your order, please contact us at{" "}
            <a
              href="mailto:recens.co.in@gmail.com"
              className="text-purple-600 underline"
            >
              recens.co.in@gmail.com
            </a>
            or{" "}
            <a href="tel:+91 8522999131" className="text-purple-600 underline">
              +91 8522999131
            </a>{" "}
            with your order details.
          </li>
        </ul>
      </section>

      {/* Exchange Policy */}
      <section className="exchange-policy">
        <h2 className="text-2xl font-semibold text-gray-800">
          Exchange Policy
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          <span className="font-bold">Returns are not allowed.</span> However,
          we do offer exchanges for eligible items.
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-600 mt-4 space-y-2">
          <li>
            The item must be{" "}
            <span className="font-bold">
              unworn, unused, and in its original condition.
            </span>
          </li>
          <li>It must be accompanied by the original tags and packaging.</li>
        </ul>
        <p className="text-lg text-gray-600 mt-4">
          Exchanges must be requested within{" "}
          <span className="font-bold">7 days</span> of receiving your order.
        </p>
      </section>

      {/* How to Request an Exchange */}
      <section className="request-exchange">
        <h2 className="text-2xl font-semibold text-gray-800">
          How to Request an Exchange
        </h2>
        <ol className="list-decimal pl-6 text-lg text-gray-600 mt-4 space-y-2">
          <li>
            Email us at{" "}
            <a
              href="mailto:recens.co.in@gmail.com"
              className="text-purple-600 underline"
            >
              recens.co.in@gmail.com
            </a>{" "}
            with your order number, reason for exchange, and preferred
            replacement item.
          </li>
          <li>
            Our team will verify your request and provide instructions for
            returning the item to us.
          </li>
          <li>
            Once we receive and inspect the item, we will process the exchange.
          </li>
        </ol>
      </section>

      {/* Custom Orders */}
      <section className="custom-orders">
        <h2 className="text-2xl font-semibold text-gray-800">Custom Orders</h2>
        <p className="text-lg text-gray-600 mt-4">
          Please note that{" "}
          <span className="font-bold">
            customized items are non-exchangeable
          </span>{" "}
          as they are made exclusively for you.
        </p>
      </section>

      {/* Damaged or Defective Items */}
      <section className="damaged-items">
        <h2 className="text-2xl font-semibold text-gray-800">
          Damaged or Defective Items
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          In the unlikely event that you receive a damaged or defective item,
          please contact us immediately at{" "}
          <a href="/contact" className="text-purple-600 underline">
            Contact Us
          </a>
          .
        </p>
        <p className="text-lg text-gray-600 mt-4">
          We will arrange a replacement at no additional cost.
        </p>
      </section>
    </div>
  );
}
