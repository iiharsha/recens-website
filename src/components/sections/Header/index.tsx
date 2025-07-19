import Cart from '@/components/cart';
import OpenCart from '@/components/cart/open-cart';
import { Suspense } from 'react';
import HeaderWrapper from './HeaderWrapper';

const Header = async () => {

    return (
        <HeaderWrapper>
            <h1 className="sr-only">Recens</h1>
            <Suspense fallback={<OpenCart />}>
                <Cart />
            </Suspense>
        </HeaderWrapper >
    );
};

export default Header;

