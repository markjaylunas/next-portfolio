import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { AiFillGithub } from 'react-icons/ai';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center max-w-6xl mx-auto h-14 ">
            {/* inner nav */}
            <div className="relative flex justify-between items-center w-full px-4">
                {/* Logo */}
                <Link href="/">
                    <div className="flex items-center space-x-2   hover:cursor-pointer">
                        <Image
                            src="/images/svg/makje.svg"
                            alt="mcje logo"
                            width="45"
                            height="45"
                        />
                        <h2 className="font-text text-xl font-semibold ">
                            Makje
                        </h2>
                    </div>
                </Link>
                {/* Primary Navigation Links */}
                <div className="hidden tablet:flex items-center space-x-5 font-text font-semibold  text-sm text-gray-600">
                    <Link href="/">
                        <a className="rounded-md hover:text-main-black hover:bg-main-teal-light/10 hover:drop-shadow-md px-4 py-1.5  transition delay-75 ease-in-out">
                            Home
                        </a>
                    </Link>
                    <Link href="/works">
                        <a className="rounded-md hover:text-main-black hover:bg-main-teal-light/10 hover:drop-shadow-md px-3 py-1.5  transition delay-75 ease-in-out">
                            Works
                        </a>
                    </Link>
                    <a
                        href="https://github.com/markjaylunas/next-portfolio"
                        className="rounded-md flex justify-center items-center gap-1  hover:text-main-black hover:bg-main-teal-light/10 hover:drop-shadow-md  px-3 py-1.5  transition delay-75 ease-in-out"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillGithub />
                        <span>View Source</span>
                    </a>
                    <Link href="/contact">
                        <a className="rounded-md  flex items-center justify-center gap-1 border-2 border-main-teal-light text-main-teal-light px-3 py-1 hover:scale-105  hover:bg-main-teal-light hover:text-white hover:drop-shadow-md transition delay-75 ">
                            <motion.div
                                animate={{
                                    rotate: [0, 0, 20, -20, 0],
                                    scale: [1, 1, 1.2, 1.2, 1],

                                    transition: {
                                        duration: 0.5,
                                        ease: 'easeInOut',
                                        times: [0, 0.2, 0.5, 0.8, 1],
                                        repeat: Infinity,
                                        repeatDelay: 5,
                                    },
                                }}
                            >
                                <EnvelopeIcon className="w-4 stroke-2" />
                            </motion.div>
                            Contact
                        </a>
                    </Link>
                </div>

                {/* Mobile Navigation Links */}
                <MobileMenu />
            </div>
        </nav>
    );
};

export default Navbar;
