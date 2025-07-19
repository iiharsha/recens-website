import type { Metadata } from "next";
import { getPage } from "@/lib/shopify/queries/page";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    page: string;
  }>;
};

export const runtime = "nodejs";
export const revalidate = 43200;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { page } = await params;
  const pageData = await getPage(page);

  if (!pageData) {
    return {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  return {
    title: pageData.seo?.title || pageData.title,
    description: pageData.seo?.description || pageData.bodySummary,
    openGraph: {
      publishedTime: pageData.createdAt,
      modifiedTime: pageData.updatedAt,
      type: "article",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { page } = await params;
  const pageDecoded = decodeURIComponent(page);
  const pageData = await getPage(pageDecoded);

  if (!pageData) {
    return notFound();
  }

  return (
    <>
      <h1 className="mb-8 text-left text-xl sm:text-2xl font-medium md:mb-16">
        {pageData.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: pageData.body as string }}
        className="leading-6 text-center text-[16px] prose-headings:my-4 prose-headings:font-mont prose-headings:text-[18px] prose-headings:font-medium prose-headings:text-black md:text-left"
      />
      <p className="mt-16 text-[16px] italic leading-relaxed md:leading-normal">
        {`This document was last updated on ${new Intl.DateTimeFormat(
          undefined,
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        ).format(new Date(pageData.updatedAt))}.`}
      </p >
    </>
  );
}
