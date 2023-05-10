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

	const [homeSelected, setHomeSelected] = useState();
	const [catsSelected, setCatsSelected] = useState(false);
	const [gryffindorSelected, setGryffindorSelected] = useState(false);
	const [hogwartsSelected, setHogwartsSelected] = useState(false);
	const [natureSelected, setNatureSelected] = useState(false);
	const [readingSelected, setReadingSelected] = useState(false);
	const [wizardSelected, setWizardSelected] = useState(false);

	return (
        <div>
            <Navbar setHomeSelected={setHomeSelected} setCatsSelected={setCatsSelected} setGryffindorSelected={setGryffindorSelected} setHogwartsSelected={setHogwartsSelected} setNatureSelected={setNatureSelected} setReadingSelected={setReadingSelected} setWizardSelected={setWizardSelected}/>
            <main>
				{homeSelected ? (<Pins/>) : catsSelected ? (<Cats/>) : gryffindorSelected ? (<Gryffindor/>) : hogwartsSelected ? (<HogwartsSchool/>) : natureSelected ? (<Nature/>) : readingSelected ? (<Reading/>) : wizardSelected ? (<WizardingWorld />) : (<Pins/>)}
            </main>
        </div>
	);
}

export default Home;