'use client';

import { Product } from '@/lib/shopify/types';
import useIsMobile from '@/hooks/useIsMobile';
import ProductList from './ProductsList';

const NewArrivalsClient = ({ products }: { products: Product[] }) => {
  const isMobile = useIsMobile();
  const limit = isMobile ? 12 : 5;

  return <ProductList products={products.slice(0, limit)} />;
};

export default NewArrivalsClient;

