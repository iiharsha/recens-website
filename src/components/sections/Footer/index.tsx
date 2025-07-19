import Link from "next/link";
import FooterMenu from "./FooterMenu";
import CopyRight from "./CopyRight";
import SocialMedia from "./SocialMedia";
import Logo from "@/components/layout/LogoHeader";
import { getMenu } from "@/lib/shopify/queries/menu";

const Footer = async () => {
  const helpmenu = await getMenu("footer");
  const morerecens = await getMenu("more-recens");
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
            <h3 className="text-[15px] font-medium text-primary mb-2">Help</h3>
            <FooterMenu menu={helpmenu} />
          </div>

          {/* More Recens */}
          <div>
            <h3 className="text-[15px] font-medium text-primary mb-2">More Recens</h3>
            <FooterMenu menu={morerecens} />
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-[15px] font-medium text-primary mb-4">Follow Us</h3>
            <div className="flex items-center justify-center">
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-12 pt-4 border-t border-secondary/40">
          <div className="flex md:space-x-4 gap-1 justify-center">
            <Link
              href="/termsofservice"
              className="underline text-tertiary hover:text-secondary transition-colors mb-2 md:mb-0"
            >
              {`Terms`}
            </Link>
            <div className="mx-4 mt-3 w-1 h-1 bg-tertiary rounded-full"></div>
            <Link
              href="/privacypolicy"
              className="underline text-tertiary hover:text-secondary transition-colors mb-2 md:mb-0"
            >
              {`Privacy`}
            </Link>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="mt-4 flex flex-col items-center justify-between gap-6 pt-4 border-t border-secondary/40 md:flex-row">
          <CopyRight />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

