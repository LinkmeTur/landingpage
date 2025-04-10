'use client';
import { useEffect, useState } from 'react';
import LpMobile from './lp-mobile';
import LpDesk from './lp-desk';

const LandingPage = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (window.innerWidth <= 768 || isMobile) {
        return <LpMobile />;
    }
    return <LpDesk />;
};

export default LandingPage;
