import { SHOPIFY_GRAPHQL_API_ENDPOINT } from "@/lib/constants";
import { ensureStartsWith } from "@/lib/utils";

export const domain = process.env.SHOPIFY_STORE_DOMAIN
  ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, "https://")
  : "";

export const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
export const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
