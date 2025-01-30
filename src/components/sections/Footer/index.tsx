// components
import Link from "next/link";
import Categories from "./Categories";
import CopyRight from "./CopyRight";
import PaymentMethods from "./PaymentMethods";
import SocialMedia from "./SocialMedia";

const index = () => {
  return (
    <footer className="flex items-center justify-center border-t-[1px] border-stone-500 p-[24px] md:p-[48px] bg-stone-300">
      <h2 className="sr-only">Footer</h2>
      <div className="flex w-full max-w-full flex-col items-start justify-between md:w-[1440px] md:flex-row">
        <Categories />
        <div className="my-8 mx-auto flex flex-col items-center justify-center gap-8 md:my-0">
          <SocialMedia />
          <CopyRight />
          <PaymentMethods />
        </div>
        <div className="flex w-full flex-col items-center justify-center md:w-auto md:items-start md:justify-start">
          <div className="mt-4 flex flex-col items-start justify-start gap-2 md:mt-2">
            <div className="mb-4 flex flex-col gap-4 text-darkPurple md:mb-0 md:flex-row md:pl-[14px]">
              <Link
                href="termsandconditions"
                className="hover-line text-[18px] font-semibold"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
