"use client"
import React, { useEffect, useState } from 'react';
import Cal from '../src/components/Cal';
import Product from '../src/components/Product';
import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, User, Avatar } from '@nextui-org/react';

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
            <div className={'relative w-full bg-slate-800 text-slate-300 flex flex-row justify-between items-center px-4 duration-500' + (showNav ? ' h-[10%] py-2' : ' h-0')}>
                
                <div className='flex flex-row gap-8'>
                    <Dropdown className=''>
                        <DropdownTrigger>
                            <Button className='text-white'
                                variant="light"
                            >
                                Product
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new">New file</DropdownItem>
                            <DropdownItem key="copy">Copy link</DropdownItem>
                            <DropdownItem key="edit">Edit file</DropdownItem>
                            <DropdownItem key="delete" className="text-danger" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

                {/* <div className='flex flex-row justify-center items-center gap-4'>
                    <div className=''>
                        Anusit Srisawat
                    </div>
                    <div className='rounded-full overflow-hidden bg-black h-16 w-16 shadow-2xl'>
                        <img className='w-full h-full object-cover' src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg" alt="" />
                    </div>
                </div> */}

                <div className="flex items-center gap-4">
                    <Dropdown placement="bottom-start">
                        <DropdownTrigger>
                            <User
                                as="button"
                                avatarProps={{
                                    isBordered: false,
                                    src: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
                                }}
                                className="transition-transform"
                                description="@tonyreichert"
                                name="Tony Reichert"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="User Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-bold">Signed in as</p>
                                <p className="font-bold">@tonyreichert</p>
                            </DropdownItem>
                            <DropdownItem key="settings">
                                My Settings
                            </DropdownItem>
                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                            <DropdownItem key="analytics">
                                Analytics
                            </DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">
                                Help & Feedback
                            </DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className={'absolute h-5 flex justify-center items-start bottom-0 left-1/2 bg-slate-700 px-2 z-10 cursor-pointer ' + (showNav ? ' translate-y-0 rounded-t-lg leading-[1.1]' : ' translate-y-full rounded-b-lg leading-[0.8]')} onClick={() => { setShowNav(!showNav) }}>
                    {showNav ? 'close' : 'open'}
                </div>
            </div>
            <div className={"relative bg-slate-400 flex flex-row items-start w-full duration-500" + (showNav ? ' h-[90%]' : ' h-[100%]')}>
                <div className='w-[70%] h-full bg-blue-200 overflow-auto'>
                    <Product
                        items={items}
                        onAddData={handleAddItem}
                    />
                </div>
                <div className='w-[30%] h-full bg-blue-300 overflow-auto'>
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
