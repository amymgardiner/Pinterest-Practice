import React from 'react'
import { BsPinterest } from "react-icons/bs";
import ProfileImage from '../assets/img/Hermione.webp';

function Navbar() {
	return (
        <nav className="px-8 py-8 flex justify-between">
            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer" className="text-2xl text-[#fa0021]">
                <BsPinterest/>
            </a>
            <div>
                <img src={ProfileImage} alt="Hermione Granger" className="max-w-[1.5rem] max-h-[1.5rem] rounded-[50%]"/>
            </div>
        </nav>
	);
}

export default Navbar;