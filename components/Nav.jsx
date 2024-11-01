'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav = () => {
    const link=[
        {
            name:'Home',
            path:'/'
        },
        {
            name:'Service',
            path:'/service'
        },
        {
            name:'Resume',
            path:'/resume'
        },
        {
            name:'Work',
            path:'/work'
        },
        {
            name:'Contact',
            path:'/contact'
        },
    ]

    const pathName=usePathname()
    // console.log(pathName);

    return (
        <div className='flex gap-8'>
            {
                link.map((link, index)=> <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>)
            }
        </div>
    );
};

export default Nav;