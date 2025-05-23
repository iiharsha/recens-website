import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { ReactNode, Suspense } from "react";
import Loading from "@/components/common/Loading";
import Header from "@/components/sections/Header";
import { getMenu } from "@/lib/shopify";
import Head from "next/head";
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
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <head>
        <link rel="canonical" href="https://recens.co.in" key="canonical" />
      </head>
      <body className={`${montserrat.className} bg-[#FFFFFF]`}>
        {/* Google Tag Manager & Analytics */}
        <GoogleTagManager gtmId="GTM-PWQRW7QQ" />
        <GoogleAnalytics gaId="G-8XGNZRV5GF" />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '540342605090965');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=540342605090965&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
        {/* End Meta Pixel Code */}

        <Suspense fallback={<Loading />}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Suspense>
      </body>
    </html>);
}
