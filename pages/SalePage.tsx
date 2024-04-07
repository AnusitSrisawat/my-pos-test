"use client"
import React, { useEffect, useState } from 'react';
import Cal from '../src/components/Cal';
import Product from '../src/components/Product';
import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, User, Avatar } from '@nextui-org/react';
import Nav from '@/components/Nav';

interface Item {
    id: number;
    name: string;
    qty: number;
    price: number;
}

export default function SalePage() {

    const [items, setItems] = useState<Item[]>([]);
    const [sumPrice, setSumPrice] = useState(0);
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        // Function to call when component starts

        // Load items from localStorage on component mount
        const savedItems = localStorage.getItem('items');
        if (savedItems) {
            // setItems(JSON.parse(savedItems));              //save local storage มั้ย ??
            // console.log("getItem", items);
        }
    }, []);

    useEffect(() => {
        // Save items to localStorage whenever items state changes
        localStorage.setItem('items', JSON.stringify(items));
        // console.log("setItem", items);

        handleSumPrice();
    }, [items]);

    const handleAddItem = (itemToAdd: any) => {
        // console.log("handleAddItem");

        // Check if the item already exists in the items list
        const existingItem = items.find(item => item.id === itemToAdd.id);

        if (existingItem) {
            // If item exists, update its quantity by increasing it by 1
            const updatedItems = items.map(item => {
                if (item.id === itemToAdd.id) {
                    return {
                        ...item,
                        qty: item.qty + 1  // Increment quantity
                    };
                }
                return item;
            });
            setItems(updatedItems);
        } else {
            // If item does not exist, add it to the items list with quantity of 1
            const newItem: Item = {
                id: itemToAdd.id,
                name: itemToAdd.name,
                qty: 1,
                price: itemToAdd.price,
            };
            setItems([...items, newItem]);
        }
    };

    const handleSubItem = (itemToAdd: any) => {
        // console.log("handleSubItem");

        // Check if the item already exists in the items list
        const existingItem = items.find(item => item.id === itemToAdd.id);

        if (existingItem) {
            // If item exists, update its quantity by increasing it by 1
            const updatedItems = items.map(item => {
                if (item.id === itemToAdd.id && item.qty > 1) {
                    return {
                        ...item,
                        qty: item.qty - 1  // Increment quantity
                    };
                }
                return item;
            });
            setItems(updatedItems);
        }
    };

    const handleDeleteItem = (id: number) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    };

    const handleResetItem = () => {
        // localStorage.removeItem("items")
        setItems([])
    };

    const handleSumPrice = () => {
        const totalValues = items.map(item => item.qty * item.price); // Array of total values for each item
        setSumPrice(totalValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0)); // Sum of all total values

    };

    // const handleEditItem = (id: number) => {
    //     const itemToEdit = items.find(item => item.id === id);
    //     if (itemToEdit) {
    //         // setItemName(itemToEdit.name);
    //         // setEditIndex(id);
    //     }
    // };

    // const handleUpdateItem = () => {
    //     // if (editIndex !== null && itemName.trim() !== '') {
    //     //     const updatedItems = items.map(item =>
    //     //         item.id === editIndex ? { ...item, name: itemName.trim() } : item
    //     //     );
    //     //     setItems(updatedItems);
    //     //     setItemName('');
    //     //     setEditIndex(null);
    //     // }
    // };

    return (
        <div className='h-screen w-full flex flex-col overflow-hidden'>
            <Nav />
            <div className={"relative bg-blue-300 flex flex-row items-start w-full duration-500 gap-6 p-6" + (showNav ? ' h-[90%]' : ' h-[100%]')}>
                <div className='w-[70%] h-full overflow-auto'>
                    <Product
                        items={items}
                        onAddData={handleAddItem}
                    />
                </div>
                <div className='w-[30%] h-full overflow-auto'>
                    <Cal
                        items={items}
                        sumPrice={sumPrice}
                        onAddData={handleAddItem}
                        onSubData={handleSubItem}
                        onDeleteData={handleDeleteItem}
                        onResetData={handleResetItem}
                    />
                </div>
            </div>
        </div>
    );
}
