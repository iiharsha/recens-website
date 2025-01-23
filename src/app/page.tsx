import HomeVideo from "@/components/sections/HomeVideo";
import NewArrivals from "@/components/sections/NewArrivals/NewArrivals";

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
      <NewArrivals />
    </>
  )
}

