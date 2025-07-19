import Link from "next/link"

const socialMediaItems = [
  {
    title: "X",
    url: "https://twitter.com/Recens_",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
        <path d="M15.3 9.2 22 2h-1.8l-5.9 6.5L8.6 2H2.6l7.2 10.3L2 22h1.8l6.2-6.8 5.8 6.8h6zM4.4 3.3h3.2L19.6 21h-3.2z" />
      </svg>
    ),
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/recens.co.in",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    title: "Youtube",
    url: "https://www.youtube.com/@recens-rc",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="white">
        <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 V 15 V 21 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21 V 15 V 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 Z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/107774573",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="white">
        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533c2.987,0,3.539,1.966,3.539,4.522V22z" />
      </svg>
    ),
  },
]

const SocialMedia = () => {
  return (
    <div className="flex space-x-4">
      {socialMediaItems.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.title}
          className="hover:text-gray-400 transition-colors"
        >
          {item.svg}
        </Link>
      ))}
    </div>
  )
}

export default SocialMedia

