import { Suspense } from 'react';
import Loading from '@/components/common/Loading';
import NewArrivalsContent from './NewArrivalsContent';

const NewArrivals = () => {
  return (
    <section className="bg-white w-full mb-8">
      <div className="w-full px-2 sm:px-4 mt-8 mb-6 sm:mb-8">
        <Suspense fallback={<Loading />}>
          <NewArrivalsContent />
        </Suspense>
      </div>
    </section>
  );
};

export default NewArrivals;
