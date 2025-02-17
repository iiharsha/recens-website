import dynamic from "next/dynamic";
import Loading from "@/components/common/Loading";
import HomeHero from "@/components/sections/HomeHero";
import NewArrivals from "@/components/sections/NewArrivals/NewArrivals";


const loading = () => <Loading />

const AboutUs = dynamic(() => import('@/components/sections/AboutUs'), {
  loading
});

const Discounts = dynamic(() => import('@/components/sections/Discounts'), {
  loading
});

export const metadata = {
  description: "Recens - Women's Fashion Wear",
  keywords: [
    'Recens', 'Recens India', 'clothing', 'fashion', 'Calvor',
    'Customized Fashion', 'Dresses', 'Clothes India', 'Women’s Wear',
    'Stylish Dresses', 'Ethnic Wear', 'Western Wear', 'Trendy Clothes'
  ],
  authors: [
    {
      name: 'Recens Team',
      url: 'www.recens.co.in'
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://recens.co.in',
    title: "Recens - Women's Fashion Wear",
    siteName: 'Recens',
    description: 'Recens Fashion Suited To Body'
  },
};

export default function Home() {
  return (
    <main>
      <div className="relative">
        <HomeHero />
        <div className="mt-2 xs:mt-6 md:mt-0 z-10">
          <Discounts />
        </div>
      </div>
      <NewArrivals />
      <AboutUs />
    </main>
  )
}

