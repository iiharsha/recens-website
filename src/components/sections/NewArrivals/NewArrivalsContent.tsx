// app/components/NewArrivalsContent.tsx
import { getProducts } from '@/lib/shopify';
import ProductList from './ProductsList';

const NewArrivalsContent = async () => {
  const products = await getProducts({ sortKey: 'CREATED_AT', reverse: true, first: 6 });
  return <ProductList products={products} />;
};

export default NewArrivalsContent;

