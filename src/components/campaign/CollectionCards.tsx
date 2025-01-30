"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./Card";

const collections = [
  {
    name: "Versatility",
    image: "/red1_converted.webp",
    link: "/search/versatility",
  },
  {
    name: "Elegance",
    image: "/placeholder.svg?height=300&width=400",
    comingSoon: true,
  },
  {
    name: "Comfort",
    image: "/placeholder.svg?height=300&width=400",
    comingSoon: true,
  },
  {
    name: "Innovation",
    image: "/placeholder.svg?height=300&width=400",
    comingSoon: true,
  },
];

export default function CollectionCards() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {collections.map((collection, index) => (
        <div
          key={index}
          onClick={() => setActiveCard(activeCard === index ? null : index)}
        >
          {collection.link && !collection.comingSoon ? (
            <Link href={collection.link} passHref>
              <Card className="relative overflow-hidden group cursor-pointer">
                <div className="relative h-[300px]">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-60">
                    <h2 className="text-white text-2xl font-semibold text-center px-4">
                      {collection.name}
                    </h2>
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-white p-4 transform transition-transform duration-300 ${activeCard === index ? "translate-y-0" : "translate-y-full"
                    }`}
                >
                  <span className="text-blue-600 hover:underline font-semibold">
                    View Collection
                  </span>
                </div>
              </Card>
            </Link>
          ) : (
            <Card className="relative overflow-hidden group cursor-pointer">
              <div className="relative h-[300px]">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-60">
                  <h2 className="text-white text-2xl font-semibold text-center px-4">
                    {collection.name}
                  </h2>
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-0 right-0 bg-white p-4 transform transition-transform duration-300 ${activeCard === index ? "translate-y-0" : "translate-y-full"
                  }`}
              >
                <span className="text-gray-600 font-semibold">Coming Soon</span>
              </div>
            </Card>
          )}
        </div>
      ))}
    </div>
  );
}
