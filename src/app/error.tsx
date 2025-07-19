'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto my-16 flex max-w-xl flex-col items-center justify-center gap-2 min-h-[50vh]">
      <h2 className="text-xl font-bold text-dark">Error!</h2>
      <p className="mt-12 mb-2">
        There was an issue with our storefront. This could be a temporary issue, please try your
        action again.
      </p>
      <button className="bg-dark text-white p-4 font-medium text-[20px] flex items-center justify-center" onClick={() => reset()}>
        RETRY
      </button>
    </div>
  );
}
