import { TAGS } from "@/lib/constants";
import { shopifyFetch } from "../fetch/client";
import { getMenuQuery } from "../graphql/queries/menu";
import { Menu, ShopifyMenuOperation } from "../types/menu";
import { domain } from "../fetch/config";

export async function getMenu(handle: string): Promise<Menu[]> {
  const res = await shopifyFetch<ShopifyMenuOperation>({
    query: getMenuQuery,
    tags: [TAGS.collections],
    variables: {
      handle,
    },
  });

  return (
    res.body?.data?.menu?.items.map(
      (item: {
        title: string;
        url: string;
        items: { title: string; url: string }[];
      }) => ({
        title: item.title,
        path: item.url
          .replace(domain, "")
          .replace("/collections", "/search")
          .replace("/pages", ""),
        items: item.items.map((item) => ({
          title: item.title,
          path: item.url
            .replace(domain, "")
            .replace("/collections", "/search")
            .replace("/pages", ""),
        })),
      }),
    ) || []
  );
}
