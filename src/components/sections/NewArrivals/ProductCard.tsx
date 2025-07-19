'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import clsx from 'clsx';
import { Product } from '@/lib/shopify/types';

const ProductCard = ({
  product,
  duration = 0.6,
}: {
  product: Product;
  duration?: number;
}) => {
  const [activeImage, setActiveImage] = useState<'main' | 'hover'>('main');

  return (
    <LazyMotion features={domAnimation}>
      <m.article
        className="group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeOut', duration }}
        viewport={{ once: true }}
      >
        <Link
          href={`/product/${product.handle}`}
          onMouseEnter={() => setActiveImage('hover')}
          onMouseLeave={() => setActiveImage('main')}
          className="block"
        >
          <div className="relative h-full aspect-[9/16] overflow-hidden">
            <Image
              src={product.images[0]?.url || ''}
              alt={`${product.title} main image`}
              fill
              priority
              sizes="(max-width: 480px) 100vw,
                     (max-width: 768px) 50vw,
                     (max-width: 1024px) 33vw,
                     (max-width: 1280px) 25vw,
                     (max-width: 1536px) 20vw,
                     16vw"
              className={clsx(
                'object-cover transition-opacity duration-300 ease-in-out',
                {
                  'opacity-0': activeImage !== 'main',
                  'opacity-100': activeImage === 'main',
                }
              )}
            />
            <Image
              src={product.images[1]?.url || product.images[0]?.url || ''}
              alt={`${product.title} hover image`}
              fill
              sizes="(max-width: 480px) 100vw,
                     (max-width: 768px) 50vw,
                     (max-width: 1024px) 33vw,
                     (max-width: 1280px) 25vw,
                     (max-width: 1536px) 20vw,
                     16vw"
              className={clsx(
                'object-cover transition-opacity duration-300 ease-in-out absolute top-0 left-0',
                {
                  'opacity-0': activeImage !== 'hover',
                  'opacity-100': activeImage === 'hover',
                }
              )}
            />
          </div>
        </Link>

        <div className="text-center space-y-1 mt-2">
          <Link href={`/product/${product.handle}`} className="block">
            <h3 className="truncate overflow-hidden capitalize text-center text-[14px] font-semibold">
              {product.title}
            </h3>
            <p className="text-center text-[12px] text-black/70">
              ₹
              {Intl.NumberFormat('en-IN', {
                useGrouping: true,
              }).format(Number(product.priceRange.minVariantPrice.amount))}
            </p>
          </Link>
        </div>
      </m.article>
    </LazyMotion>
  );
};

export default ProductCard;

