'use client';
import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import Buttons from '../shared/atomic/Buttons';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
    const [checked, setChecked] = useState(false);
    const [isShowed, setShowed] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    const handleRedirect = (path: string) => {
        if (path === "blogs") router.push('/blogs');
        else if (path === "gallery") router.push('/gallery');
        else if (path === "login") router.push('/login');
        else if (path === "home") router.push('/');
    };

    return (
        <div className='flex flex-col bg-gray-100'>
            <div className='w-100 flex justify-between pl-5 py-5'>
                <div className='flex items-center'>
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <p style={{ color: checked ? "red" : "" }}>High Contrast</p>
                </div>
                <div className='flex items-center'>
                    <div className='cursor-pointer' onClick={() => handleRedirect('login')}>Log in</div>
                    &nbsp; &nbsp;
                    <Buttons
                        content="Start free to get a demo"
                        classes="w-100 mt-2 px-4 py-3 font-bold text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-indigo focus:border-orange-700"
                    />
                </div>
            </div>

            <div className='flex md:flex-row pl-10 sm:flex-col'>
                <div className='md:hidden cursor-pointer' onClick={() => setShowed(!isShowed)}>
                    <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png" alt="Menu" width={30} height={30} />
                </div>
                <div className={`md:flex flex-col md:flex-row ${isShowed ? 'hidden' : 'block'}`}>
                    <h2 className={`px-4 cursor-pointer ${(pathname === '/' || pathname === '') && "text-sky-500"}`}
                        onClick={() => handleRedirect('home')}
                    >About Us Template</h2>
                    <h2 className={`px-4 cursor-pointer ${(pathname === '/blogs' || pathname === 'blogs') && "text-sky-500"}`} onClick={() => handleRedirect('blogs')}>Blogs</h2>
                    <h2 className={`px-4 cursor-pointer ${(pathname === '/gallery' || pathname === 'gallery') && "text-sky-500"}`} onClick={() => handleRedirect('gallery')}>Logo Gallry</h2>
                </div>
            </div>
        </div>
    );
};

export default Navbar;