import Link from "next/link"
import Help from "./Help"
import CopyRight from "./CopyRight"
import PaymentMethods from "./PaymentMethods"
import SocialMedia from "./SocialMedia"
import MoreRecens from "./MoreRecens"
import Logo from "@/components/layout/Logo"

const Footer = () => {
  return (
    <footer className="bg-stone-300 py-12 px-4 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="inline-block">
              <Logo size="lg" />
            </Link>
          </div>

          {/* Help */}
          <div className="mb-4 md:mb-0">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Help</h3>
              <span className="text-gray-600 cursor-pointer ml-2"></span>
            </div>
            <div>
              <Help />
            </div>
          </div>

          {/* More Recens */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">More Recens</h3>
            <div>
              <MoreRecens />
            </div>
          </div>

          {/* Follow Us */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div>
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-12 pt-8 border-t border-stone-400">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">Legal</h3>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <Link
              href="/termsandconditions"
              className="underline text-gray-600 hover:text-gray-900 transition-colors mb-2 md:mb-0"
            >
              Terms & Conditions
            </Link>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <Link href="/privacypolicy"
              className="underline text-gray-600 hover:text-gray-900 transition-colors mb-2 md:mb-0">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 pt-8 border-t border-stone-400 md:flex-row">
          <CopyRight />
          <PaymentMethods />
        </div>
      </div>
    </footer>
  )
}

export default Footer

