// shopify
import { getProductRecommendations } from '@/lib/shopify';

// components
import ProductCard from '@/components/product/ProductCard';
import { tenorsans } from '@/fonts/fonts';

const RecommendedItems = async ({ productId }: { productId: string }) => {
  const products = await getProductRecommendations(productId);
  return (
    <div className="flex w-full items-center justify-center py-[48px]">
      <div className="flex max-w-full flex-col items-center justify-center gap-[48px] md:w-[904px]">
        <h2 className={` ${tenorsans.variable} font-tenor w-full text-center font-semibold text-3xl text-[clamp(28px,20px_+_2vw,40px)] font-medium md:text-left`}>
          Recommended
        </h2>
        <div className="grid w-full grid-cols-2 items-start justify-center gap-x-[4px] gap-y-[16px] xs:gap-x-[16px] md:gap-[32px] lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} delay={i * 0.5} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedItems;
