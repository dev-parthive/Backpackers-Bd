import React from 'react';
import {BsFacebook, BsYoutube } from 'react-icons/bs';
const Footer = () => {
	console.log(new Date().getFullYear())
    return (
        <div>
         <footer className="dark:bg-gray-800 text-sm dark:text-gray-50 py-4">
		<div className='flex items-center justify-center'>
		<p className='mr-2'>Copyright &copy; {new Date().getFullYear()} - All right reserved by </p>
		<span className='text-sm font-medium items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 md:mb-0'>BackPackers</span> 
		</div>
		<div className='flex items-center justify-center mt-4 text-xl'>
			<p className=''>Socials</p>

		<div className='flex justify-between items-center '>
			<p className='ml-3 text-sm text-[#3b5998]'><BsFacebook className='text-2xl'></BsFacebook></p>
			<p className='ml-3 text-sm text-[#FF0000]'><BsYoutube className='text-2xl'></BsYoutube></p>

		</div>
		</div>
</footer>
        </div>
    );
};

export default Footer;