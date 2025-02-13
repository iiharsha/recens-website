'use client'
<<<<<<< HEAD

import { useRouter } from "next/navigation";
import { Tenor_Sans } from "next/font/google";

=======
import { useRouter } from "next/navigation";
import { Tenor_Sans } from "next/font/google";
>>>>>>> testbranch1
// Load the Tenor Sans font
const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
<<<<<<< HEAD

export default function GlobalError() {
  const router = useRouter();

=======
export default function GlobalError() {
  const router = useRouter();
>>>>>>> testbranch1
  return (
    <html lang="en">
      <body className={`flex items-center justify-center min-h-screen bg-white text-gray-900 ${tenorSans.className}`}>
        <div className="mx-auto my-16 flex max-w-xl flex-col gap-2 min-h-[50vh] text-center">
          <h2 className="text-2xl font-bold text-black">Error!</h2>
          <p className="my-2 text-black text-lg">
            There was an issue with our storefront. Please try your action again or return to the Home Screen.
          </p>
          <div className="flex gap-4 mt-4">
            <button
              className="bg-black rounded-lg px-6 py-3 text-white font-semibold text-md flex items-center justify-center"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
            <button
              className="bg-black rounded-lg px-6 py-3 text-white font-semibold text-md flex items-center justify-center"
              onClick={() => window.location.href = '/'}
            >
              Go to Home Page
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
<<<<<<< HEAD


=======
>>>>>>> testbranch1
