'use client';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer({ ismobile }: { ismobile: boolean }) {
    const [flex_D, setFlex_D] = useState('flex-row');
    useEffect(() => {
        if (ismobile) {
            setFlex_D('flex-col');
        } else {
            setFlex_D('flex-row');
        }
    }, []);
    return (
        <footer className='bg-gray-900 text-white py-6 '>
            <div className={`max-w-7xl mx-auto flex ${flex_D} justify-between items-center gap-4`}>
                <div>
                    <p className='text-sm'>
                        Desenvolvido pela <strong className='mr-2'>LinkMe Tur &copy;</strong> CNPJ:
                        52376877/0001-85
                    </p>
                </div>

                <div className='flex justify-center items-start '>
                    <div>
                        <FaWhatsapp className='text-green-500 text-xl ' />
                    </div>
                    <p className='ml-2 text-sm'>
                        WhatsApp: <a href='https://wa.me/5599457402'>(55) 99457-402</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
