// shopify
import { getProductRecommendations } from '@/lib/shopify/queries/product';

// components
import ProductCard from '@/components/product/ProductCard';

const RecommendedItems = async ({ productId }: { productId: string }) => {
  const products = await getProductRecommendations(productId);

  if (products.length === 0) return null;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 mt-12">
      <div className="mx-auto w-full max-w-[1440px] flex flex-col items-center space-y-6">
        <h2 className="text-center text-[24px] font-medium font-mont">
          You may also like
        </h2>
        <div className="grid w-full max-w-6xl grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
          {products.map((product, i) => (
            <ProductCard key={product.handle} product={product} delay={i * 0.6} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedItems;

