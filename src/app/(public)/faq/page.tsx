import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { Metadata } from "next";
import { tenorsans } from "@/fonts/fonts";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "FAQs",
        description: "Frequently Asked Questions",
        keywords: ["help", "faq", "payment", "shipping", "cancel"],
    };
}

export default function Faq() {
    return (
        <main className="max-w-4xl mx-auto py-8 px-8 mt-4 mb-12 space-y-4 flex flex-col min-h-[50vh]">
            <h2 className={`${tenorsans.variable} font-tenor text-center text-3xl sm:text-4xl font-semibold mb-6`}>Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
                <h3 className="text-xl font-medium px-4">Payment</h3>
                <AccordionItem value="item-1" className="m-2">
                    <AccordionTrigger className="text-md sm:text-xl font-normal h-14 bg-stone-300 rounded-xl px-4">What forms of payment do you accept?</AccordionTrigger>
                    <AccordionContent className="text-lg text-gray-600 mt-4 px-4">
                        We accept variety of payment methods, including:
                        <ul className="list-disc list-inside text-gray-900">
                            <li>UPI</li>
                            <li>Credit Card</li>
                            <li>Debit Card</li>
                        </ul>
                        We are working on enabling COD soon.
                    </AccordionContent>
                </AccordionItem>
                <h3 className="text-xl font-medium px-4">Shipping</h3>
                <AccordionItem value="item-2" className="m-2">
                    <AccordionTrigger className="text-md sm:text-xl font-normal h-12 bg-stone-300 rounded-xl px-4">How long for my order to arrive?</AccordionTrigger>
                    <AccordionContent className="text-lg text-gray-600 mt-4 px-4">
                        In most cases, orders are delivered within <span className="font-semibold">2 to 7 days.</span>
                        However, deliveries to remote areas in India may take longer depending on the courier company's policies and service availability.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="m-2">
                    <AccordionTrigger className="text-md sm:text-xl font-normal h-12 bg-stone-300 rounded-xl px-4">How much does it cost?</AccordionTrigger>
                    <AccordionContent className="text-lg text-gray-600 mt-4 px-4">
                        We provide free shipping for orders accross PAN India.
                        International orders will be charged seperately.
                    </AccordionContent>
                </AccordionItem>
                <h3 className="text-xl font-medium px-4">Orders</h3>
                <AccordionItem value="item-4" className="m-2">
                    <AccordionTrigger className="text-md sm:text-xl font-normal h-12 bg-stone-300 rounded-xl px-4">How to cancel my order?</AccordionTrigger>
                    <AccordionContent className="text-xl">
                        <p className="text-lg text-gray-600 mt-4 px-4">
                            You may cancel your order within <span className="font-semibold">24 hours</span> of placing it.
                            To know how to cancel your order click the link below.
                        </p>
                        <div>
                            <Link className="text-lg underline px-4" href="/cancelrefund">Cancel</Link>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="m-2">
                    <AccordionTrigger className="text-md sm:text-xl px-4 h-12 font-normal bg-stone-300 rounded-xl">How can I get an exchange on my order?</AccordionTrigger>
                    <AccordionContent className="text-xl">
                        <p className="text-lg text-gray-600 mt-4 px-4">
                            <span className="font-semibold">Returns are not allowed.</span> However,
                            we do offer exchanges for eligible items.
                        </p>
                        <ul className="list-disc pl-6 text-lg text-gray-600 mt-4 space-y-2">
                            <li>
                                The item must be{" "}
                                <span className="font-semibold">
                                    unworn, unused, and in its original condition.
                                </span>
                            </li>
                            <li>It must be accompanied by the original tags and packaging.</li>
                        </ul>
                        <p className="text-lg text-gray-600 mt-4 px-4">
                            Exchanges must be requested within{" "}
                            <span className="font-semibold">7 days</span> of receiving your order.
                            To know how to exchange your order click the link below.
                        </p>
                        <div>
                            <Link className="underline px-4 text-lg" href="/cancelrefund">Exchange</Link>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="m-2">
                    <AccordionTrigger className="text-md sm:text-xl px-4 h-12 font-normal bg-stone-300 rounded-xl">How can I find my size?</AccordionTrigger>
                    <AccordionContent className="text-xl">
                        <p className="text-lg text-gray-600 mt-4 px-4">
                            Follow the link below to know your size.
                        </p>
                        <div>
                            <Link className="underline px-4 text-lg" href="/sizeguide">Size Guide</Link>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7" className="m-2">
                    <AccordionTrigger className="text-md sm:text-xl px-4 h-12 font-normal bg-stone-300 rounded-xl">Can I customize my order?</AccordionTrigger>
                    <AccordionContent className="text-xl">
                        <p className="text-lg text-gray-600 mt-4 px-4">
                            Yes, Some of our collections offer customization options including minor design
                            tweaks. We also provide the option to create entirelyt new custom designs to match
                            your unique style.
                        </p>
                        <p className="text-lg text-gray-600 mt-4 px-4">
                            To customize your order contact us with your order details.
                        </p>
                        <div>
                            <Link className="underline px-4 text-lg" href="/contact">Contact</Link>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </main>
    )
}
