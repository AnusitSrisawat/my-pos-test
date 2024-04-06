"use client"
import React, { useEffect, useState } from 'react';

export default function Product() {

    useEffect(() => {
        // Function to call when component starts
        handleClick();
    }, []);
    
    const handleClick = async () => {
        const response = await fetch('/api/product').then(res => res.json());
        console.log(response);
        setProduct(response)
    };

    const [product, setProduct] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
                console.log('Login successful');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('API Error:', error);
        }
    };

    return (
        <div className='flex flex-col justify-center items-start gap-4 p-4 bg-blue-200'>
            <div className='w-full text-center'>
                รายการสินค้า
            </div>
            <div className="relative grid grid-cols-3 xl:grid-cols-4 justify-around items-start gap-4 w-full">
                {product.map((item: any) => (
                    <div id={item.id} className='relative p-2 cursor-pointer border-2 border-transparent hover:border-2 hover:border-black rounded-xl active:scale-95 duration-200'>
                        <div className='w-full h-44 object-cover rounded-xl'>
                            <img className='w-full h-full object-cover rounded-xl' src={item.image} alt={item.name} />
                        </div>
                        <div className='p-2'>
                            <div className='flex flex-row justify-between w-full'>
                                <h3 className="">{item.name}</h3>
                                <p>${item.price}</p>
                            </div>
                            <p className='text-xs'>{item.description}</p>
                            {/* <p>Category: {item.category}</p> */}
                        </div>
                        <div className='absolute top-0 left-0 w-full p-2'>
                            132
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
