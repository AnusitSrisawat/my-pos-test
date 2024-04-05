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
        <div className="relative bg-blue-300 flex flex-col items-start gap-4 min-h-screen w-full">
            {product.map(item => (
                <div key={item.id}>
                    <img className='w-20 h-20 object-cover' src={item.image} alt={item.name} />
                    <h3 className="text-red-950">{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Price: ${item.price}</p>
                    <p>Category: {item.category}</p>
                </div>
            ))}
        </div>
    );
}
