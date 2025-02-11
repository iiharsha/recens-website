import Marquee from 'react-fast-marquee';

const Discounts = () => {
  return (
    <div className='bg-veryDarkPurple px-[4px] py-[3px] font-medium text-white md:px-[8px] md:py-[6px] md:text-[18px] backdrop-blur-sm'>
      <Marquee autoFill={true}>
        <div className='ml-[32px] flex items-center justify-center gap-[32px] opacity-70 hover:blur-none transition duration-300'>
          <p>FREE SHIPPING</p>
          <div className='aspect-square w-[2px] rounded-lg bg-white'></div>
        </div>
      </Marquee>
    </div>
  );
};

export default Discounts;

