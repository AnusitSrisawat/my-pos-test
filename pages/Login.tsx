"use client"
import { LockIcon } from '@/components/LockIcon';
import { MailIcon } from '@/components/MailIcon';
import { Button, Checkbox, Input } from '@nextui-org/react';
import { Link } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

export default function Login() {

    const router = useRouter();

    const handleClick = async () => {
        const response = await fetch('/api/product').then(res => res.json());
        // console.log(response);
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(true);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (response.ok) {
                setLoginError(true)
                // console.log('Login successful');
                router.push('/SalePage');
            } else {
                setLoginError(false)
                console.error('Login failed');
                router.push('/SalePage');
            }
        } catch (error) {
            console.error('API Error:', error);
        }
    };

    return (
        <div className="relative bg-gradient-to-l from-blue-400 from-0% to-blue-900 to-100% flex flex-row-reverse justify-center items-center min-h-screen w-full">

            <div className='w-1/2 h-screen flex flex-row justify-center items-center gap-4 text-[10vh] py-[15vh]'>
                <div className='h-screen flex flex-row justify-end items-center gap-4 text-[10vh] py-[15vh] pointer-events-none'>
                    <div className='flex flex-col justify-start items-center gap-4 h-full'>
                        <div>g</div>
                        <div>o</div>
                        <div>o</div>
                        <div>d</div>
                    </div>
                    <div className='flex flex-col justify-end items-center gap-4 h-full'>
                        <div>p</div>
                        <div>o</div>
                        <div className='relative'>
                            <div className='absolute z-0 top-0 left-1/2 -translate-x-1/2 opacity-40'>o</div>
                            <div className='relative z-10'>s</div>
                        </div>
                        <div>b</div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 h-full flex flex-row justify-center items-center gap-4'>
                <div className='flex flex-row justify-center items-end'>
                    <form onSubmit={handleSubmit} className="w-fit shadow-2xl border-4 border-gray-700 flex flex-col justify-center items-center gap-4 p-6 rounded-3xl bg-yellow-500">
                        <div className='text-xl font-semibold'>Login</div>
                        <Input
                            autoFocus
                            className='rounded-xl shadow-xl'
                            key="1"
                            id="username"
                            type="text"
                            label="Username"
                            labelPlacement="outside"
                            // placeholder="Enter your email"
                            // description="outside"
                            value={username} onChange={(e) => setUsername(e.target.value)}
                            endContent={
                                <MailIcon className="text-2xl text-black pointer-events-none flex-shrink-0" />
                            }
                            variant="bordered"
                        />
                        <Input
                            className='rounded-xl shadow-xl'
                            key="2"
                            id="password"
                            type="password"
                            label="password"
                            labelPlacement="outside"
                            // placeholder="Enter your email"
                            // description="outside"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            endContent={
                                <LockIcon className="text-2xl text-black pointer-events-none flex-shrink-0" />
                            }
                            variant="bordered"
                        />

                        <div className="flex py-2 gap-8 justify-between">
                            <Checkbox
                                classNames={{
                                    label: "text-small",
                                }}
                            >
                                Remember me
                            </Checkbox>
                            <Link color="primary" href="#" size="md">
                                Forgot password?
                            </Link>
                        </div>

                        <Button variant="light" className="bg-slate-300" type="submit">
                            Login
                        </Button>

                        {loginError ? (
                            <span></span>
                        ) : (
                            <div className="text-red-500 rounded-3xl px-1 text-center flex justify-center items-center font-semibold">Username or Password is incorrect</div>
                        )}
                    </form>
                    <div className='h-full flex flex-row justify-center items-start my-5'>
                        <img className='w-20 h-2w-20 object-contain rounded-xl rotate-90' src="/images/icons/card-pos-svgrepo-com.svg" alt="card" />
                    </div>
                </div>
            </div>
        </div>
    );
}
