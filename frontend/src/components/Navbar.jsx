import {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaAlignJustify } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/', current: location.pathname === '/' },
        { name: 'Products', href: '#', current: location.pathname === '#' }
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <>
            <div className='min-h-full'>
                <nav className='bg-gray-800 fixed top-0 left-0 right-0 z-10'>
                    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                        <div className='flex h-16 items-center justify-between'>
                            <div className='flex items-center'>
                                <div className='flex-shrink-0'>
                                    <img
                                        className="h-8 w-8"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="blog"
                                    />
                                </div>
                                <div className='hidden md:block'>
                                    <div className='ml-10 flex items-baseline space-x-4'>
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className='hidden md:block'>
                                <div className='ml-4 flex items-center md:ml-6'>
                                    <a href="/login" className='rounded-md bg-gradient-to-r from-blue-600 to-purple-600 font-semibold px-3 py-2 text-white hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                                        Login
                                    </a>

                                </div>
                            </div>
                            <div className='-mr-2 flex md:hidden'>
                                {/*relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800*/}
                                <button className='relative inline-flex justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                                        onClick={() => setOpen(!open)}
                                >
                                    <span className='absolute -inset-0.5'/>
                                    <span className='sr-only'>Open Main Menu</span>
                                    {open ? (
                                        <IoCloseOutline className='block h-6 w-6' aria-hidden="true"/>
                                    ):(
                                        <FaAlignJustify className='block h-6 w-6' aria-hidden="true"/>
                                    )}
                                </button>
                            </div>
                        </div>

                    </div>
                    {open ? (<div className='md:hidden'>
                            <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white','block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                            </div>

                        </div>
                    ):null}
                </nav>
            </div>
        </>
    );
};

export default Navbar;