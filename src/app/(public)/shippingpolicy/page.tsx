import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Shipping Policy",
    description: "Shipping and Delivery",
    keywords: ["shipping", "delivery", "policy"],
  };
}

export default function ShippingPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-14 space-y-4">
      <h1 className="font-bold text-4xl">Shipping Policy</h1>
      <h3>Last Updated on Jan 4 2025</h3>
      <p>
        For International buyers, orders are shipped and delivered through
        registered international courier companies and/or International speed
        post only. For domestic buyers, orders are shipped through registered
        domestic courier companies and /or speed post only. Orders are shipped
        within 0-7 days or as per the delivery date agreed at the time of order
        confirmation and delivering of the shipment subject to Courier Company /
        post office norms. CALVOR is not liable for any delay in delivery by the
        courier company / postal authorities and only guarantees to hand over
        the consignment to the courier company or postal authorities within 0-7
        days rom the date of the order and payment or as per the delivery date
        agreed at the time of order confirmation. Delivery of all orders will be
        to the address provided by the buyer. Delivery of our services will be
        confirmed on your mail ID as specified during registration. For any
        issues in utilizing our services you may contact our helpdesk on
        8522999131
      </p>
    </div>
  );
}
