const AboutUs = () => {
  return (
    <section className="flex items-center justify-center border-t-[1px] border-tertiary bg-tertiary py-[48px] md:py-[64px]">
      <h2 className="sr-only">About</h2>
      <div className="flex max-w-[95%] flex-col items-center justify-center gap-[32px] text-center md:max-w-[700px]">
        <h3 className="text-[clamp(28px,18px_+_2vw,40px)] font-semibold text-dark">
          Perfect blend of Modern Stylish Fashion suited to your Body.
        </h3>
        <p className="max-w-[90%] text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-relaxed text-primary md:max-w-none md:leading-normal">
          We strive to create pieces that are both unique and timeless and take pride in offering
          high-quality clothing that is both comfortable and stylish.
        </p>
        <a href="/aboutus" className="btn-very-dark mt-2 text-[clamp(18px,10px_+_2vw,22px)]">
          About Us
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
