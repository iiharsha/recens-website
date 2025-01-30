import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { ReactNode, Suspense } from "react";
import Loading from "@/components/common/Loading";
import Header from "@/components/sections/Header";
const loading = () => <Loading />;

// components
const Footer = dynamic(() => import("@/components/sections/Footer"), {
  loading,
});

// utils
import { ensureStartsWith } from "@/lib/utils";

// styles
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

// metadata
const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? "https://recens.co.in"
  : "http://localhost:3000";
const twitterCreator = TWITTER_CREATOR
  ? ensureStartsWith(TWITTER_CREATOR, "@")
  : undefined;
const twitterSite = TWITTER_SITE
  ? ensureStartsWith(TWITTER_SITE, "https://")
  : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl || 'http://localhost:3000'),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  ...(twitterCreator &&
    twitterSite && {
    twitter: {
      card: "summary_large_image",
      creator: twitterCreator,
      site: twitterSite,
      images: "/images/screenshots/home.webp",
    },
  }),
  icons: { icon: "/favicon.png" },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
