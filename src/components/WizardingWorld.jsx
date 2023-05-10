import Masonry from 'react-masonry-css'

import Wand from '../assets/img/wand.jpg';
import SpellChart from '../assets/img/spells.jpg';
import TimeTurner from '../assets/img/time turner.gif';
import Hogwarts from '../assets/img/Hogwarts.jpg';
import HogwartsExpress from '../assets/img/hogwarts express.jpg';
import Portraits from '../assets/img/hogwarts portraits.gif';
import KingsCross from '../assets/img/platform 9_3.4.jpg';
import SPEW from '../assets/img/spew.jpg';
import RitaSkeeter from '../assets/img/rita skeeter.jpg';
import Hogsmeade from '../assets/img/hogsmeade.jpg';
import DiagonAlley from '../assets/img/diagon alley.jpg';
import GreatHall from '../assets/img/great hall ceiling.gif';
import Crookshanks from '../assets/img/crookshanks.gif';
import HogwartsLetter from '../assets/img/hogwarts letter.jpg';
import HogwartsHistory from '../assets/img/hogswarts history.gif';
import Wands from '../assets/img/wands up.gif';

function WizardingWorld() {

	const breakpointColumnsObj = {
		default: 6,
		1100: 4,
		800: 3,
		500: 2
	};
	
	return (
		<div className="wrapper">
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="main-masonry-grid"
				columnClassName="main-masonry-grid_column">

					<div>
						<a href="https://i.pinimg.com/originals/9c/e0/70/9ce070c54e56fa5b53a8498bead0f687.jpg" target="_blank" rel="noreferrer">
							<img src={Wand} alt="holding up wand"/>
						</a>
						<div className="px-2 pb-4">
							<p className="text-sm">
								<strong>My wand</strong><br></br>
								Wood - Vine <br></br>
								Core - Dragon heartstring <br></br>
								Length - 10¾"
							</p>
						</div>
					</div>

					<div>
						<a href="https://m.media-amazon.com/images/I/91XAHhYBGeL.jpg" target="_blank" rel="noreferrer">
							<img src={SpellChart} alt="Charms class spell chart"/>
						</a>
					</div>

					<div>
						<a href="https://media.tenor.com/YdARC8sTUeUAAAAC/time-turner-harry-potter.gif" target="_blank" rel="noreferrer">
							<img src={TimeTurner} alt="time turner"/>
						</a>
					</div>

					<div>
						<a href="https://images.unsplash.com/photo-1553434320-e9f5757140b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80" target="_blank" rel="noreferrer">
							<img src={Hogwarts} alt="Hogwarts castle"/>
						</a>
					</div>

					<div>
						<a href="https://i.pinimg.com/originals/e7/df/3b/e7df3b0efbf2ef8baa1cde136970d753.gif" target="_blank" rel="noreferrer">
							<img src={HogwartsHistory} alt="Hogwarts Express train"/>
						</a>
					</div>

					<div>
						<a href="https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" target="_blank" rel="noreferrer">
							<img src={KingsCross} alt="platform 9 3/4"/>
						</a>
					</div>

					<div>
						<a href="https://i.pinimg.com/564x/0a/11/e2/0a11e20290c6d9c24a7d3f83b4fc399d--harry-potter-pins-badge-harry-potter-patches.jpg" target="_blank" rel="noreferrer">
							<img src={SPEW} alt="S.P.E.W. badge"/>
						</a>
						<div className="px-2 pb-4">
							<p className="text-sm">
								<strong>Society for the Promotion of Elfish Welfare</strong><br></br>
								Founded in 1994
							</p>
						</div>
					</div>

					<div>
						<a href="https://i.redd.it/1w1elt6x9me91.gif" target="_blank" rel="noreferrer">
							<img src={GreatHall} alt="Enchanted Ceiling in the Great Hall"/>
						</a>
					</div>

					<div>
						<a href="https://www.joelix.com/wp-content/uploads/2019/10/joelix-beetleinajar1.jpg" target="_blank" rel="noreferrer">
							<img src={RitaSkeeter} alt="beetle in jar"/>
						</a>
					</div>

					<div>
						<a href="https://media.tenor.com/0oz7jnV9mGQAAAAC/dark-academia.gif" target="_blank" rel="noreferrer">
							<img src={Portraits} alt="moving portraits at Hogwarts"/>
						</a>
					</div>

					<div>
						<a href="https://pbs.twimg.com/media/Ep7bTjAXYAAQ-rf.jpg" target="_blank" rel="noreferrer">
							<img src={Hogsmeade} alt="Hogsmeade"/>
						</a>
					</div>

					<div>
						<a href="https://i.pinimg.com/550x/14/4f/fa/144ffa08355e9af78f1032eee175ecb9.jpg" target="_blank" rel="noreferrer">
							<img src={DiagonAlley} alt="Diagon Alley"/>
						</a>
					</div>

					<div>
						<a href="https://images.unsplash.com/photo-1598153346810-860daa814c4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" target="_blank" rel="noreferrer">
							<img src={HogwartsLetter} alt="my wand and Hogwarts letter"/>
						</a>
					</div>

					<div>
						<a href="https://media.tenor.com/lsEP3hNWkIQAAAAC/crookshanks-cat.gif" target="_blank" rel="noreferrer">
							<img src={Crookshanks} alt="my cat Crookshanks"/>
						</a>
					</div>

					<div>
						<a href="https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1241&q=80" target="_blank" rel="noreferrer">
							<img src={HogwartsExpress} alt="Hogwarts Express train"/>
						</a>
					</div>

					<div>
						<a href="https://media.tenor.com/X_lfVUqbey8AAAAC/hp-harry-potter.gif" target="_blank" rel="noreferrer">
							<img src={Wands} alt="wands up for Dumbledore"/>
						</a>
					</div>
			</Masonry>
		</div>
	);
}

export default WizardingWorld;
