// components
import Logo from '@/components/layout/Logo';

const image1010 = "https://ik.imagekit.io/nc0cicxqm/IMG_1010-final_converted.webp?updatedAt=1739556492507";

const HomeVideo = () => {
  return (
    <div className="pointer-events-none relative h-[170px] sm:h-[320px] -top-[60px] sm:-top-[80px] -bottom-[40px] select-none md:h-[calc(100vh_-_80px)]">
      <img
        src={image1010}
        alt="Clothing Shoot"
        className="absolute h-[30vh] sm:h-[50vh] md:h-[100vh] w-full object-cover"
      />
    </div>
  );
};

export default HomeVideo;

