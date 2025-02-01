"use client"

import type { FC } from "react"

const Loading: FC = () => {
  return (
    <div className="flex items-center justify-center">
      <LoadingSpinner />
    </div>
  )
}

const LoadingSpinner: FC = () => {
  return (
    <svg className="inline-block" width="32" height="32" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="rgba(0,0,0,0.2)" strokeWidth="3" fill="none" />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="16 44"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="12"
        cy="12"
        r="6"
        stroke="rgba(0,0,0,0.6)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="10 28"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="-360 12 12"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}

export default Loading


