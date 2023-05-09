import React from 'react'
import { Link} from "react-router-dom";
import { BsPinterest } from "react-icons/bs";
// import ProfileImage from '../assets/img/Hermione.webp';
import Pins from './Pins'

function Profile() {
	return (
		<div>

			<header>
				<div></div>

				<div className="display flex">
					<div className="nav-header--icon">
						<Link to="https://www.pinterest.com/" target="_blank" rel="noreferrer"className="text-2xl text-[#e60023]">
							<BsPinterest/>
						</Link>
					</div>
					<button>
						<Link to="/">Home</Link>
					</button>
				</div>

			</header>

			<main>
				<Pins/>
			</main>

		</div>
	);
}

export default Profile;