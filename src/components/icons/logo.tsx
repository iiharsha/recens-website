import { Tenor_Sans, Montserrat } from 'next/font/google';

const tenorSans = Tenor_Sans({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-tenor',
    preload: true, // Preloads the font
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-montserrat',
    preload: true, // Preloads the font
});

export default function Logo() {
    return (
        <div className={`flex flex-col items-center justify-center ${tenorSans.variable} ${montserrat.variable}`}>
            <div className="font-tenor text-3xl font-bold tracking-wider">
                RECENS
            </div>
            <div className="font-montserrat text-sm tracking-wide mt-1">
                One of A Kind
            </div>
        </div>
    );
}

