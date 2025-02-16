"use client"

import { useEffect, useState } from "react"

const heroImages = [
  "https://ik.imagekit.io/nc0cicxqm/IMG_1010-final_converted.webp?updatedAt=1739556492507",
  "https://ik.imagekit.io/nc0cicxqm/pink-heroimage-1035_converted.webp?updatedAt=1739726957826",
  "https://ik.imagekit.io/nc0cicxqm/IMG_1221-scaled.webp?updatedAt=1739732090435"
  // Add more image URLs here
]

export default function HomeVideo() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 4000) // Change image every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="pointer-events-none relative h-[170px] sm:h-[320px] -top-[60px] sm:-top-[80px] -bottom-[40px] select-none md:h-[calc(100vh_-_80px)]">
      {heroImages.map((src, index) => (
        <img
          key={src}
          src={src || "/placeholder.svg"}
          alt={`Hero Image ${index + 1}`}
          className={`absolute h-[30vh] sm:h-[50vh] md:h-[100vh] w-full object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}
    </div>
  )
}


