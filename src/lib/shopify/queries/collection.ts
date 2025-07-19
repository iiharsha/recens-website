import { TAGS } from "@/lib/constants";
import { getCollectionProductsQuery, getCollectionQuery, getCollectionsQuery } from "../graphql/queries/collection";
import { Collection, ShopifyCollectionOperation, ShopifyCollectionProductsOperation, ShopifyCollectionsOperation } from "../types/collection";
import { shopifyFetch } from "../fetch/client";
import { reshapeCollection, reshapeCollections } from "../reshapers/collection";
import { Product } from "../types/product";
import { reshapeProducts } from "../reshapers/product";
import { removeEdgesAndNodes } from "../reshapers/common";

export async function getCollection(
  handle: string,
): Promise<Collection | undefined> {
  const res = await shopifyFetch<ShopifyCollectionOperation>({
    query: getCollectionQuery,
    tags: [TAGS.collections],
    variables: {
      handle,
    },
  });

  return reshapeCollection(res.body.data.collection);
}

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey,
  first = 30,
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
  first?: number;
}): Promise<Product[]> {
  const maxRetries = 5;
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      const res = await shopifyFetch<ShopifyCollectionProductsOperation>({
        query: getCollectionProductsQuery,
        tags: [TAGS.collections, TAGS.products],
        variables: {
          handle: collection,
          reverse,
          sortKey: sortKey === "CREATED_AT" ? "CREATED" : sortKey,
          first,
        },
      });

      if (!res.body.data.collection) {
        console.log(`No collection found for \`${collection}\``);
        return [];
      }

      const products = res.body.data.collection.products;
      if (!products) {
        return [];
      }

      return reshapeProducts(removeEdgesAndNodes(products));

    } catch (error) {
      attempt++;
      console.error(`Attempt ${attempt} failed to fetch products for collection "${collection}":`, error);

      if (attempt >= maxRetries) {
        console.error(`All ${maxRetries} attempts failed for collection "${collection}".`);
        return [];
      }

      // Optional: delay between retries (e.g., exponential backoff)
      await new Promise(res => setTimeout(res, 500 * attempt));
    }
  }

  return [];
}

export async function getCollections(): Promise<Collection[]> {
  const res = await shopifyFetch<ShopifyCollectionsOperation>({
    query: getCollectionsQuery,
    tags: [TAGS.collections],
  });
  const shopifyCollections = removeEdgesAndNodes(res.body?.data?.collections);
  const collections = [
    {
      handle: "",
      title: "All",
      description: "All products",
      seo: {
        title: "All",
        description: "All products",
      },
      path: "/search",
      updatedAt: new Date().toISOString(),
    },
    // Filter out the `hidden` collections.
    // Collections that start with `hidden-*` need to be hidden on the search page.
    ...reshapeCollections(shopifyCollections).filter(
      (collection) => !collection.handle.startsWith("hidden"),
    ),
  ];

  return collections;
}
