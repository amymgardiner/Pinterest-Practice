import React from 'react'
import { Link} from "react-router-dom";
import { BsPinterest } from "react-icons/bs";
import ProfileImage from '../assets/img/Hermione.png';

function Navbar(props) {

	const {
		setHomeSelected,
		setCatsSelected,
		setGryffindorSelected,
		setHogwartsSelected,
		setNatureSelected,
		setReadingSelected,
		setWizardSelected,
	} = props;

	return (
		<header className="px-8 py-2">

			<h1 className="text-base font-bold text-center p-2.5 page--title">Hermione Granger's Pinterest</h1>

			<nav className="flex justify-between items-center">
				<div className="nav-header--icon">
					<Link to="https://www.pinterest.com/" target="_blank" rel="noreferrer" className="text-2xl text-[#e60023]">
						<BsPinterest/>
					</Link>
				</div>

				<button className="text-white bg-black text-center h-12 px-4 rounded-3xl flex items-center" onClick={() => setHomeSelected(true)}>
					Home
				</button>

				<button className="text-white bg-black text-center h-12 px-4 rounded-3xl flex items-center" onClick={() => setCatsSelected(true)}>
					Cats
				</button>

				<button className="text-white bg-black text-center h-12 px-4 rounded-3xl flex items-center" onClick={() => setGryffindorSelected(true)}>
					Gryffindor
				</button>

				<button className="text-white bg-black text-center h-12 px-4 rounded-3xl flex items-center" onClick={() => setHogwartsSelected(true)}>
					Hogwarts
				</button>

				<button className="text-white bg-black text-center h-12 px-4 rounded-3xl flex items-center" onClick={() => setNatureSelected(true)}>
					Nature
				</button>

				<button className="text-white bg-black text-center h-12 px-4 rounded-3xl flex items-center" onClick={() => setReadingSelected(true)}>
					Reading
				</button>

				<button className="text-white bg-black text-center h-12 px-4 rounded-3xl flex items-center" onClick={() => setWizardSelected(true)}>
					Wizarding World
				</button>

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