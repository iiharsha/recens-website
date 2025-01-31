"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageSlideshow({
  images,
  interval = 2000,
  className = "",
}: {
  images: string[];
  interval?: number;
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative w-full aspect-[2/3] overflow-hidden ${className}`}>
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`Slideshow image ${index + 1}`}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center center",
          }}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
