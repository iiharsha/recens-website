import HomeHero from "@/components/sections/HomeHero";
import NewArrivals from "@/components/sections/NewArrivals/NewArrivals";
import AboutUs from "@/components/sections/AboutUs";
import HomePagePics from "@/components/sections/HomePagePics";

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
    title: "Recens - Fashion Wear",
    siteName: 'Recens',
    description: 'Recens Fashion Suited To Body'
  },
};

export default function Home() {
  return (
    <main>
      <HomeHero />
      <NewArrivals />
      <HomePagePics />
      <AboutUs />
    </main>
  )
}

