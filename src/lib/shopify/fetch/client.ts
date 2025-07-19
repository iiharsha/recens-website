import { isShopifyError } from "@/lib/typeguards";
import { endpoint, key } from "./config";

type ExtractVariables<T> = T extends { variables: object }
  ? T["variables"]
  : never;

interface ShopifyFetchOptions<T> {
  cache?: RequestCache;
  headers?: HeadersInit;
  query: string;
  tags?: string[];
  variables?: ExtractVariables<T>;
}

interface ShopifyResponse<T> {
  status: number;
  body: T;
}

export async function shopifyFetch<T>({
  cache = "force-cache",
  headers,
  query,
  tags,
  variables,
}: ShopifyFetchOptions<T>): Promise<ShopifyResponse<T> | never> {

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(tags && { next: { tags } }),
    });

    const body = await result.json();

    if (body.errors) {
      console.error('Fetch errors:', body.errors)
      throw body.errors[0];
    }

    return {
      status: result.status,
      body,
    };
  } catch (e) {
    if (isShopifyError(e)) {
      throw {
        cause: e.cause?.toString() || "unknown",
        status: e.status || 500,
        message: e.message,
        query,
      };
    }
    throw {
      error: e,
      query,
    }
  }
}
