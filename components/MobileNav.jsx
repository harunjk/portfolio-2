"use client"

import { usePathname } from 'next/navigation';
import {Sheet, SheetContent, SheetTrigger} from './ui/sheet'

import {CiMenuFries} from 'react-icons/ci'
import Link from 'next/link';
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

const MobileNav = () => {
    const pathname=usePathname()

    return <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32px] text-fuchsia-500'/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className='mt-32 mb-10 text-center text-2xl'>
                <Link href='/'>
                    <h1 className='text-3xl font-semibold'>JK<span className='text-fuchsia-500'>.</span></h1>
                </Link>
            </div>

            <nav className='flex flex-col justify-center items-center gap-8'>
                {
                    link.map((link,index)=>{
                        return (
                            <Link href={link.path} key={link.index} className={`${pathname=== link.path && "text-fuchsia-500 border-b-2 border-accent"} text-xl capitalize hover:text-fuchsia-500 transition-all`}>{link.name}</Link>
                        )
                    })
                }
            </nav>
        </SheetContent>
    </Sheet>;
};

export default MobileNav;