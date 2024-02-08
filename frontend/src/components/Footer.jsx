import React from 'react';

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className='mt-6 mx-auto max-w-7xl px-4 sm:px-6 bg-white lg:px-8 border-t border-gray-200'>
                <div className='py-8 sm:px-0'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                        <div className='mb-4 sm:mb-0 mx-2'>
                            <img className='h-8 w-8 block' src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                            <p className=' my-2'>You can Write here anything like you story,book,article.Please give your feedback also me</p>
                            <div className='flex gap-4'>
                                <a className='inline-flex text-center p-2 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white'  href="https://www.facebook.com"><FaFacebookF  /></a>
                                <a className='inline-flex text-center p-2 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white' href="https://www.facebook.com"><FaXTwitter /></a>
                                <a className='inline-flex text-center p-2 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white' href="https://www.facebook.com"><FaLinkedinIn /></a>
                                <a className='inline-flex text-center p-2 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white' href="https://www.facebook.com"><AiFillInstagram /></a>
                                <a className='inline-flex text-center p-2 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white' href="https://www.facebook.com"><FaGithub /></a>
                            </div>
                        </div>
                        <div className='mx-2'>
                            <h3 className="text-base font-medium">Features</h3>
                            <a className='block my-2' href="#">Style Guide</a>
                            <a className='block my-2' href="#">Tags</a>
                            <a className='block my-2' href="#">Authors</a>
                        </div>
                        <div className='mx-2'>
                            <h3 className="text-base font-medium ">Pages</h3>
                            <a className='block my-2' href="#">Membership</a>
                            <a className='block my-2' href="#">Sign in</a>
                            <a className='block my-2' href="#">Sign up</a>
                        </div>
                        <div>
                            <h3 className="text-base font-medium ">Community</h3>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;