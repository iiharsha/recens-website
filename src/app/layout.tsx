import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import dynamic from "next/dynamic";
import { ReactNode, Suspense } from "react";
import Loading from "@/components/common/Loading";
import Header from "@/components/sections/Header";
import { Viewport } from "next";
import { ensureStartsWith } from "@/lib/utils";

// components
const loading = () => <Loading />;
const Footer = dynamic(() => import("@/components/sections/Footer"), {
  loading,
});

// styles
import "@/styles/globals.css";
import { montserrat } from "@/fonts/fonts";

// metadata
const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? "https://recens.co.in"
  : "http://localhost:3000";
const twitterCreator = TWITTER_CREATOR
  ? ensureStartsWith(TWITTER_CREATOR, "@")
  : undefined;
const twitterSite = TWITTER_SITE
  ? ensureStartsWith(TWITTER_SITE, "https://")
  : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
    other: {
      rel: "/",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
  },
};


export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <link rel="canonical" href="https://recens.co.in" key="canonical" />
      </head>
      <body className={`font-mont text-dark bg-white`}>
        {/* Google Tag Manager & Analytics */}
        <GoogleTagManager gtmId="GTM-PWQRW7QQ" />
        <GoogleAnalytics gaId="G-8XGNZRV5GF" />
        <Header />
        <Suspense fallback={<Loading />}>
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>);
}
