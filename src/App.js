import React from 'react'
import Masonry from 'react-masonry-css'
import Wand from './/assets/img/wand.jpg';
import Library from './/assets/img/library.jpg';
import Gryffindor from './/assets/img/gryffindor crest.jpg';
import SpellChart from './/assets/img/spells.jpg';
import TimeTurner from './/assets/img/time turner.gif';
import CatBookMark from './/assets/img/cat book mark.jpg';
import SPEW from './/assets/img/spew.jpg';
import Writing from './/assets/img/quill ink paper.jpg';
import Potions from './/assets/img/Potions.png';
import RitaSkeeter from './/assets/img/rita skeeter.jpg';
import KingsCross from './/assets/img/platform 9_3.4.jpg';

const breakpointColumnsObj = {
	default: 6,
	1100: 4,
	800: 3,
	500: 2
};

function App() {
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
							<p>
								Wood - Vine <br></br>
								Core - Dragon heartstring <br></br>
								Length - 10¾"
							</p>
						</div>
					</div>

					<div>
					<a href="https://i.pinimg.com/originals/b4/17/fb/b417fb2e58a4042db024f0fb863e7618.jpg" target="_blank" rel="noreferrer">
						<img src={Library} alt="Hogwarts library"/>
					</a>
					</div>

					<div>
						<a href="https://www.whatspaper.com/wp-content/uploads/2021/12/hd-gryffindor-wallpaper-whatspaper-12.jpg" target="_blank" rel="noreferrer">
							<img src={Gryffindor} alt="Gryffindor crest over common room"/>
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
						<a href="https://i.pinimg.com/originals/6b/a0/63/6ba0638d76cac59341df64848512ab0a.png" target="_blank" rel="noreferrer">
							<img src={Potions} alt="potions class at Hogwarts"/>
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
							<p>
								Society for the Promotion of Elfish Welfare <br></br>
								Founded in 1994
							</p>
						</div>
					</div>

					<div>
						<a href="https://images.musicalexpert.org/slideshow-mobile-small/quill-ink-pot-and-poetry-book.jpg" target="_blank" rel="noreferrer">
							<img src={Writing} alt="feather quill writing on parchment"/>
						</a>
					</div>

					<div>
						<a href="https://www.joelix.com/wp-content/uploads/2019/10/joelix-beetleinajar1.jpg" target="_blank" rel="noreferrer">
							<img src={RitaSkeeter} alt="beetle in jar"/>
						</a>
					</div>
			</Masonry>
		</div>
	);
}

export default App;
