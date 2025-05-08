'use client';
import { useEffect, useState } from 'react';
import LpMobile from './components/lp/lp-mobile';
import LpDesk from './components/lp/lp-desk';
import AppBar from '@/app/components/appbar/appbar';

const LandingPage = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isWidth, setIsWidth] = useState<number>(0);
    useEffect(() => {
        setIsWidth(window.innerWidth);
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
    return (
        <>
            <AppBar />
            {isWidth <= 768 || isMobile ? <LpMobile /> : <LpDesk />}
        </>
    );
};

export default LandingPage;
