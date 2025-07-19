import Grid from "@/components/grid"
import ProductGridItems from "@/components/layout/product-grid-items"
import FilterList from "@/components/layout/search/filter"
import { defaultSort, sorting } from "@/lib/constants"
import { getProducts } from "@/lib/shopify/queries/product"

export const runtime = "nodejs"

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const { sort, q: searchValue } = params as { [key: string]: string }
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort

  const products = await getProducts({ sortKey, reverse, query: searchValue })
  const resultsText = products.length > 1 ? "results" : "result"

  return (
    <>
      <div className="mt-[70px] flex flex-col">
        {searchValue ? (
          <p className="mb-2 mx-4">
            {products.length === 0
              ? "There are no products that match "
              : `Showing ${products.length} ${resultsText} for `}
            <span className="font-bold">&quot;{searchValue}&quot;</span>
          </p>
        ) : null}


        <div className="flex items-center justify-center border border-dark/80 mx-4">
          <FilterList list={sorting} title="Filter" />
        </div>
        {products.length > 0 ? (
          <Grid className="grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-screen px-4 mt-4">
            <ProductGridItems products={products} />
          </Grid>
        ) : null}
      </div>
    </>
  )
}


