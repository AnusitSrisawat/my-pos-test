"use client"
import React, { useEffect, useState } from 'react';
import { Button, Skeleton, Tab, Tabs } from "@nextui-org/react";
interface Item {
    id: number;
    name: string;
    qty: number;
    price: number;
}

interface ProductProps {
    onAddData: (item: Item) => void;
    items: any;
}

const Product: React.FC<ProductProps> = ({ items, onAddData }) => {

    const [product, setProduct] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Function to call when component starts
        handleClick();

    }, []);

    const handleClick = async () => {
        const response = await fetch('/api/product').then(res => res.json());
        // console.log("api/product", response);
        setProduct(response);
        setIsLoaded(true);
    };


    return (
        <div className="relative flex flex-col items-start gap-4 h-full w-full">
            <div className='flex flex-col justify-start items-start p-2 rounded-3xl bg-slate-200 h-full w-full'>
                <div className='w-full text-center h-[10%] flex flex-row justify-start items-center'>
                    <div className="flex flex-wrap gap-4 px-2">
                        <Tabs key="lg" size="lg" aria-label="Tabs sizes" className=''>
                            <Tab key="photos" title="ขนม" />
                            <Tab key="music" title="นม" />
                            <Tab key="videos" title="เนย" />
                        </Tabs>
                    </div>
                </div>
                <div className='relative w-full h-[90%]'>
                        {/* <div className='absolute top-0 h-4 bg-gradient-to-b from-slate-200 from-0% to-transparent to-100% w-full z-10'></div>
                        <div className='absolute bottom-0 h-4 bg-gradient-to-t from-slate-200 from-0% to-transparent to-100% w-full z-10'></div> */}
                    <div className="relative grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-around items-start gap-4 p-2 py-4 w-full h-full overflow-auto">
                        {product.map((item: any) => (
                            <div key={item.id}
                                onClick={() => onAddData(item)}
                                className='cursor-pointer bg-slate-100 bg-opacity-50 relative flex flex-col gap-2 p-2 border-2 border-transparent hover:border-2 hover:border-slate-400 rounded-xl hover:scale-105 duration-200'>
                                <Skeleton isLoaded={isLoaded} className="w-full h-44">
                                    <div className='relative w-full h-44 object-cover rounded-xl overflow-hidden'>
                                        <img className='w-full h-full object-cover rounded-xl hover:scale-110  duration-200' src={item.image} alt={item.name} />

                                        {/* {true ? (
                                    <span></span>
                                    ) : (
                                        <div className='absolute top-0 left-0 w-full p-2 flex flex-row gap-2 justify-end'>
                                        <img className='w-auto h-8 object-contain cursor-pointer hover:bg-white rounded-full p-1 duration-200 active:scale-105' src="/images/icons/shopping-cart-svgrepo-com.svg" alt="456" />
                                        </div>
                                    )} */}

                                        {items.map((items: any) => {
                                            if (items.id === item.id && items.qty > 0) {
                                                return (
                                                    <div key={items.id} className='absolute top-0 right-0 bg-red-300 font-semibold text-xs rounded-lg p-1 m-1 w-6 h-6 flex justify-center items-center '>
                                                        {items.qty}
                                                    </div>
                                                );
                                            } else {
                                                return null; // Return null if condition is not met
                                            }
                                        })}
                                    </div>
                                </Skeleton>
                                <div className=''>
                                    <div className='flex flex-row justify-between w-full'>
                                        <div className="">{item.name}</div>
                                        <p>{(item.price).toLocaleString()} ฿</p>
                                    </div>
                                    {/* <p className='text-xs'>{item.description}</p> */}
                                    {/* <p>Category: {item.category}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;