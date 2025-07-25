'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const mobileImages = [
  // Add more mobile images if needed
  '/images/heroimage1mb.webp',
  '/images/heroimage2mb.webp',
];

const desktopImages = [
  '/images/heroimage1dtop.webp',
  '/images/heroimage2dtop.webp',
  // Add more desktop images if needed
];

export default function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on client (hydration-safe)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (isMobile ? mobileImages.length : desktopImages.length));
    }, 3000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <div className="relative w-full aspect-[2/3] sm:aspect-[5/4] md:aspect-[16/9] select-none overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Hero Image ${index + 1}`}
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 absolute inset-0 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        />
      ))}
    </div>
  );
}

