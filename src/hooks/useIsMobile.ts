import { useMediaQuery } from "react-responsive";

const useIsMobile = () => {
    return useMediaQuery({ query: '(max-width: 767px)' });
}

export default useIsMobile;
