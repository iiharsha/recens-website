import { Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <>
      <div className="transition-all duration-300 text-dark">
        <div className="flex items-center gap-2 text-[16px]">
          <span className="font-normal">Email</span>
          <Mail width={22} height={22} />
          <a
            href="mailto:recens.co.in@gmail.com"
            className="font-medium hover:text-purple-700 transition-colors duration-200 sm:border-none hover-line border-b border-gray-900 hover:border-gray-700"
          >
            recens.co.in@gmail.com
          </a>
        </div>
      </div>

      {/* Instagram Contact */}
      <div>
        <div className="flex items-center gap-2">
          <span className="font-normal text-[16px] text-gray-700">
            DM
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>

          <a
            href="https://www.instagram.com/recens.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-900 hover:text-purple-700 transition-colors duration-200 sm:border-none hover-line border-b border-gray-900 hover:border-gray-700"
          >
            @recens.co.in
          </a>
        </div>
      </div>
    </>
  )
}

