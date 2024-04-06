"use client"
import React, { useEffect, useState } from 'react';

interface Item {
    id: number;
    name: string;
    qty: number;
    price: number;
}
interface ProductProps {
    onAddData: (item: Item) => void;
    onSubData: (item: Item) => void;
    onDeleteData: (item: number) => void;
    onResetData: () => void;
    items: any;
    sumPrice: number;
}

const Cal: React.FC<ProductProps> = ({ items, sumPrice, onAddData, onSubData, onDeleteData, onResetData }) => {


    useEffect(() => {

    }, []);

    return (
        <div className="relative flex flex-col items-start gap-4 p-4 h-full w-full">
            <div className='bg-slate-200 rounded-3xl w-full h-full flex flex-col justify-start items-start overflow-hidden'>
                <div className='relative w-full h-[10%] flex items-center gap-4 p-2 bg-slate-500'>
                    <div className='text-center w-full'>รายการสินค้า</div>
                    <div
                        className='absolute top-0 right-0 text-center mx-2 my-2 bg-red-500 px-2 border-2 border-transparent hover:border-2 cursor-pointer hover:border-black rounded-xl hover:scale-[0.99]'
                        onClick={() => onResetData()}>reset</div>
                </div>

                <div className='w-full h-[80%] overflow-auto p-2'>
                    {items.map((item: any, index: number) => (
                        <div className='flex flex-row gap-2 border-2 border-transparent hover:border-2 hover:border-black rounded-xl hover:scale-[0.99] duration-200'>
                            <div className='p-2'>{index + 1}</div>
                            <div
                                className='relative w-full flex flex-col gap-2 p-2 '>

                                <div className='flex flex-col justify-between w-full '>
                                    <div className='flex flex-row justify-between w-full '>
                                        <div className="">{item.name}</div>
                                        <div className="">{item.price} ฿</div>
                                    </div>
                                    <div className='flex flex-row justify-end w-full gap-4'>
                                        <div className="">x{item.qty}</div>
                                        <div className="">{(item.qty * item.price).toFixed(2)} ฿</div>
                                    </div>
                                </div>
                                <div className='flex justify-end gap-2'>
                                    <div className='px-2 border border-black bg-green-500 rounded-xl cursor-pointer' onClick={() => onAddData(item)}>add</div>
                                    <div className={'px-2 border border-black bg-yellow-500 rounded-xl cursor-pointer' + (item.qty <= 1 ? " grayscale" : "")} onClick={() => onSubData(item)} >sub</div>
                                    <div className='px-2 border border-black bg-red-500 rounded-xl cursor-pointer' onClick={() => onDeleteData(item.id)}>delete</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='w-full h-[10%] flex items-center gap-4 p-2 bg-slate-500'>
                    <div className='text-center w-full'>ยอดรวม</div>
                    <div className='text-center w-full'>{(sumPrice).toFixed(2)} ฿</div>
                </div>
            </div>
        </div>
    );
}

export default Cal;