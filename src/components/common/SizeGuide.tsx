"use client"

import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function SizeGuide() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sizeData = {
    sizes: [
      { size: "XS", bust: "32", waist: "26", hips: "34" },
      { size: "S", bust: "34", waist: "28", hips: "36" },
      { size: "M", bust: "36", waist: "30", hips: "38" },
      { size: "L", bust: "38", waist: "32", hips: "40" },
      { size: "XL", bust: "40", waist: "34", hips: "42" },
    ],
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-2 bg-none text-center hover:scale-105 transition-all duration-200 ease-in-out flex items-center justify-center gap-2">
          <Image priority src="/images/ruler.svg" width={20} height={20} alt="Size chart icon" />
          Size Chart
        </button>
      </DialogTrigger>
      <DialogContent className="w-screen sm:w-[50vw] h-[50vh] max-w-none max-h-none p-0 border-none shadow-none">
        <DialogHeader>
          <DialogTitle>Size Guide</DialogTitle>
          <DialogDescription>
            Understand the best fit for you through a simple guide.
          </DialogDescription>
        </DialogHeader>
        <div className="fixed inset-0 flex items-center justify-center rounded-lg">
          <div className="bg-white relative rounded-lg p-4 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <DialogClose className="absolute top-2 right-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <X className="w-6 h-6" />
            </DialogClose>
            <h2 className="text-center text-3xl sm:text-2xl font-semibold mb-6">Size Guide</h2>
            <h3 className="text-center text-[15px] font-medium">How to Measure</h3>
            <p className="text-[14px]">
              All you need is a tape measure and these guidelines and you're one step away from your ultimate Recens fit. Once you're all set, grab your tape measure and focus on the following…
            </p>
            <div className="flex flex-col gap-2 text-[12px] p-4">
              <div className="flex gap-2">
                <h3 className="font-semibold">BUST:</h3>
                <p>Wrap the tape measure around your body at the fullest part of your bust.</p>
              </div>
              <div className="flex gap-2">
                <h3 className="font-semibold">WAIST:</h3>
                <p>Wrap around your waist at the narrowest point between your belly button and rib cage.</p>
              </div>
              <div className="flex gap-2">
                <h3 className="font-semibold">HIPS:</h3>
                <p>Place around the widest part of your hips, measuring all the way around.</p>
              </div>
            </div>
            <p className="text-[12px] text-left pb-2">INCHES</p>
            <div className="overflow-x-auto">
              <table className="w-full border border-stone-300">
                <thead className="bg-stone-300">
                  <tr>
                    {["Size", "Bust", "Waist", "Hips"].map((col) => (
                      <th
                        key={col}
                        className="border border-gray-300 px-4 py-2 text-left"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizeData.sizes.map((row, idx) => (
                    <tr key={idx} className="odd:bg-gray-100">
                      {Object.values(row).map((val, i) => (
                        <td key={i} className="border border-gray-300 px-4 py-2">
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-[14px] mt-4">
              Length may vary by product. Please refer to the product details for specific measurements.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog >
  );
}

