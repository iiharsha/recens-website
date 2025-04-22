"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const heroImages = [
  "https://ik.imagekit.io/nc0cicxqm/DSC05769-landscape3.webp?",
  "https://ik.imagekit.io/nc0cicxqm/pink-heroimage-1035.webp?",
  "https://ik.imagekit.io/nc0cicxqm/IMG_5968_converted.webp?",
  // Add more image URLs here
]

export default function HomeVideo() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 3000) // Change image every 3 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="pointer-events-none relative h-[250px] xs:h-[320px] sm:h-[320px] -top-[60px] sm:-top-[80px] -bottom-[40px] select-none md:h-[calc(100vh_-_80px)]">
      <div className="relative w-full h-[40vh] xs:h-[50vh] sm:h-[50vh] md:h-[100vh] ">
        {heroImages.map((src, index) => (
          <Image
            className={`object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            alt={`Hero Image ${index + 1}`}
            key={src}
            src={src}
            fill
            priority
            sizes="(max-width: 768px) 480px, 1440px"
          />
        ))}
      </div>
    </div>
  )
}


