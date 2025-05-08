'use client';
// import { usePathname, useSearchParams } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Form, Input, Button } from '@heroui/react';
import { formatPhone } from '@/app/functions/formatPhone';
import Image from 'next/image';
export default function Signin() {
    // const pathname = usePathname();
    // const searchParams = useSearchParams();
    // useEffect(() => {}, [pathname, searchParams]);
    const [inputValue, setInputValue] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState<{
        [k: string]: FormDataEntryValue;
    } | null>(null);
    const [errors, setErrors] = useState({});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (!isNaN(Number(value.replace(/[^a-zA-Z0-9]/g, ''))) && value !== '') {
            // Se for um número, aplicamos a máscara de telefone
            const fp = formatPhone(value);
            setInputValue(fp);
        } else {
            // Permite qualquer entrada sem aplicar formatação
            setInputValue(value);
        }
    };

    // Real-time password validation
    const getPasswordError = (value: string) => {
        if (value.length < 4) {
            return 'Password must be 4 characters or more';
        }
        if ((value.match(/[A-Z]/g) || []).length < 1) {
            return 'Password needs at least 1 uppercase letter';
        }
        if ((value.match(/[^a-z]/gi) || []).length < 1) {
            return 'Password needs at least 1 symbol';
        }

        return null;
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // Custom validation checks
        let newErrors = {};

        // Password validation
        const passwordError = getPasswordError(data.password as string);

        if (passwordError) {
            newErrors = { ...newErrors, password: passwordError };
        }

        // Username validation

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            return;
        }

        if (data.terms !== 'true') {
            setErrors({ terms: 'Please accept the terms' });

            return;
        }

        // Clear errors and submit
        setErrors({});
        setSubmitted(data);
        console.log(submitted);
    };

    return (
        <div className='w-full h-screen bg-gray-100'>
            <div
                className={`h-[85%] w-[65%] bg-white relative top-[50%]
                     left-[50%] z-[99] translate-x-[-50%] translate-y-[-50%] shadow-lg
                      rounded-[3rem] flex items-center justify-center overflow-hidden`}
            >
                <div id='form' className='h-full w-1/2 flex flex-col items-center justify-center'>
                    <div>
                        <Image src='/linkmelp.jpeg' alt='logo linkme' width={200} height={100} />
                    </div>
                    <Form
                        className='w-full justify-center items-center space-y-4'
                        validationErrors={errors}
                        onSubmit={onSubmit}
                    >
                        <div className='flex flex-col gap-4 max-w-md'>
                            <Input
                                isRequired
                                // errorMessage={}
                                label='Email ou Telefone'
                                labelPlacement='outside'
                                name='email'
                                placeholder='Enter your email'
                                type='text'
                                value={inputValue}
                                onChange={handleChange}
                            />

                            <Input
                                isRequired
                                errorMessage={getPasswordError(password)}
                                isInvalid={getPasswordError(password) !== null}
                                label='Password'
                                labelPlacement='outside'
                                name='password'
                                placeholder='Enter your password'
                                type='password'
                                value={password}
                                onValueChange={setPassword}
                            />

                            <div className='flex gap-4'>
                                <Button className='w-full' color='primary' type='submit'>
                                    Login
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
                <div id='img-signin' className='h-full w-1/2  bg-gray-100'>
                    <div
                        style={{
                            backgroundImage: `url(/imagemLogin.png)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        className={`relative top-0 left-[-13rem] w-[42rem] h-full `}
                    ></div>
                </div>
            </div>
            <div className='h-screen w-1/2 bg-[#17cb95] fixed top-0 right-0 z-1 '></div>
        </div>
    );
}
