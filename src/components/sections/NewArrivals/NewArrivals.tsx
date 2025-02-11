// app/components/NewArrivals.tsx
import { Suspense } from 'react';
import Loading from '@/components/common/Loading';
import NewArrivalsContent from './NewArrivalsContent';
import { tenorsans } from '@/fonts/fonts';

const NewArrivals = () => {
  return (
    <section className="flex w-full items-center justify-center pb-[48px] pt-[4px] md:pt-[8px]">
      <div className="flex flex-col items-center justify-center gap-[12px] sm:max-w-[95%] md:w-[904px] md:gap-[15px]">
        <h2 className={`${tenorsans.variable} w-full text-center font-tenor text-[clamp(28px,20px_+_2vw,40px)] font-medium text-veryDarkPurple md:text-left`}>
          New Arrivals
        </h2>
        <Suspense fallback={<Loading />}>
          <NewArrivalsContent />
        </Suspense>
      </div>
    </section>
  );
};

export default NewArrivals;

