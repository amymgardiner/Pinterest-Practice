import React from 'react'
import { Link} from "react-router-dom";
import { BsPinterest } from "react-icons/bs";
import ProfileImage from '../assets/img/Hermione.png';
import Pins from './Pins'

function Profile() {
	return (
		<div>

			<header class="px-8 py-2.5">
				<nav className="flex justify-between nav-header items-center">
					<div className="nav-header--icon">
						<Link to="https://www.pinterest.com/" target="_blank" rel="noreferrer" className="text-2xl text-[#e60023]">
							<BsPinterest/>
						</Link>
					</div>

					<form className="flex items-center grow nav--search">   
						<div className="relative grow">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg aria-hidden="true" class="w-5 h-5 text-[#5f5f5f]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
							</div>
							<input type="text" className="bg-[#f0f0f0] text-[#333333] text-sm rounded-3xl block w-full pl-10 p-4" placeholder="Search"/>
						</div>
					</form>

					<div className="nav-header--home">
						<Link to="/" className="text-white bg-black text-center h-12 px-4 rounded-3xl flex items-center">Home</Link>
					</div>
				</nav>
			</header>

			<div className="flex flex-col items-center px-8 py-8 text-center profile">
				<div class="w-[7.5rem] aspect-square mb-4 profile--picture">
					<img src={ProfileImage} alt="Hermione Granger" className="object-contain rounded-[50%] aspect-square"/>
				</div>
				<h1 className="text-4xl font-semibold mb-4">Hermione Granger</h1>
				<p className="text-[#5f5f5f] text-sm mb-2">@hermionejean · she/her</p>
				<p className="text-base mb-2">I'm hoping to do some good in the world!</p>
				<p className="font-semibold text-base mb-2">143 followers · 210 following</p>
			</div>

			<div className="flex items-center nav-header__mobile py-1 px-8">
				<div className="nav-header--icon">
					<Link to="https://www.pinterest.com/" target="_blank" rel="noreferrer" className="text-2xl text-[#e60023]">
						<BsPinterest/>
					</Link>
				</div>
				
				<div className="nav-header--home">
					<Link to="/" className="text-white bg-black text-center h-12 px-4 rounded-3xl flex items-center">Home</Link>
				</div>
			</div>

			<main>
				<Pins/>
			</main>

		</div>
	);
}

export default Profile;