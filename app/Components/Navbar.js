"use client";

import { useState } from 'react';
import Image from 'next/image';
import { RxCross1 } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";

const NavBar = ({ logo, skills, projects, about}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-6">

                <button
                    onClick={toggleNavbar}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? 'true' : 'false'}
                >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? (
                        <RxCross1 className="w-5 h-5" aria-hidden="true" />
                    ) : (
                        <FaBarsStaggered className="w-5 h-5" aria-hidden="true" />
                    )}
                </button>
            </div>
            <div className={`${isOpen ? '' : 'hidden'} bg-white w-auto md:block md:w-auto rounded md:mx-[8vh] mx-[2vh] `}>
                <ul className="font-medium flex flex-col p-4 md:p-0 md:justify-around md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-black md:flex-row">
                    <li>
                        <a href='' className="block py-2 px-3 text-gray-900 md:text-white rounded hover:bg-blue-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href={`#${about}`} className="block py-2 px-3 text-gray-900 md:text-white hover:text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                    </li>
                    <li>
                        <a href="#" className="md:block hidden "><Image src={logo} className="h-[16vh] -mt-[6vh]" alt="logo" /></a>
                    </li>
                    <li>
                        <a href={`#${skills}`} className="block hover:text-white py-2 px-3 text-gray-900 md:text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
                    </li>
                    <li>
                        <a href={`#${projects}`} className="block hover:text-white py-2 px-3 text-gray-900 md:text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
