'use client';
import { Button } from '@heroui/button';
import { useEffect, useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const ButtonRegister = ({ title, action }: { title: string; action: () => void }) => {
    const [size, setSize] = useState<'sm' | 'lg'>('lg');
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSize('sm');
            } else {
                setSize('lg');
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
    return (
        <Button
            size={size}
            color='primary'
            variant='ghost'
            startContent={<FaArrowAltCircleRight />}
            onPress={action}
        >
            {title}
        </Button>
    );
};
export default ButtonRegister;
