"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "./Card"
import ImageSlideshow from "./ImageSlideshow"
import { tenorsans } from "@/fonts/fonts"

type Media = {
  type: "slideshow" | "image"
  src: string[] | string
}

type Collection = {
  name: string
  media: Media
  link?: string
  comingSoon?: boolean
}

const collections: Collection[] = [
  {
    name: "Versatility",
    media: {
      type: "slideshow",
      src: [
        "https://ik.imagekit.io/nc0cicxqm/1.webp?updatedAt=1738260313157",
        "https://ik.imagekit.io/nc0cicxqm/2.webp?updatedAt=1738260313090",
        "https://ik.imagekit.io/nc0cicxqm/3.webp?updatedAt=1738260313092",
        "https://ik.imagekit.io/nc0cicxqm/4.webp?updatedAt=1738260313077",
        "https://ik.imagekit.io/nc0cicxqm/5.webp?updatedAt=1738260313053",
      ],
    },
    link: "/search/versatility",
  },
  {
    name: "Coming Soon",
    media: {
      type: "image",
      src: "https://ik.imagekit.io/nc0cicxqm/ComingSoon.webp?updatedAt=1738261340515",
    },
    comingSoon: true,
  },
]

export default function CollectionCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {collections.map((collection, index) => (
        <div key={index} className="w-full">
          {collection.link && !collection.comingSoon ? (
            <Link href={collection.link} passHref>
              <CollectionCard collection={collection} />
            </Link>
          ) : (
            <CollectionCard collection={collection} />
          )}
        </div>
      ))}
    </div>
  )
}

function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Card className="relative overflow-hidden group cursor-pointer">
      <div className="relative w-full aspect-[2/3]">
        {collection.media.type === "slideshow" ? (
          <ImageSlideshow
            images={Array.isArray(collection.media.src) ? collection.media.src : [collection.media.src]}
            interval={3000}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <Image
            src={(collection.media.src as string) || "/placeholder.svg"}
            alt={collection.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              objectPosition: "center top",
            }}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        )}

        {/* Overlay Background */}
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60"></div>

        {/* Collection Name Title */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className={`${tenorsans.variable} text-white font-tenor text-3xl font-semibold`}>
            {collection.name}
          </span>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-0 left-0 right-0 bg-transparent p-4 transform transition-transform duration-300">
        <span className="text-white font-semibold">{collection.comingSoon ? "Coming Soon" : "View Collection"}</span>
      </div>
    </Card>
  );
}



