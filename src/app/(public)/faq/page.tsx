import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "FAQs",
        description: "Find answers to frequently asked questions about payments, shipping, cancellations, returns, exchanges, and custom orders at Recens.",
        keywords: [/* your SEO keywords here */],
    };
}

export default function Faq() {
    return (
        <main className="max-w-4xl mx-auto py-8 px-6 mt-4 mb-12 space-y-4 flex flex-col min-h-[50vh]">
            <h2 className="text-xl sm:text-2xl font-medium mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">

                {/* Section: Payment */}
                <h3 className="text-[16px] font-medium px-6">Payment</h3>
                <AccordionItem value="item-1" className="m-2">
                    <AccordionTrigger className="text-[15px] tracking-tight leading-2 font-normal h-14 bg-secondary rounded-sm px-5">
                        What forms of payment do you accept?
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] text-dark mt-4 px-4">
                        We accept a variety of payment methods, including:
                        <ul className="list-disc list-inside text-dark">
                            <li>UPI</li>
                            <li>Credit Card</li>
                            <li>Debit Card</li>
                        </ul>
                        We are working on enabling COD soon.
                    </AccordionContent>
                </AccordionItem>

                {/* Section: Shipping */}
                <h3 className="text-[16px] font-medium px-6">Shipping</h3>
                <AccordionItem value="item-2" className="m-2">
                    <AccordionTrigger className="text-[15px] font-normal h-14 bg-secondary rounded-sm px-5">
                        How long for my order to arrive?
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] text-dark mt-4 px-4">
                        In most cases, orders are delivered within <span className="font-semibold">2 to 7 days</span>.
                        Remote areas in India may take longer depending on courier service availability.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="m-2">
                    <AccordionTrigger className="text-[15px] font-normal h-14 bg-secondary rounded-sm px-5">
                        How much does it cost?
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] text-dark mt-4 px-4">
                        We provide free shipping across PAN India. International orders are charged separately.
                    </AccordionContent>
                </AccordionItem>

                {/* Section: Orders */}
                <h3 className="text-[16px] font-medium px-6">Orders</h3>
                <AccordionItem value="item-4" className="m-2">
                    <AccordionTrigger className="text-[15px] font-normal h-14 bg-secondary rounded-sm px-5">
                        How to cancel my order?
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] text-dark mt-4 px-4">
                        As of now, <span className="font-semibold">we don't provide cancellations after order has been placed</span>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="m-2">
                    <AccordionTrigger className="text-[15px] font-normal h-14 bg-secondary rounded-sm px-5">
                        How can I get an exchange on my order?
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] text-dark mt-4 px-4">
                        <p><span className="font-semibold">Returns are not allowed.</span> However, exchanges are possible if:</p>
                        <ul className="list-disc px-6 mt-4 space-y-2">
                            <li>The item is <span className="font-semibold">unworn, unused, and in original condition</span>.</li>
                            <li>It includes original tags and packaging.</li>
                        </ul>
                        <p className="mt-4">
                            Exchanges must be requested within <span className="font-semibold">7 days</span> of receiving your order.
                        </p>
                        <div>
                            <Link className="underline text-[15px]" href="/cancelrefund">Exchange</Link>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="m-2">
                    <AccordionTrigger className="text-[15px] font-normal h-14 bg-secondary rounded-sm px-5">
                        How can I find my size?
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] text-dark mt-4 px-4">
                        <p>Follow the link below to know your size.</p>
                        <Link className="underline text-[15px]" href="/sizeguide">Size Guide</Link>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="m-2">
                    <AccordionTrigger className="text-[15px] font-normal h-14 bg-secondary rounded-sm px-5">
                        Can I customize my order?
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] text-dark mt-4 px-4">
                        <p>
                            Yes. Some of our collections allow minor customization. We also support entirely new custom designs.
                        </p>
                        <p className="mt-4">
                            To customize your order, contact us with your order details.
                        </p>
                        <Link className="underline text-[15px]" href="/contact">Contact</Link>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </main>
    );
}

