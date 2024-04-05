"use client"
import React, { useEffect, useState } from 'react';

export default function Product() {

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
        <div className="relative bg-blue-200 flex flex-row flex-wrap justify-around items-start gap-4 p-4 w-full h-max overflow-auto">
            {product.map((item: any) => (
                <div id={item.id} className='cursor-pointer border-2 border-transparent hover:border-2 hover:border-black rounded-xl active:scale-95 duration-200'>
                    <div className='w-44 h-44 object-cover'>
                        <img className='w-full h-full object-cover' src={item.image} alt={item.name} />
                    </div>
                    <div className='px-2'>
                    <div className='flex flex-row justify-between w-full'>
                        <h3 className="">{item.name}</h3>
                        <p>${item.price}</p>
                    </div>
                    <p className='text-xs'>{item.description}</p>
                    {/* <p>Category: {item.category}</p> */}
                    </div>
                </div>
            ))}
        </div>
    );
}
