"use client"
import React, { useEffect, useState } from 'react';

interface Item {
    id: number;
    name: string;
    qty: number;
}
interface ProductProps {
    onAddData: (item: Item) => void;
    items: any;
}

const Cal: React.FC<ProductProps> = ({ items, onAddData }) => {


    useEffect(() => {

    }, []);

    return (
        <div className="relative bg-blue-300 flex flex-col items-start gap-4 p-4 h-full w-full">
            <div className='bg-slate-200 rounded-3xl w-full h-full flex flex-col justify-start items-start'>
                <div className='text-center w-full p-2'>รายการสินค้า</div>

                {items.map((item: any) => (
                    <div
                        className='relative w-full flex flex-col gap-2 p-2 border-2 border-transparent hover:border-2 hover:border-black rounded-xl hover:scale-[0.99] duration-200'>

                        <div className='flex flex-row justify-between w-full '>
                            <div className="">{item.name}</div>
                            <div className="">x{item.qty}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cal;