import Masonry from 'react-masonry-css'

import CatBookMark from '../assets/img/cat book mark.jpg';
import Crookshanks from '../assets/img/crookshanks.gif';

function Cats() {

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
						<a href="https://78.media.tumblr.com/38f7c33442904fd023c4eb29a31d6526/tumblr_pf61p9Zp8B1xdf6boo3_500.jpg" target="_blank" rel="noreferrer">
							<img src={CatBookMark} alt="cat book mark with coffee and knitting"/>
						</a>
					</div>

					<div>
						<a href="https://media.tenor.com/lsEP3hNWkIQAAAAC/crookshanks-cat.gif" target="_blank" rel="noreferrer">
							<img src={Crookshanks} alt="my cat Crookshanks"/>
						</a>
					</div>
			</Masonry>
		</div>
	);
}

export default Cats;
