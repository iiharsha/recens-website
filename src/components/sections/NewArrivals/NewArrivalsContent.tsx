// app/components/NewArrivalsContent.tsx
import { getProducts } from '@/lib/shopify/queries/product';
import NewArrivalsClient from './NewArrivalsClient';

const NewArrivalsContent = async () => {
  const products = await getProducts({ sortKey: 'CREATED_AT', reverse: true, first: 12 });
  return <NewArrivalsClient products={products} />;
};

export default NewArrivalsContent;

