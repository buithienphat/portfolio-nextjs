"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
    const pathname = usePathname();
    const [isShowNavbar, setIsShowNavbar] = useState(false);
    const _toggleNavbar = () => {
        setIsShowNavbar(!isShowNavbar);
    };

    useEffect(() => {
        setIsShowNavbar(false);
    }, [pathname]);

    return (
        <header className="w-full border border-[#33353f] fixed top-0 bg-[#121212] z-10">
            <div className="container mx-auto px-4 h-14 md:h-20">
                <div className="flex justify-between items-center h-full">
                    <div className="font-semibold text-2xl md:text-5xl">
                        LOGO
                    </div>
                    <div>
                        <ul className="hidden text-main text-xl md:flex gap-8">
                            <li>
                                <Link href={"#hero"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"#about"}>About</Link>
                            </li>
                            <li>
                                <Link href={"#project"}>Projects</Link>
                            </li>
                            <li>
                                <Link href={"#contact"}>Contact</Link>
                            </li>
                        </ul>
                        <div
                            className="px-3 py-3 border border-white rounded cursor-pointer md:hidden"
                            onClick={_toggleNavbar}
                        >
                            <span className="h-[1px] w-4 bg-white block"></span>
                            <span className="h-[1px] w-4 bg-white block my-1"></span>
                            <span className="h-[1px] w-4 bg-white block"></span>
                        </div>
                    </div>
                </div>

                <div
                    className={`text-center transition-[height] duration-1000 relative overflow-hidden ${
                        isShowNavbar ? "h-[250px] " : "h-1"
                    }`}
                >
                    <ul className="flex flex-col gap-5 uppercase text-main text-xl py-5">
                        <li>
                            <Link href={"#hero"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"#about"}>About</Link>
                        </li>
                        <li>
                            <Link href={"#project"}>Projects</Link>
                        </li>
                        <li>
                            <Link href={"#contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
