'use client';

// React
import { FC } from 'react';

const Loading: FC = () => {
  return (
    <div className="flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
};

const LoadingSpinner: FC = () => {
  return (
    <svg
      className="inline-block animate-spin"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="M12 2v4m0 12v4m10-10h-4M6 12H2m3.343-5.657L4.929 4.929m12.728 12.728 1.414 1.414"
        className="opacity-75"
      />
      <path
        d="M12 2a10 10 0 1 0 10 10"
        className="text-white/30"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Loading;

