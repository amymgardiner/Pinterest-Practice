import React from 'react'
import { Link} from "react-router-dom";
import { BsPinterest } from "react-icons/bs";
import ProfileImage from '../assets/img/Hermione.png';
import Pins from './Pins'

function Profile() {
	return (
		<div>
			
			<div className="flex flex-col items-center px-8 py-8 text-center profile">
				<div class="w-[7.5rem] aspect-square mb-4 profile--picture">
					<img src={ProfileImage} alt="Hermione Granger" className="object-contain rounded-[50%] aspect-square"/>
				</div>
				<h1 className="mb-4 text-4xl font-semibold">Hermione Granger</h1>
				<p className="text-[#5f5f5f] text-sm mb-2">@hermionejean · she/her</p>
				<p className="mb-2 text-base">I'm hoping to do some good in the world!</p>
				<p className="mb-2 text-base font-semibold">143 followers · 210 following</p>
			</div>

			<div className="flex items-center justify-between px-8 py-1">
				<div className="nav-header--icon">
					<Link to="https://www.pinterest.com/" target="_blank" rel="noreferrer" className="text-2xl text-[#e60023]">
						<BsPinterest/>
					</Link>
				</div>
				
				<div className="nav-header--home">
					<Link to="/" className="flex items-center h-12 px-4 text-center text-white bg-black rounded-3xl">Home</Link>
				</div>
			</div>

			<main>
				<Pins/>
			</main>

		</div>
	);
}

export default Profile;