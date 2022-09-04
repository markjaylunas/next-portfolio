import { useState } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';

import { motionMenuButton } from '../../transitions/transMobileMenu';

const MobileMenu: React.FC = () => {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => setIsShowing((v) => !v);
    return (
        <Menu as="div" className="relative flex tablet:hidden">
            <Menu.Button
                className=" rounded-md p-1 w-8 border-1 border-main-teal-light text-main-teal-light stroke-2  transition  ease-in-out"
                onClick={toggle}
            >
                {isShowing ? (
                    <motion.div
                        variants={motionMenuButton}
                        initial="xMarkInitial"
                        animate="xMarkFinal"
                    >
                        <XMarkIcon />
                    </motion.div>
                ) : (
                    <motion.div
                        variants={motionMenuButton}
                        initial="barInitial"
                        animate="barFinal"
                    >
                        <Bars3Icon />
                    </motion.div>
                )}
            </Menu.Button>

            <Transition
                show={isShowing}
                enter="transition-all "
                enterFrom="-translate-y-14 opacity-0 text-transparent scale-0"
                enterTo="translate-y-0 opacity-100 text-main-black scale-100"
                leave="transition-all "
                leaveFrom="translate-y-0 opacity-100 text-main-black scale-100"
                leaveTo="-translate-y-14 opacity-0 text-transparent scale-0"
            >
                <Menu.Items className=" rounded-md absolute z-30  -right-0 top-10 flex flex-col items-start justify-center gap-1 backdrop-blur-md bg-white/95  shadow-md  w-[70vw]  p-4 font-semibold font-text">
                    <Menu.Item>
                        {({ active }) => (
                            <Link href="/">
                                <a
                                    className={` ${
                                        active &&
                                        'bg-main-teal-light text-white'
                                    } rounded-md w-full px-4  py-2 hover:bg-main-teal-light/20 transition-color ease-out`}
                                >
                                    Home
                                </a>
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <Link href="/works">
                                <a
                                    className={` ${
                                        active &&
                                        'bg-main-teal-light text-white'
                                    } rounded-md w-full px-4 py-2 hover:bg-main-teal-light/20 transition-color ease-out`}
                                >
                                    Works
                                </a>
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <Link href="/contact">
                                <a
                                    className={` ${
                                        active &&
                                        'ring-2 ring-main-teal-light/40 '
                                    } rounded-md w-full px-3 py-1.5 border-2 border-main-teal-light text-white hover:bg-main-teal-light/80 bg-main-teal-light text-center hover:cursor-pointer hover:ring-2 hover:ring-main-teal-light/40 transition-all delay-75 ease-in-out`}
                                >
                                    Contact
                                </a>
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                target="_blank"
                                href="https://github.com/markjaylunas"
                                rel="noopener noreferrer"
                                className={` ${
                                    active && 'ring-2 ring-main-teal-light/40'
                                } rounded-md flex items-center justify-center gap-2  w-full px-3 py-1.5 text-main-teal-light border-2 border-main-teal-light hover:text-white  hover:bg-main-teal-light/80 bg-transparent text-center hover:cursor-pointer  hover:ring-2 hover:ring-main-teal-light/40 transition-all delay-75 ease-in-out`}
                            >
                                <AiFillGithub />
                                <span>View Source</span>
                            </a>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default MobileMenu;
