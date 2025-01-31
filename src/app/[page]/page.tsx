import type { Metadata } from "next";
import { getPage } from "@/lib/shopify";
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
  const pageData = await getPage(page);

  if (!pageData) {
    return notFound();
  }

  return (
    <>
      <h1 className="mb-8 text-center text-[clamp(32px,20px_+_2vw,40px)] font-bold text-darkPurple md:mb-16">
        {pageData.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: pageData.body as string }}
        className="leading-lose text-center text-[18px] text-purple prose-headings:my-8 prose-headings:font-lora prose-headings:text-[clamp(24px,16px_+_2vw,30px)] prose-headings:font-semibold prose-headings:text-darkPurple md:text-left"
      />
      <p className="mt-16 text-sm italic leading-relaxed text-purple md:leading-normal">
        {`This document was last updated on ${new Intl.DateTimeFormat(
          undefined,
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        ).format(new Date(pageData.updatedAt))}.`}
      </p>
    </>
  );
}
