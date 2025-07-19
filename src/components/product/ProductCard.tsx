'use client';

import Image from 'next/image';
import { useState } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import clsx from 'clsx';
import { Product } from '@/lib/shopify/types';
import Link from 'next/link';

const ProductCard = ({
  product,
  duration = 0.6
}: {
  product: Product;
  delay?: number;
  duration?: number;
}) => {

  const [activeImage, setActiveImage] = useState<'main' | 'hover'>('main');

  return (
    <LazyMotion features={domAnimation}>
      <m.article
        className="group w-full h-full "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeOut', duration }}
        viewport={{ once: true }}
      >
        <a
          href={'/product/' + product.handle}
          onMouseEnter={() => setActiveImage('hover')}
          onMouseLeave={() => setActiveImage('main')}
        >
          <div className="relative aspect-[2/3] overflow-hidden">
            <Image
              src={product.images[0]?.url || ''}
              alt="product image"
              fill
              sizes="
              (max-width: 640px) 50vw,
              (max-width: 1024px) 33vw,
              (max-width: 1280px) 25vw,
              (max-width: 1536px) 20vw,
              16vw
              "
              className={clsx('object-cover transition-opacity duration-300 ease-in-out', {
                'opacity-0': activeImage !== 'main',
                'opacity-100': activeImage === 'main'
              })}
            />
            <Image
              src={product.images[1]?.url || ''}
              alt="product image"
              fill
              sizes="
              (max-width: 640px) 50vw,
              (max-width: 1024px) 33vw,
              (max-width: 1280px) 25vw,
              (max-width: 1536px) 20vw,
              16vw
              "
              className={clsx('object-cover transition-opacity duration-300 ease-in-out', {
                'opacity-0': activeImage !== 'hover',
                'opacity-100': activeImage === 'hover'
              })}
            />
          </div>
        </a>
        <div className="flex flex-col justify-center-safe">
          <Link href={'/product/' + product.handle} className='px-2 py-1'>
            <h3 className="truncate overflow-hidden capitalize text-center text-[14px] font-semibold">
              {product.title}
            </h3>
            <p className="text-center text-[12px] text-black/70">
              {`RS. ${Intl.NumberFormat("en-IN", {
                useGrouping: true,
              }).format(Number(product.priceRange.minVariantPrice.amount))}`}
            </p>
          </Link>
        </div>
      </m.article>
    </LazyMotion>
  );
};

export default ProductCard;
