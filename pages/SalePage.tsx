"use client"
import React, { useState } from 'react';
import Product from './Product';

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
        <div className="relative bg-slate-400 flex flex-col items-center gap-4 min-h-screen w-full">
           <Product />
        </div>
    );
}
