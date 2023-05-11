import React from 'react'
import { Link} from "react-router-dom";
import { BsPinterest } from "react-icons/bs";
import ProfileImage from '../assets/img/Hermione.png';

function Navbar(props) {

	const categories = ["Home", "Cats", "Gryffindor", "Hogwarts", "Nature", "Reading", "Wizarding World"];
	const { setCategoryelected } = props;

	return (
		<header className="px-8 py-2">

			<h1 className="text-base font-bold text-center p-2.5 page--title">Hermione Granger's Pinterest</h1>

			<nav className="flex items-center justify-between">
				<div className="nav-header--icon">
					<Link to="https://www.pinterest.com/" target="_blank" rel="noreferrer" className="text-2xl text-[#e60023]">
						<BsPinterest/>
					</Link>
				</div>
				{categories.map(category => (
					<button
					className="flex items-center h-12 px-4 text-center text-white bg-black rounded-3xl"
					key={category}
					onClick={() => setCategoryelected(category)}>
						{category}
					</button>
				))}

				<div className="nav-header--profile">
					<Link to="/profile">
						<img src={ProfileImage} alt="Hermione Granger" className="object-contain aspect-square rounded-[50%] w-[1.5rem]"/>
					</Link>
				</div>
			</nav>
			
		</header>
	);
}

export default Navbar;