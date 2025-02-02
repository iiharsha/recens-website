
import Image from 'next/image';

// clsx
import clsx from 'clsx';

const Logo = ({ size, className }: { size: 'sm' | 'lg'; className?: string }) => {
    return (
        <Image
            src="/images/logo-header.webp"
            width="594"
            height="206"
            sizes={size === 'sm' ? '150px' : '288px'}
            className={clsx('w-auto max-w-none', className, {
                'h-[40px] xl:h-[52px]': size === 'sm',
                'h-[64px] md:h-[100px]': size === 'lg'
            })}
            alt="Recens Logo"
            priority
        />
    );
};

export default Logo;
