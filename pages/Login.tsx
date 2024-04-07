"use client"
import { Input } from '@nextui-org/react';
import Link from 'next/link';
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
        <div className="relative bg-blue-300 flex flex-row justify-center items-center gap-4 min-h-screen w-full">
            <div className='w-1/2 h-screen bg-blue-900'>

            </div>
            <div className='w-1/2 h-full flex flex-col gap-4 justify-center items-center'>
                <form onSubmit={handleSubmit} className="w-fit shadow-xl border-2 border-blue-50 flex flex-col justify-center items-center gap-6 p-6 rounded-3xl bg-slate-100">
                    <div className='text-xl font-semibold'>login</div>
                    <Input
                    className='border border-slate-200 rounded-xl shadow-xl'
                        key="1"
                        id="username"
                        type="text"
                        label="Username"
                        labelPlacement="outside"
                        // placeholder="Enter your email"
                        // description="outside"
                        value={username} onChange={(e) => setUsername(e.target.value)}
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
                    />
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
