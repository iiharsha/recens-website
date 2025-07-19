import Image from "next/image"
import type { Metadata } from "next"
import { Mail } from "lucide-react"

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Couture Collection",
        description: "Order your Couture piece from Recens.",
        keywords: ["contact", "help", "customize", "custom-made"],
    }
}

export default function CoutureCollectionPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-white">
                <div className="relative max-w-4xl mx-auto px-4 py-16">
                    <div className="text-center space-y-2">
                        <h1 className="text-xl sm:text-2xl font-medium">Couture Collection</h1>
                        <div className="text-[18px] pt-2 font-medium">An Exclusive World of Elegance</div>
                        <p className="text-[16px] leading-6 text-dark max-w-2xl mx-auto">
                            Welcome to our Couture Collection - a private showcase of our most luxurious, bespoke designs. Each piece
                            is a testament to unparalleled craftsmanship, designed for those who seek timeless sophistication.
                        </p>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="max-w-4xl mx-auto px-4 py-2">
                <div className="w-full aspect-[4/3] relative overflow-hidden shadow-2xl">
                    <Image
                        src="/images/couture-image.jpeg"
                        alt="couture collection image"
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "center center",
                        }}
                        className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="max-w-4xl mx-auto px-4 py-12 mb-14">
                <div className="bg-white shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-dark to-dark/90 px-8 py-6">
                        <h2 className="text-[18px] text-white font-medium">To Order Your Couture Piece</h2>
                    </div>

                    <div className="p-8 space-y-2">
                        {/* Primary Contact Methods */}
                        <div className="grid gap-4 text-white">
                            {/* Schedule Appointment Card */}
                            <div className="transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <a
                                            href="https://calendly.com/tanvi0509k/30min"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-dark to-dark/90 font-medium text-[16px] px-6 py-3 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl"
                                        >
                                            Schedule an Appointment with Us
                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="transition-all duration-300 text-dark">
                                <div className="flex items-center gap-2 text-[16px]">
                                    <span className="font-normal">Email</span>
                                    <Mail width={22} height={22} />
                                    <a
                                        href="mailto:recens.co.in@gmail.com"
                                        className="font-medium hover:text-purple-700 transition-colors duration-200 sm:border-none hover-line border-b border-gray-900 hover:border-gray-700"
                                    >
                                        recens.co.in@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Instagram Contact */}
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-normal text-[16px] text-gray-700">
                                    DM
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>

                                <a
                                    href="https://www.instagram.com/recens.co.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-gray-900 hover:text-purple-700 transition-colors duration-200 sm:border-none hover-line border-b border-gray-900 hover:border-gray-700"
                                >
                                    @recens.co.in
                                </a>
                            </div>
                        </div>

                        {/* Requirements Section */}
                        <div>
                            <p className="font-medium text-dark text-[16px] mb-1">Include the following details:</p>
                            <div className="p-2">
                                <ul className="list-none space-y-2 text-dark text-[16px]">
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-dark rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Your name and contact information</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-dark rounded-full mt-2 flex-shrink-0"></div>
                                        <span>The type of couture piece you envision (dress, suit, gown, etc.)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

