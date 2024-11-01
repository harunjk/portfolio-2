"use client"
import { AnimatePresence,motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Satirs from './Satirs'


const StairTransition = () => {
    const pathName=usePathname();
    return (
        <>
        {/* <AnimatePresence mode="wait">
           <div key={pathName}>
            <div className="w-screen h-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"><Satirs/></div>
           </div>
        </AnimatePresence> */}
        </>
    );
};

export default StairTransition;