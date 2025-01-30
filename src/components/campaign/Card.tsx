import type React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white shadow-sm rounded-sm overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
