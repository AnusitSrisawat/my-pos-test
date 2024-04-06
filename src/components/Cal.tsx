"use client"
import React, { useEffect, useState } from 'react';

export default function Cal() {

    useEffect(() => {
        // Function to call when component starts
        handleClick();
    }, []);

    const [login, setLogin] = useState(true);
    const [product, setProduct] = useState([]);

    const handleClick = async () => {
        const response = await fetch('/api/product').then(res => res.json());
        console.log(response);
        setProduct(response)
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
                console.log('Login successful');
            } else {
                setLoginError(false)
                console.error('Login failed');
            }
        } catch (error) {
            console.error('API Error:', error);
        }
    };

    return (
        <div className="relative bg-blue-300 flex flex-col items-start gap-4 p-4 h-full w-full">
            <div className='bg-slate-200 rounded-3xl w-full h-full flex flex-col justify-start items-start'>
                <div className='text-center w-full p-2'>รายการสินค้า</div>
            </div>
        </div>
    );
}
