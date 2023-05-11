import React, { useState } from 'react'
import { Link} from "react-router-dom";
import { BsPinterest } from "react-icons/bs";
import { HiPlus, HiMinus } from "react-icons/hi";
import ProfileImage from '../assets/img/Hermione.png';

function Navbar(props) {

	const categories = ["Cats", "Gryffindor", "Hogwarts", "Nature", "Reading", "Wizarding World"];
	const { setCategoryelected } = props;

	const refresh = () => window.location.reload(true)

	const [isActive, setIsActive] = useState(false);

	return (
		<header className="px-8 py-2">

			<div className="flex items-center justify-between pt-2 pb-6 nav-header">
				<div className="nav-header--icon">
					<Link to="https://www.pinterest.com/" target="_blank" rel="noreferrer" className="text-2xl text-[#e60023]">
						<BsPinterest/>
					</Link>
				</div>

				<h1 className="text-base font-bold text-center p-2.5 page--title">Hermione Granger's Pinterest</h1>

				<div className="nav-header--profile">
					<Link to="/profile">
						<img src={ProfileImage} alt="Hermione Granger" className="object-contain aspect-square rounded-[50%] w-[1.5rem]"/>
					</Link>
				</div>
			</div>

			<nav className="grid items-center grid-cols-7 gap-6 px-8 lg:grid-cols-4 lg:gap-1 nav-header__mobile">
				{categories.map(category => (
					<button
					className="flex items-center justify-center h-12 px-4 text-center text-black hover:bg-[#e2e2e2] bg-[#f0f0f0] rounded-3xl nav-header--button"
					key={category}
					onClick={() => setCategoryelected(category)}>
						{category}
					</button>
				))}

				<div className="nav-header--icon">
					<Link to="https://www.pinterest.com/" target="_blank" rel="noreferrer" className="text-2xl text-[#e60023]">
						<BsPinterest/>
					</Link>
				</div>

				<div className="mobile-navigation">
					<div
					className="text-3xl mobile-navigation__button"
					onClick={() => setIsActive(!isActive)}>{isActive ? <HiMinus/> : <HiPlus/>}</div>
					
					{isActive &&
					<ul>
						{categories.map(category => (
						<li
						className="bg-[#f0f0f0] hover:bg-[#e2e2e2] py-1 text-center px-2"
						key={category}
						onClick={() => setCategoryelected(category)}>{category}</li>
						))}
					</ul>}
				</div>

				<div className="nav-header--home">
					<Link
					to="/"
					className="flex items-center justify-center h-12 px-4 text-center text-white bg-black rounded-3xl"
					onClick={refresh}>Home</Link>
				</div>

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