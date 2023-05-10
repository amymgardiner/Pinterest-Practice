import Masonry from 'react-masonry-css'


import HogwartsLibrary from '../assets/img/library.jpg';
import SpellChart from '../assets/img/spells.jpg';
import TimeTurner from '../assets/img/time turner.gif';
import CatBookMark from '../assets/img/cat book mark.jpg';
import Books from '../assets/img/bookshelf.jpg';
import Library from '../assets/img/old library.jpg';
import MalfoyPunch from '../assets/img/how to punch.jpeg';
import Rose from '../assets/img/rose.jpg';
import HogwartsHistory from '../assets/img/hogswarts history.gif';

function Reading() {

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
						<a href="https://i.pinimg.com/originals/b4/17/fb/b417fb2e58a4042db024f0fb863e7618.jpg" target="_blank" rel="noreferrer">
							<img src={HogwartsLibrary} alt="Hogwarts library"/>
						</a>
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
						<a href="https://78.media.tumblr.com/38f7c33442904fd023c4eb29a31d6526/tumblr_pf61p9Zp8B1xdf6boo3_500.jpg" target="_blank" rel="noreferrer">
							<img src={CatBookMark} alt="cat book mark with coffee and knitting"/>
						</a>
					</div>

					<div>
						<a href="https://i.pinimg.com/originals/e7/df/3b/e7df3b0efbf2ef8baa1cde136970d753.gif" target="_blank" rel="noreferrer">
							<img src={HogwartsHistory} alt="Hogwarts Express train"/>
						</a>
					</div>

					<div>
						<a href="https://images.unsplash.com/photo-1600181982553-ce7d36051c01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" target="_blank" rel="noreferrer">
							<img src={Books} alt="bookshelf"/>
						</a>
					</div>

					<div>
						<a href="https://ids.si.edu/ids/deliveryService?id=NMAH-AHB2016q007096&max=1000" target="_blank" rel="noreferrer">
							<img src={MalfoyPunch} alt="how to throw a punch"/>
						</a>
						<div className="px-2 pb-4">
							<p className="text-sm">
								<strong>Punch pure-blood supremacy clear in the face.</strong>
							</p>
						</div>
					</div>

					<div>
						<a href="https://images.unsplash.com/photo-1613324766451-2d03b2ea8190?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" target="_blank" rel="noreferrer">
							<img src={Library} alt="an old library"/>
						</a>
					</div>

					<div>
						<a href="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1893&q=80" target="_blank" rel="noreferrer">
							<img src={Rose} alt="a red rose over book pages"/>
						</a>
					</div>
			</Masonry>
		</div>
	);
}

export default Reading;
