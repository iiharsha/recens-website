import { getCollection, getCollectionProducts } from "@/lib/shopify/queries/collection"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Grid from "@/components/grid"
import ProductGridItems from "@/components/layout/product-grid-items"
import { defaultSort, sorting } from "@/lib/constants"

export const runtime = "nodejs"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ collection: string }>
}): Promise<Metadata> {
    const { collection } = await params
    const collectionData = await getCollection(collection)

    if (!collectionData) return notFound()

    return {
        title: collectionData.seo?.title || collectionData.title,
        description: collectionData.seo?.description || collectionData.description || `${collectionData.title} products`,
    }
}

export default async function CategoryPage({
    params,
    searchParams,
}: {
    params: Promise<{ collection: string }>
    searchParams: Promise<Record<string, string | string[]>>
}) {
    const { collection } = await params;
    const collectionData = await getCollection(collection);
    if (!collectionData) return notFound();
    const sort = (await searchParams).sort as string

    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort

    const products = await getCollectionProducts({
        collection,
        sortKey,
        reverse,
    })

    return (
        <section className="mt-8 md:mt-24">
            {products.length === 0 ? (
                <p className="py-3 text-lg">{`No products found in this collection`}</p>
            ) : (
                <div className="flex flex-col mx-auto gap-[32px]">
                    <div className="space-y-1 flex flex-col items-center justify-center">
                        <h2 className="font-semibold text-[24px] capitalize text-center">
                            {collectionData.title}
                        </h2>
                        {
                            collectionData.description && (
                                <p className="max-w-4xl text-[15px] text-center">
                                    {collectionData.description}
                                </p>
                            )
                        }
                    </div>
                    <Grid className="grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-screen">
                        <ProductGridItems products={products} />
                    </Grid>
                </div>
            )}
        </section>
    )
}
