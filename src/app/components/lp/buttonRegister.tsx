'use client';
import { Button } from '@heroui/button';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const ButtonRegister = ({ title, action }: { title: string; action: () => void }) => {
    return (
        <Button
            size='lg'
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
