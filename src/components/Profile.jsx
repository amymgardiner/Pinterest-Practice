import React from 'react'
import { Link} from "react-router-dom";
import { BsPinterest } from "react-icons/bs";
import ProfileImage from '../assets/img/Hermione.png';
import Pins from './Pins'

function Profile() {
	return (
		<div>

			<div className="display flex items-center px-8 py-2 justify-between">
				<div className="nav-header--icon">
					<Link to="https://www.pinterest.com/" target="_blank" rel="noreferrer"className="text-2xl text-[#e60023]">
						<BsPinterest/>
					</Link>
				</div>
				<div className="nav-header--home">
					<Link to="/" className="text-white bg-black text-center h-12 px-4 rounded-3xl flex items-center">Home</Link>
				</div>
			</div>

			<div className="flex flex-col items-center px-8 py-8 text-center">
				<div class="w-[7.5rem] aspect-square mb-4 profile--picture">
					<img src={ProfileImage} alt="Hermione Granger" className="object-contain rounded-[50%] aspect-square"/>
				</div>
				<h1 className="text-4xl font-semibold mb-4">Hermione Granger</h1>
				<p className="text-[#5f5f5f] text-sm mb-2">@hermionejean · she/her</p>
				<p className="text-base mb-2">I'm hoping to do some good in the world!</p>
				<p className="font-semibold text-base mb-2">143 followers · 210 following</p>

			</div>

			<main>
				<Pins/>
			</main>

		</div>
	);
}

export default Profile;