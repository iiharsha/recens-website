import dynamic from "next/dynamic";

import Loading from "@/components/common/Loading";
const loading = () => <Loading />

import HomeVideo from "@/components/sections/HomeVideo";
import NewArrivals from "@/components/sections/NewArrivals/NewArrivals";

const AboutUs = dynamic(() => import('@/components/sections/AboutUs'), {
  loading
});

const Discounts = dynamic(() => import('@/components/sections/Discounts'), {
  loading
});

export const metadata = {
  description: "Recens - Women's Fashion Wear",
  openGraph: {
    type: 'website'
  },
};

export default function Home() {
  return (
    <>
      <HomeVideo />
      <Discounts />
      <NewArrivals />
      <AboutUs />
    </>
  )
}

