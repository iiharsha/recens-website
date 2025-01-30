import { getCollection, getCollectionProducts } from "@/lib/shopify"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Grid from "@/components/grid"
import ProductGridItems from "@/components/layout/product-grid-items"
import { defaultSort, sorting } from "@/lib/constants"
import { notEqual } from "assert"
import { tenorsans } from "@/fonts/fonts"

export const runtime = "edge"

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
        <section>
            {products.length === 0 ? (
                <p className="py-3 text-lg">{`No products found in this collection`}</p>
            ) : (
                <div className="flex flex-col items-center justify-center gap-[48px]">
                    <div className="space-y-4">
                        <h2 className={`${tenorsans.variable} text-3xl capitalize font-tenor`}>
                            {collectionData.title}
                        </h2>
                        {
                            collectionData.description && (
                                <p className="max-w-4xl text-lg text-neutral-700">
                                    {collectionData.description}
                                </p>
                            )
                        }
                    </div>
                    <Grid className="grid-cols-1 items-start justify-center sm:grid-cols-2 lg:grid-cols-3">
                        <ProductGridItems products={products} />
                    </Grid>
                </div>
            )}
        </section>
    )
}


