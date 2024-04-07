"use client"
import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, User, Link } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

const Nav = () => {

    const [showNav, setShowNav] = useState(true);
    const menu = [
        {
            name: "CRUD",
            sub: [
                {
                    name: "Product",
                    path: "/ProductManage",
                    sub: {}
                },
            ]
        },
        {
            name: "Sale Page",
            sub: [
                {
                    name: "Sale Page",
                    path: "/SalePage",
                    sub: {}
                },
            ]
        },
    ];

    useEffect(() => {
        // console.log("items", items);
        // console.log("items", items.length);

    }, []);

    return (
        <div className={'relative w-full bg-slate-800 text-slate-300 flex flex-row justify-between items-center px-4 duration-500' + (showNav ? ' h-[10%] py-2' : ' h-0')}>
            <div className={'relative w-full flex flex-row justify-between items-center duration-500 overflow-hidden' + (showNav ? ' ' : ' h-0')}>
                <div className='flex flex-row gap-4'>
                    {
                        menu.map((item: any) => (
                            <Dropdown key={item.name} className=''>
                                <DropdownTrigger>
                                    <Button className='font-semibold text-slate-200'
                                        variant="light"
                                    >
                                        {item.name}
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">

                                    {(item.sub).map((itemsub: any) => (
                                        <DropdownItem key={itemsub.name} href={itemsub.path}>
                                            {itemsub.name}
                                        </DropdownItem>
                                        // <DropdownItem key="delete" className="text-danger" color="danger">
                                        //     Delete file
                                        // </DropdownItem>

                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        ))
                    }
                </div>

                <div className="flex items-center gap-4 px-8">
                    <Dropdown placement="bottom-start" className=''>
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
                                <Link className='w-full h-full' href="/Login" color="danger">Log Out</Link>

                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            {/* <div className={'absolute text-xs h-4 flex justify-center items-start bottom-0 left-1/2 bg-slate-700 px-2 z-10 cursor-pointer ' + (showNav ? ' translate-y-0 rounded-t-lg leading-[1.1]' : ' translate-y-full rounded-b-lg leading-[0.8]')} onClick={() => { setShowNav(!showNav) }}>
                {showNav ? 'close' : 'open'}
            </div> */}
        </div>
    );
}

export default Nav;