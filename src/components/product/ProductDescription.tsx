'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
// react
import { useMemo } from 'react';

// components
import { AddToCart } from '../cart/add-to-cart';

// types
import { Product } from '@/lib/shopify/types';
import { useSearchParams } from 'next/navigation';
import { VariantSelector } from './VariantSelector';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SizeGuide from '../common/SizeGuide';
import { tenorsans } from "@/fonts/fonts";

export type Combination = {
  id: string;
  availableForSale: boolean;
  price: string;
  [key: string]: string | boolean;
};

const ProductDescription = ({ product }: { product: Product }) => {
  const searchParams = useSearchParams();

  const combinations: Combination[] = useMemo(
    () =>
      product.variants.map((variant) => ({
        id: variant.id,
        availableForSale: variant.availableForSale,
        price: variant.price.amount,
        ...variant.selectedOptions.reduce(
          (accumulator, option) => ({ ...accumulator, [option.name.toLowerCase()]: option.value }),
          {}
        )
      })),
    [product.variants]
  );

  // set price of current combination
  const tempSearchParams = new URLSearchParams(searchParams);
  const currentCombinationPrice = combinations.find((comb) => {
    for (const key in comb) {
      if (
        key !== 'id' &&
        key !== 'price' &&
        key !== 'availableForSale' &&
        (!tempSearchParams.get(key) || tempSearchParams.get(key) !== comb[key])
      )
        return false;
    }
    return true;
  })?.price;

  const price = currentCombinationPrice || product.priceRange.minVariantPrice.amount;

  return (
    <div className="sticky top-1 flex flex-col items-start justify-start gap-4 px-6 text-darkPurple">
      <h2 className={`${tenorsans.variable} hidden text-[clamp(28px,18px_+_2vw,40px)] font-tenor leading-[1] md:block`}>
        {product.title}
      </h2>
      <p className="text-[18px] flex flex-col">
        {`RS. ${Intl.NumberFormat("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          useGrouping: true,
        }).format(Number(price))}`}
        <span className="text-[10px] text-gray-600">Tax Included</span>
      </p>

      <div className="h-[1px] w-full bg-purple"></div>
      <SizeGuide />
      <VariantSelector options={product.options} combinations={combinations} />
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="1" className="border-none m-2">
            <AccordionTrigger className="text-[18px] font-normal">
              DETAILS
            </AccordionTrigger>
            <AccordionContent className="text-[6px]">
              <div
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml as string }}
                className="text-[14px]"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="my-2 h-[1px] w-full bg-purple"></div>
      <div className="w-full">
        <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      </div>
    </div>
  );
};

export default ProductDescription;

