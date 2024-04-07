"use client"
import { LockIcon } from '@/components/LockIcon';
import { MailIcon } from '@/components/MailIcon';
import { Checkbox, Input } from '@nextui-org/react';
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
        <div className="relative bg-gradient-to-l from-blue-400 from-0% to-blue-900 to-100% flex flex-row justify-center items-center gap-4 min-h-screen w-full">
            <div className='w-1/2 h-screen flex flex-row justify-center items-center gap-4'>
                <div className='flex flex-col justify-start items-center gap-4 text-[10vh] h-full py-[15vh]'>
                    <div>g</div>
                    <div>o</div>
                    <div>o</div>
                    <div>d</div>
                </div>
                <div className='flex flex-col justify-end items-center gap-4 text-[10vh] h-full py-[15vh]'>
                    <div>p</div>
                    <div>o</div>
                    <div>s</div>
                    <div>b</div>
                </div>
            </div>
            <div className='w-1/2 h-full flex flex-col gap-4 justify-center items-center'>
                <form onSubmit={handleSubmit} className="w-fit shadow-2xl border-2 border-blue-50 flex flex-col justify-center items-center gap-4 p-6 rounded-3xl bg-slate-50">
                    <div className='text-xl font-semibold'>login</div>
                    <Input
                        autoFocus
                        className='border border-slate-200 rounded-xl shadow-xl'
                        key="1"
                        id="username"
                        type="text"
                        label="Username"
                        labelPlacement="outside"
                        // placeholder="Enter your email"
                        // description="outside"
                        value={username} onChange={(e) => setUsername(e.target.value)}
                        endContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        variant="bordered"
                    />
                    <Input
                        className='border border-slate-200 rounded-xl shadow-xl'
                        key="2"
                        id="password"
                        type="password"
                        label="password"
                        labelPlacement="outside"
                        // placeholder="Enter your email"
                        // description="outside"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        endContent={
                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        variant="bordered"
                    />

                    {/* <Input
                        autoFocus
                        endContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Email"
                        labelPlacement="outside"
                        // placeholder="Enter your email"
                        variant="bordered"
                    />
                    <Input
                        endContent={
                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Password"
                        labelPlacement="outside"
                        // placeholder="Enter your password"
                        type="password"
                        variant="bordered"
                    /> */}
                    <div className="flex py-2 px-1 gap-4 justify-between">
                        <Checkbox
                            classNames={{
                                label: "text-small",
                            }}
                        >
                            Remember me
                        </Checkbox>
                        <Link color="primary" href="#" size="sm">
                            Forgot password?
                        </Link>
                    </div>

                    <button className="border border-blue-950 rounded-xl p-2" type="submit">Login</button>

                    {loginError ? (
                        <span></span>
                    ) : (
                        <div className="text-red-500">log in ไม่ได้นะจ๊ะ</div>
                    )}
                </form>
            </div>
        </div>
    );
}
