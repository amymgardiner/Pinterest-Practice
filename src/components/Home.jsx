import React from 'react'
import Navbar from './Navbar'
import Pins from './Pins'

const Home = () => {
	return (
        <div>
            <Navbar/>
            <main>
                <Pins/>
            </main>
        </div>
	);
}

export default Home;
