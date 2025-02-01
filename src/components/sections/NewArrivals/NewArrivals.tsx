import { Suspense } from 'react';
import Loading from '@/components/common/Loading';
import NewArrivalsContent from './NewArrivalsContent';

const NewArrivals = () => {
  return (
    <section className="flex w-full items-center justify-center pb-[48px] pt-[24px] md:pt-[48px]">
      <div className="flex flex-col items-center justify-center gap-[24px] sm:max-w-[95%] md:w-[904px] md:gap-[48px]">
        <h2 className="w-full text-center font-lora text-[clamp(28px,20px_+_2vw,40px)] font-medium text-veryDarkPurple md:text-left">
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

