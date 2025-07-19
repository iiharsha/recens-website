import { Pagination, A11y, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Product } from '@/lib/shopify/types';
import ProductCard from './ProductCard';

interface ProductListSwiperProps {
  products: Product[];
}

export default function ProductListSwiper({ products }: ProductListSwiperProps) {
  const swiperSettings = {
    modules: [Pagination, A11y, Scrollbar],
    slidesPerView: 1.5,
    spaceBetween: 12,
    centeredSlides: false,
    centerInsufficientSlides: true,
    speed: 300,
    className: 'pb-2',
  };

  return (
    <div className="relative px-4">
      <Swiper {...swiperSettings}>
        {products.map((product, i) => (
          <SwiperSlide key={product.id || i} className="h-auto">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

