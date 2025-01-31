import React from "react"
import { tenorsans } from "@/fonts/fonts"
import Image from "next/image"

export default function CoutureCollectionPage() {
    return (
        <main className="mb-14 max-w-4xl px-4 py-4 space-y-12 mx-auto">
            <div className=" text-4xl space-y-8">
                <div>
                    <h1 className={`${tenorsans.variable} font-tenor`}>Couture Collection</h1>
                    <div className="text-2xl pt-4">
                        An Exclusive World of Elegance
                    </div>
                </div>

                <p className="text-2xl">
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
                <div className="text-3xl">
                    How to Order Your Couture Piece
                    <div className="flex flex-col text-2xl">
                        <strong>Reach Out to Us:</strong>Send us an email at recens.co.in@gmail.com or on Instagram @recens.co.in with following details:
                        <ul className="list-disc ml-4">
                            <li>Your name and contact information</li>
                            <li>{`The type of couture piece you envision (dress, suit, gown, etc)`}</li>
                            <li>Your name and contact information</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
