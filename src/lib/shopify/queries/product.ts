import { TAGS } from "@/lib/constants";
import { getProductQuery, getProductRecommendationsQuery, getProductsQuery } from "../graphql/queries/product";
import { Product, ShopifyProductOperation, ShopifyProductRecommendationsOperation, ShopifyProductsOperation } from "../types/product";
import { shopifyFetch } from "../fetch/client";
import { removeEdgesAndNodes } from "../reshapers/common";
import { reshapeProduct, reshapeProducts } from "../reshapers/product";

export async function getProduct(handle: string): Promise<Product | undefined> {
  try {
    const res = await shopifyFetch<ShopifyProductOperation>({
      query: getProductQuery,
      tags: [TAGS.products],
      variables: {
        handle,
      },
    });

    if (!res.body.data.product) {
      console.log('No product for handle: ${handle}');
      return undefined;
    }

    return reshapeProduct(res.body.data.product, false);
  } catch (error) {
    console.error('Error fetching product: ${handle}');
    return undefined;
  }
}

export async function getProductRecommendations(productId: string, first = 4): Promise<Product[]> {
  try {
    const res = await shopifyFetch<ShopifyProductRecommendationsOperation>({
      query: getProductRecommendationsQuery,
      tags: [TAGS.products],
      variables: {
        productId,
      },
    });

    const recommendations = res.body.data?.productRecommendations;
    if (!recommendations || !Array.isArray(recommendations)) {
      console.warn('No recommendations found for product: ${productId}');
      return [];
    }

    return reshapeProducts(res.body.data.productRecommendations.slice(0, first));
  } catch (error) {
    console.error('Error fetching shopify recommendations:', error);
    return [];
  }
}

export async function getProducts({
  query,
  reverse,
  sortKey,
  first = 50,
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
  first?: number;
}): Promise<Product[]> {
  const res = await shopifyFetch<ShopifyProductsOperation>({
    query: getProductsQuery,
    tags: [TAGS.products],
    variables: {
      query,
      reverse,
      sortKey,
      first,
    },
  });

  return reshapeProducts(removeEdgesAndNodes(res.body.data.products));
}

