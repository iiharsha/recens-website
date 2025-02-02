import CollectionCards from "@/components/campaign/CollectionCards";
import { Metadata } from "next";
import { tenorsans } from "@/fonts/fonts";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Campaign",
    description: "Our latest and upcoming clothing drops",
    keywords: ["drops", "recens", "campaign", "collection"],
  };
}


export default function Campaign() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1
          className={`${tenorsans.variable} font-tenor sm:text-4xl text-3xl sm:text-5xl md:text-5xl`}
        >
          The Ultimate Recens Collection
        </h1>
        <p className="text-xl">Invest in your wardrobe</p>
      </div>
      <CollectionCards />
    </div>
  );
}
