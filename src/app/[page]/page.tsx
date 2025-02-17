import type { Metadata } from "next";
import { getPage } from "@/lib/shopify";
import { notFound } from "next/navigation";
import { tenorsans } from "@/fonts/fonts";

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
      <h1 className={`${tenorsans.variable} mb-8 text-center text-[clamp(32px,20px_+_2vw,40px)] font-tenor font-bold text-dark md:mb-16`}>
        {pageData.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: pageData.body as string }}
        className={`${tenorsans.variable} leading-lose text-center text-[16px] text-black prose-headings:my-4 prose-headings:font-tenor prose-headings:text-[clamp(20px,16px_+_2vw,20px)] prose-headings:font-semibold prose-headings:text-black md:text-left`}
      />
      <p className="mt-16 text-sm italic leading-relaxed text-dark md:leading-normal">
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
