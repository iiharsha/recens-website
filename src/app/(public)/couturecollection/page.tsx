import React from "react"
import { tenorsans } from "@/fonts/fonts"
import Image from "next/image"
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Couture Collection",
        description:
            "Order your Couture piece from Recens.",
        keywords: ["contact", "help", "customize", "custom-made"],
    };
}

export default function CoutureCollectionPage() {
    return (
        <main className="mb-14 max-w-4xl px-4 py-4 space-y-12 mx-auto">
            <div className=" text-4xl space-y-8">
                <div>
                    <h2 className={`${tenorsans.variable} font-tenor text-center text-3xl sm:text-4xl font-semibold mb-6`}>Couture Collection</h2>
                    <div className="text-2xl pt-4">
                        An Exclusive World of Elegance
                    </div>
                </div>

                <p className="text-xl">
                    Welcome to our Couture Collection - a private showcase of our most luxurious, bespoke designs. Each
                    piece is a testament to unparalleled craftsmanship, designed for those who seek timeless sophistication.
                </p>

                {/* Image container with 4:2 (2:1) aspect ratio */}
                <div className="w-full aspect-[2/1] relative overflow-hidden shadow-sm">
                    <Image
                        src="/images/cropped-couture-painting.png"
                        alt="couture collection image"
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "center center"
                        }}
                        className="rounded-lg"
                    />
                </div>
                <div className="text-xl space-y-2">
                    <p>To Order Your Couture Piece</p>
                    <div className="text-xl flex flex-col gap-2 bg-gray-100 p-2 rounded-lg">
                        <strong className="text-gray-800">Reach Out to Us:</strong>
                        <p>
                            Send us an email at{" "}
                            <a href="mailto:recens.co.in@gmail.com" className="text-purple-600 underline">
                                recens.co.in@gmail.com
                            </a>
                        </p>
                        <p>
                            or send a message on Instagram{" "}
                            <a
                                href="https://www.instagram.com/recens.co.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 underline"
                            >
                                @recens.co.in
                            </a>
                        </p>
                        <p className="font-semibold text-gray-800">Include the following details:</p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Your name and contact information</li>
                            <li>The type of couture piece you envision (dress, suit, gown, etc.)</li>
                        </ul>
                    </div>
                </div>            </div>
        </main>
    )
}
