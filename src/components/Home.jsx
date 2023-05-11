import React, { useState } from 'react'
import Navbar from './Navbar'
import Pins from './Pins'
import Cats from './Cats'
import Gryffindor from './Gryffindor'
import HogwartsSchool from './Hogwarts'
import Nature from './Nature'
import Reading from './Reading'
import WizardingWorld from './WizardingWorld'

const Home = () => {

	const [categorySelected, setCategoryelected] = useState("");

	return (
        <div>
            <Navbar setCategoryelected={setCategoryelected}/>
            <main>

				{categorySelected === "" && (
					<Pins />
				)} 
				{categorySelected === "Home" && (
					<Pins />
				)} 
				{categorySelected === "Cats" && (
					<Cats />
				)} 
				{categorySelected === "Gryffindor" && (
					<Gryffindor />
				)} 
				{categorySelected === "Hogwarts" && (
					<HogwartsSchool />
				)} 
				{categorySelected === "Nature" && (
					<Nature />
				)} 
				{categorySelected === "Reading" && (
					<Reading />
				)} 
				{categorySelected === "Wizarding World" && (
					<WizardingWorld />
				)}
            
			</main>
        </div>
	);
}

export default Home;