import Masonry from 'react-masonry-css'

import RitaSkeeter from '../assets/img/rita skeeter.jpg';
import ScottishHighlands from '../assets/img/scotland.jpg';
import Rose from '../assets/img/rose.jpg';
import Otter from '../assets/img/otter.jpg';
import RedHead from '../assets/img/redhead.webp';

function Nature() {

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
						<a href="https://www.joelix.com/wp-content/uploads/2019/10/joelix-beetleinajar1.jpg" target="_blank" rel="noreferrer">
							<img src={RitaSkeeter} alt="beetle in jar"/>
						</a>
					</div>

					<div>
						<a href="https://i.pinimg.com/originals/97/29/fa/9729fafc2285411f24ddb05795938c72.jpg" target="_blank" rel="noreferrer">
							<img src={ScottishHighlands} alt="scottish highlands"/>
						</a>
					</div>

					<div>
						<a href="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1893&q=80" target="_blank" rel="noreferrer">
							<img src={Rose} alt="a red rose over book pages"/>
						</a>
					</div>

					<div>
						<a href="https://us.123rf.com/450wm/mrsveronik/mrsveronik2208/mrsveronik220800870/190900850-sporty-hiker-walk-mountains-on-river-bridge-redhead-traveler-look-summer-landscape-back-view-close.jpg?ver=6" target="_blank" rel="noreferrer">
							<img src={RedHead} alt="I like a certain redhead guy"/>
						</a>
					</div>

					<div>
						<a href="https://cdnb.artstation.com/p/assets/images/images/031/926/945/large/kim-williams-1bd6b6e7-0e00-4c86-916c-f9370e97901a.jpg?1605001265" target="_blank" rel="noreferrer">
							<img src={Otter} alt="my patronus is an otter"/>
						</a>
					</div>
			</Masonry>
		</div>
	);
}

export default Nature;
