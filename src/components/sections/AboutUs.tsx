const AboutUs = () => {
  return (
    <section className="relative overflow-hidden border-t-[1px] border-tertiary bg-tertiary py-[48px] md:py-[64px]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-1/4 w-24 h-24 border border-tertiary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 border border-tertiary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-tertiary rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative flex items-center justify-center">
        <h2 className="sr-only">About</h2>

        <div className="flex max-w-[95%] flex-col items-center justify-center gap-[32px] text-center md:max-w-[700px]">
          {/* Enhanced heading with modern styling */}
          <div className="relative space-y-4">
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            <h3 className="text-[clamp(28px,18px_+_2vw,40px)] font-semibold text-dark leading-tight tracking-tight">
              Perfect blend of{" "}
              <span className="relative inline-block">
                Modern Stylish Fashion
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/30 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </span>{" "}
              suited to your Body.
            </h3>
          </div>

          {/* Enhanced description with modern card-like treatment */}
          <div className="relative max-w-[90%] md:max-w-none group">
            <div className="absolute -inset-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <p className="relative text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-relaxed text-primary md:leading-normal px-6 py-4 transition-all duration-300">
              We strive to create pieces that are both{" "}
              <span className="relative text-dark font-bold">unique and timeless</span> and take pride in offering
              high-quality clothing that is both{" "}
              <span className="relative text-dark font-bold">comfortable and stylish</span>.
            </p>
          </div>

          {/* Modern button with enhanced styling */}
          <div className="mt-2 relative group">
            <div className="absolute -inset-2 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <a
              href="/aboutus"
              className="bg-dark text-white relative inline-flex items-center gap-3 text-[18px] px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 font-medium">About Us</span>
              <svg
                className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Modern decorative elements */}
          <div className="flex items-center gap-2 mt-4 opacity-30">
            <div className="w-8 h-px bg-primary"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-8 h-px bg-primary"></div>
          </div>
        </div>
      </div>

      {/* Modern bottom accent */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
    </section>
  )
}

export default AboutUs

