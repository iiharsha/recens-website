'use client';

import Image from 'next/image';
import { useState } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import clsx from 'clsx';
import { getNumberWithOrdinal } from '@/lib/utils';
import { Product } from '@/lib/shopify/types';

const ProductCard = ({
  product,
  rank,
  delay = 0,
  duration = 0.5
}: {
  product: Product;
  rank?: number;
  delay?: number;
  duration?: number;
}) => {
  const [activeImage, setActiveImage] = useState('main');

  return (
    <LazyMotion features={domAnimation}>
      <m.article
        className="relative flex w-[180px] flex-col items-center justify-center gap-[10px] sm:w-[280px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeOut', duration, delay }}
        viewport={{ once: true }}
      >
        <a
          href={'/product/' + product.handle}
          onMouseEnter={() => setActiveImage('hover')}
          onMouseLeave={() => setActiveImage('main')}
        >
          <div className="relative aspect-[7/10] h-[257px] overflow-hidden rounded-[16px] sm:h-[400px]">
            {rank !== undefined && (
              <div className="absolute left-0 top-0 z-10 flex aspect-square w-[20%] max-w-[56px] items-center justify-center rounded-br-[16px] bg-white/50 text-[clamp(16px,4px_+_2vw,24px)] font-bold text-veryDarkPurple/70 backdrop-blur-sm">
                {getNumberWithOrdinal(rank)}
              </div>
            )}
            <Image
              src={product.images[0]?.url || ''}
              alt="product image"
              fill
              sizes="(min-width: 768px) 280px, 180px"
              className={clsx('object-cover transition-all duration-500 will-change-transform', {
                'opacity-0': activeImage !== 'main',
                'opacity-100': activeImage === 'main'
              })}
            />
            <Image
              src={product.images[1]?.url || ''}
              alt="product image"
              fill
              sizes="(min-width: 768px) 280px, 180px"
              className={clsx('object-cover transition-all duration-500 will-change-transform', {
                'opacity-0': activeImage !== 'hover',
                'opacity-100': activeImage === 'hover'
              })}
            />
          </div>
        </a>
        <a href={'/product/' + product.handle}>
          <h3 className="text-center text-[clamp(20px,8px_+_2vw,22px)] font-semibold transition-all duration-300 hover:text-purple">
            {product.title}
          </h3>
        </a>
        <p className="text-[clamp(20px,8px_+_2vw,24px)] text-darkPurple">
          {Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(
            Number(product.priceRange.minVariantPrice.amount)
          )}
        </p>
      </m.article>
    </LazyMotion>
  );
};

export default ProductCard;
