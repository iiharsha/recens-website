'use client';

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { montserrat } from '@/fonts/fonts';

const images = [
  {
    src: "/images/explore1.webp",
    link: "/search/first-blush",
    position: "top-right",
    description: "A fresh bloom of soft romance",
    label: "Explore One",
  },
  {
    src: "/images/explore2.webp",
    link: "/search/whispersofsatin",
    position: "bottom-right",
    description: "Whisper-light, evening-right",
    label: "Explore Two",
  },
];

export default function HomePagePics() {
  return (
    <section className={`${montserrat.className} font-mont grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-6`}>
      {images.map(({ src, link, position, description, label }, index) => (
        <div
          key={index}
          className="relative w-full aspect-[4/5] sm:aspect-square overflow-hidden"
        >
          {/* Background image */}
          <Image
            src={src}
            alt={label}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
            priority={index === 0}
          />

          {/* Subtle black overlay */}
          <div className="absolute inset-0 bg-black/25" />

          <div className={clsx(
            "absolute text-white text-[15px] flex flex-col text-center",
            {
              "top-4 right-4": position === "top-right",
              "bottom-4 right-4": position === "bottom-right",
            }
          )}
          >
            <span className='font-medium'>
              {description}
            </span>

            {/* Link */}
            <Link
              href={link} className="hover-line-two font-semibold transition-colors duration-200">
              SHOP NOW
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

