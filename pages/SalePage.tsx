"use client"
import React, { useState } from 'react';
import Cal from '../src/components/Cal';
import Product from '../src/components/Product';

export default function SalePage() {

    // const handleClick = async () => {
    //     const response = await fetch('/api/product').then(res => res.json());
    //     console.log(response);
    // };

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [loginError, setLoginError] = useState(true);

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('/api/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ username, password }),
    //         });
    //         if (response.ok) {
    //             setLoginError(true)
    //             console.log('Login successful');
    //         } else {
    //             setLoginError(false)
    //             console.error('Login failed');
    //         }
    //     } catch (error) {
    //         console.error('API Error:', error);
    //     }
    // };

    return (
        <div className='h-screen w-full flex flex-col overflow-hidden'>
            <div className='w-full bg-slate-500'>
                1
            </div>
            <div className="relative bg-slate-400 flex flex-row items-start grow w-full">
                <div className='w-3/5 h-full bg-slate-100'>
                    <Product />
                </div>
                <div className='w-2/5 h-full bg-slate-200'>
                    <Cal />
                </div>
            </div>
        </div>
    );
}
