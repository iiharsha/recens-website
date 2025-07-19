// components
import Grid from '@/components/grid';
import ProductCard from '../product/ProductCard';

// types
import { Product } from '@/lib/shopify/types';

export default function ProductGridItems({ products }: { products: Product[] }) {
    return (
        <>
            {products.map((product, i) => (
                <Grid.Item key={product.handle}>
                    <ProductCard product={product} delay={(i % 4) * 0.4} />
                </Grid.Item>
            ))}
        </>
    );
}
