import Masonry from 'react-masonry-css'

import Wand from '../assets/img/wand.jpg';
import HogwartsLibrary from '../assets/img/library.jpg';
import Classroom from '../assets/img/Hogwarts classroom.jpg';
import Gryffindor from '../assets/img/gryffindor crest.jpg';
import SpellChart from '../assets/img/spells.jpg';
import TimeTurner from '../assets/img/time turner.gif';
import CatBookMark from '../assets/img/cat book mark.jpg';
import Hogwarts from '../assets/img/Hogwarts.jpg';
import HogwartsExpress from '../assets/img/hogwarts express.jpg';
import Portraits from '../assets/img/hogwarts portraits.gif';
import KingsCross from '../assets/img/platform 9_3.4.jpg';
import SPEW from '../assets/img/spew.jpg';
import Books from '../assets/img/bookshelf.jpg';
import Writing from '../assets/img/quill ink paper.jpg';
import DumbledoreArmy from '../assets/img/dumbledores army.png';
import Potions from '../assets/img/Potions.png';
import RitaSkeeter from '../assets/img/rita skeeter.jpg';
import Hogsmeade from '../assets/img/hogsmeade.jpg';
import CommonRoom from '../assets/img/common room.jpg';
import PotionsClass from '../assets/img/potions classroom.jpg';
import DiagonAlley from '../assets/img/diagon alley.jpg';
import ScottishHighlands from '../assets/img/scotland.jpg';
import GreatHall from '../assets/img/great hall ceiling.gif';
import PrefectBadge from '../assets/img/prefect badge.jpg';
import Crookshanks from '../assets/img/crookshanks.gif';
import HogwartsLetter from '../assets/img/hogwarts letter.jpg';
import DefenceClass from '../assets/img/DADA.jpg';
import Library from '../assets/img/old library.jpg';
import MalfoyPunch from '../assets/img/how to punch.jpeg';
import YuleBall from '../assets/img/yule ball dress.jpg';

const breakpointColumnsObj = {
	default: 6,
	1100: 4,
	800: 3,
	500: 2
};

function Pins() {
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
					<a href="https://i.pinimg.com/originals/b4/17/fb/b417fb2e58a4042db024f0fb863e7618.jpg" target="_blank" rel="noreferrer">
						<img src={HogwartsLibrary} alt="Hogwarts library"/>
					</a>
					</div>

					<div>
						<a href="https://i.pinimg.com/564x/96/19/b0/9619b001999f3307e1265103ac7f7aae.jpg" target="_blank" rel="noreferrer">
							<img src={Classroom} alt="Hogwarts classroom"/>
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
						<a href="https://images.unsplash.com/photo-1553434320-e9f5757140b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80" target="_blank" rel="noreferrer">
							<img src={Hogwarts} alt="Hogwarts castle"/>
						</a>
					</div>


					<div>
					<a href="https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1241&q=80" target="_blank" rel="noreferrer">
						<img src={HogwartsExpress} alt="Hogwarts Express train"/>
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
							<p className="text-sm">
								<strong>Society for the Promotion of Elfish Welfare</strong><br></br>
								Founded in 1994
							</p>
						</div>
					</div>

					<div>
						<a href="https://images.unsplash.com/photo-1600181982553-ce7d36051c01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" target="_blank" rel="noreferrer">
							<img src={Books} alt="bookshelf"/>
						</a>
					</div>


					<div>
						<a href="https://images.musicalexpert.org/slideshow-mobile-small/quill-ink-pot-and-poetry-book.jpg" target="_blank" rel="noreferrer">
							<img src={Writing} alt="feather quill writing on parchment"/>
						</a>
					</div>

					<div>
						<a href="https://media.tenor.com/0oz7jnV9mGQAAAAC/dark-academia.gif" target="_blank" rel="noreferrer">
							<img src={Portraits} alt="moving portraits at Hogwarts"/>
						</a>
					</div>

					<div>
						<a href="https://i.pinimg.com/564x/6b/dd/7a/6bdd7ae3799ea894557c8366ddd8769f--drawing-room-living-room.jpg" target="_blank" rel="noreferrer">
							<img src={CommonRoom} alt="Gryffindor common room"/>
						</a>
					</div>

					<div>
						<a href="https://www.joelix.com/wp-content/uploads/2019/10/joelix-beetleinajar1.jpg" target="_blank" rel="noreferrer">
							<img src={RitaSkeeter} alt="beetle in jar"/>
						</a>
					</div>

					<div>
						<a href="https://i.pinimg.com/550x/14/4f/fa/144ffa08355e9af78f1032eee175ecb9.jpg" target="_blank" rel="noreferrer">
							<img src={DiagonAlley} alt="Diagon Alley"/>
						</a>
					</div>

					<div>
						<a href="https://i.pinimg.com/originals/97/29/fa/9729fafc2285411f24ddb05795938c72.jpg" target="_blank" rel="noreferrer">
							<img src={ScottishHighlands} alt="scottish highlands"/>
						</a>
					</div>

					<div>
						<a href="https://pbs.twimg.com/media/Ep7bTjAXYAAQ-rf.jpg" target="_blank" rel="noreferrer">
							<img src={Hogsmeade} alt="Hogsmeade"/>
						</a>
					</div>

					<div>
						<a href="https://potter10th.weebly.com/uploads/9/4/7/9/94794318/list-of-members-of-dumbledore-s-army-harry-potter-11720591-355-500_1.jpg" target="_blank" rel="noreferrer">
							<img src={DumbledoreArmy} alt="Dumbledore's Army"/>
						</a>
					</div>

					<div>
						<a href="https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.6,f_auto,h_460/vpsl0y8uphi5y3ljsuy3" target="_blank" rel="noreferrer">
							<img src={PrefectBadge} alt="my prefect badge"/>
						</a>
					</div>

					<div>
						<a href="https://images.unsplash.com/photo-1625685959735-77460dc42f06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" target="_blank" rel="noreferrer">
							<img src={PotionsClass} alt="potions classroom"/>
						</a>
					</div>

					<div>
						<a href="https://images.unsplash.com/photo-1598153346810-860daa814c4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" target="_blank" rel="noreferrer">
							<img src={HogwartsLetter} alt="my wand and Hogwarts letter"/>
						</a>
					</div>

					<div>
						<a href="https://images.ctfassets.net/usf1vwtuqyxm/2woRzI2EqwUCSU0kI2IwkG/25131825604b69815b4b124bc432bba3/MoodysClassroom_WB_F4_AlastorMoodysClassroomEmpty_Promo_080615_Land.jpg?fm=jpg&q=70&w=2560" target="_blank" rel="noreferrer">
							<img src={DefenceClass} alt="DADA classroom"/>
						</a>
					</div>

					<div>
						<a href="https://i.redd.it/1w1elt6x9me91.gif" target="_blank" rel="noreferrer">
							<img src={GreatHall} alt="Enchanted Ceiling in the Great Hall"/>
						</a>
					</div>

					<div>
						<a href="https://images.unsplash.com/photo-1613324766451-2d03b2ea8190?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" target="_blank" rel="noreferrer">
							<img src={Library} alt="an old library"/>
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
						<a href="https://media.tenor.com/lsEP3hNWkIQAAAAC/crookshanks-cat.gif" target="_blank" rel="noreferrer">
							<img src={Crookshanks} alt="my cat Crookshanks"/>
						</a>
					</div>

                    <div>
						<a href="https://live.staticflickr.com/8322/7963605912_b700e54647_b.jpg" target="_blank" rel="noreferrer">
							<img src={YuleBall} alt="my Yule Ball dress"/>
						</a>
					</div>
			</Masonry>
		</div>
	);
}

export default Pins;
