import React from 'react'
import { Link} from "react-router-dom";
import { BsPinterest } from "react-icons/bs";
import ProfileImage from '../assets/img/Hermione.webp';

function Navbar() {
	return (
		<nav className="px-8 py-2 flex justify-between nav-header">
			<div className="nav-header--icon">
				<Link to="https://www.pinterest.com/" target="_blank" rel="noreferrer" className="text-2xl text-[#e60023]">
					<BsPinterest/>
				</Link>
			</div>
			<h1 className="text-base font-bold text-center p-2.5">Hermione Granger's Pinterest</h1>
			<div className="nav-header--profile">
				<Link to="/profile">
					<img src={ProfileImage} alt="Hermione Granger" className="object-contain aspect-square rounded-[50%] w-[1.5rem]"/>
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;