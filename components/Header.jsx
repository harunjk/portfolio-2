import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from './MobileNav'

const Header = () => {
    return (
        <div className="py-8 xl:py-12 text-white bg-pink-50/20">
            <div className="container mx-auto flex justify-between items-center">
                <Link href='/'>
                <h1 className="text-4xl font-semibold">JK<span className="text-accent">.</span> </h1>
                </Link>
{/* desktob nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href='/contact'>
                        <Button>Hire Me</Button>
                    </Link>
                </div>

{/* mobile nav */}

                <div className="xl:hidden"> <MobileNav/> </div>


            </div>
        </div>
    );
};

export default Header;