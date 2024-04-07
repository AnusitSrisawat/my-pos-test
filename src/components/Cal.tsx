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
        // console.log("items", items);
        // console.log("items", items.length);

    }, [items]);

    return (
        <div className="relative flex flex-col items-start gap-4 h-full w-full">
            <div className='bg-slate-200 rounded-3xl w-full h-full flex flex-col justify-start items-start overflow-hidden'>
                <div className='relative w-full h-[10%] flex items-center gap-4 p-2 bg-slate-400'>
                    <div className='text-center w-full'>รายการสินค้า</div>

                    {items.length < 1 ? (
                        ''
                    ) : (
                        <div
                            className='absolute top-0 right-0 text-center mx-2 my-2 bg-orange-400 px-2 border-2 border-transparent hover:border-2 cursor-pointer hover:border-orange-500 rounded-xl hover:scale-[0.99]'
                            onClick={() => onResetData()}>reset</div>
                    )
                    }
                </div>

                <div className='relative w-full h-[80%]'>
                    <div className='absolute top-0 h-5 bg-gradient-to-b from-slate-200 from-0% to-transparent to-100% w-full z-10'></div>
                    <div className='absolute bottom-0 h-5 bg-gradient-to-t from-slate-200 from-0% to-transparent to-100% w-full z-10'></div>
                    <div className='w-full h-full overflow-auto flex flex-col gap-2 p-2'>
                        {items.map((item: any, index: number) => (
                            <div key={item.id} className='bg-slate-300 flex flex-row border-2 border-transparent hover:border-slate-500 rounded-xl hover:scale-[0.99] duration-200'>
                                <div className='p-2'>{index + 1}.</div>
                                <div
                                    className='relative w-full flex flex-col gap-2 p-2 '>

                                    <div className='flex flex-col justify-between w-full gap-2'>
                                        <div className='flex flex-row justify-between w-full '>
                                            <div className="">{item.name}</div>
                                            <div className="">ราคา <span className='text-xs'>{(item.price).toLocaleString()} ฿</span></div>
                                        </div>
                                        <div className='flex flex-row justify-end items-center gap-2'>
                                            <div className="">จำนวน</div>
                                            <div className='flex flex-row gap-1 justify-end items-center h-full'>
                                                <div className='flex flex-row gap-2 items-center bg-slate-400 h-full py-1 px-2 rounded-lg'>
                                                    <div className="cursor-pointer" onClick={() => onSubData(item)}>
                                                        <img className={'w-4 h-4 object-contain rounded-xl hover:scale-150' + (item.qty <= 1 ? " opacity-30" : " ")} src="/images/icons/minus-svgrepo-com.svg" alt="minus" />
                                                    </div>
                                                    <div className="bg-slate-300 px-2 rounded-lg">{item.qty}</div>
                                                    <div className="cursor-pointer" onClick={() => onAddData(item)}>
                                                        <img className='w-4 h-4 object-contain rounded-xl hover:scale-150' src="/images/icons/plus-large-svgrepo-com.svg" alt="plus" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-row gap-1 items-center cursor-pointer bg-red-500 rounded-lg p-1 border-2 border-transparent hover:border-red-700 hover:scale-95" onClick={() => onDeleteData(item.id)}>
                                                    <img className='w-6 h-6 object-contain rounded-xl' src="/images/icons/bin-cancel-close-delete-garbage-remove-svgrepo-com.svg" alt="bin" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-end items-center gap-2">ทั้งหมด {(item.qty * item.price).toLocaleString()} ฿</div>
                                    </div>
                                    {/* <div className='flex justify-end gap-2'>
                                    <div className='px-2 border border-green-500 bg-green-500 rounded-xl cursor-pointer' onClick={() => onAddData(item)}>add</div>
                                    <div className={'px-2 border bg-yellow-500 rounded-xl cursor-pointer' + (item.qty <= 1 ? " grayscale border-transparent text-gray-500" : " border-yellow-500")} onClick={() => onSubData(item)} >sub</div>
                                    <div className='px-2 border border-red-500 bg-red-500 rounded-xl cursor-pointer' onClick={() => onDeleteData(item.id)}>delete</div>
                                </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-full h-[10%] flex items-center gap-4 p-2 bg-slate-400'>
                    <div className='text-center w-full'>ยอดรวม</div>
                    <div className='flex flex-row items-center gap-4 w-full'>
                        <div className='text-end w-full font-bold whitespace-nowrap'>{sumPrice.toLocaleString()} ฿</div>
                        <div className='text-center w-auto whitespace-nowrap border-2 border-transparent hover:border-blue-900  rounded-xl p-2 cursor-pointer bg-blue-600 text-white duration-200'>ชำระเงิน</div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Cal;