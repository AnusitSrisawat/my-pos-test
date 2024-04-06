"use client"
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

export default function Login() {

    const router = useRouter();
    
    const [login, setLogin] = useState(true);

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
            }
        } catch (error) {
            console.error('API Error:', error);
        }
    };

    return (
        <div className="relative bg-blue-300 flex flex-col items-center gap-4 min-h-screen w-full">
            <div className='absolute z-10 p-2 bg-slate-300 rounded-xl m-2 cursor-pointer' onClick={() => setLogin(!login)}>switch</div>
            <div className={'absolute duration-1000 bg-blue-700 min-h-screen w-1/2 flex flex-col justify-center items-center gap-4 p-4' + (login ? ' left-full -translate-x-full' : ' left-0')}>
                <h1>login</h1>
                <form onSubmit={handleSubmit} className="border border-blue-950 flex flex-col justify-center items-center gap-4 p-4 rounded-3xl">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="border border-blue-950 rounded-xl p-2" type="submit">Login</button>
                    {loginError ? (
                        <span></span>
                    ) : (
                        <div className="text-red-500">log in ไม่ได้นะจ๊ะ</div>
                    )}
                </form>
                <Link href="/SalePage">SalePage</Link>
            </div>
        </div>
    );
}
