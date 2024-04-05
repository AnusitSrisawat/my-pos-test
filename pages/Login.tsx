"use client"
import React, { useState } from 'react';

export default function Login() {

    const [login, setLogin] = useState(true);

    const handleClick = async () => {
        const response = await fetch('/api/product').then(res => res.json());
        console.log(response);
      };

    return (
        <div className="relative bg-blue-300 flex flex-col items-center gap-4 min-h-screen w-full">
            <div className='absolute z-10 p-2 bg-slate-300 rounded-xl m-2 cursor-pointer' onClick={() => setLogin(!login)}>switch</div>
            <div className={'absolute duration-1000 bg-blue-700 min-h-screen w-1/2 flex flex-col justify-center items-center gap-4 p-4'+ ( login ? ' left-full -translate-x-full' : ' left-0')}>
                <h1>login</h1>
                <div className="border border-blue-950 flex flex-col justify-center items-center gap-4 p-4 rounded-3xl">
                    <label htmlFor="username">username</label>
                    <input name="username" type="text" />
                    <label htmlFor="password">password</label>
                    <input name="password" type="text" />
                    {login? "1" : "0"}
                    <button className="border border-blue-950 rounded-xl p-2" type="submit" onClick={handleClick}>submit</button>
                </div>
            </div>
        </div>
    );
}
