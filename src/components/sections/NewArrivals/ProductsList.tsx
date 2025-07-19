'use client';
import { Product } from '@/lib/shopify/types';
import NewArrivalsProductCard from './ProductCard';
import useIsMobile from '@/hooks/useIsMobile';
import ProductListSwiper from './ProductListSwiper';

const ProductList = ({ products }: { products: Product[] }) => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full">
      {isMobile ? (
        <ProductListSwiper products={products} />
      ) : (
        <div className="grid gap-1"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 2fr))' }}>
          {products.map((product, i) => (
            <NewArrivalsProductCard key={product.id || i} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;


