import Link from "next/link";
import Help from "./Help";
import CopyRight from "./CopyRight";
import PaymentMethods from "./PaymentMethods";
import SocialMedia from "./SocialMedia";
import MoreRecens from "./MoreRecens";
import Logo from "@/components/layout/LogoHeader";

const Footer = () => {
  return (
    <footer className="bg-dark py-12 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Logo Section */}
        <div className="mb-8 flex justify-center">
          <Link href="/" className="inline-block">
            <Logo size="sm" variant="white" />
          </Link>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 text-center md:text-left">
          {/* Help */}
          <div>
            <h3 className="text-[18px] font-bold text-primary mb-4">Help</h3>
            <Help />
          </div>

          {/* More Recens */}
          <div>
            <h3 className="text-[18px] font-bold text-primary mb-4">More Recens</h3>
            <MoreRecens />
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-[18px] font-bold text-primary mb-4">Follow Us</h3>
            <div className="flex items-center justify-center">
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-12 pt-8 border-t border-secondary">
          <div className="flex md:space-x-4 gap-2 justify-center">
            <Link
              href="/termsandconditions"
              className="underline text-tertiary hover:text-secondary transition-colors mb-2 md:mb-0"
            >
              {`Terms & Conditions`}
            </Link>
            <div className="mx-4 mt-3 w-1 h-1 bg-tertiary rounded-full"></div>
            <Link
              href="/privacypolicy"
              className="underline text-tertiary hover:text-secondary transition-colors mb-2 md:mb-0"
            >
              {`Privacy Policy`}
            </Link>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 pt-8 border-t border-secondary md:flex-row">
          <CopyRight />
          <PaymentMethods />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

