import Masonry from 'react-masonry-css'

import Gryffindor from '../assets/img/gryffindor crest.jpg';
import CommonRoom from '../assets/img/common room.jpg';
import PrefectBadge from '../assets/img/prefect badge.jpg';

function Pins() {

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
						<a href="https://i.pinimg.com/564x/6b/dd/7a/6bdd7ae3799ea894557c8366ddd8769f--drawing-room-living-room.jpg" target="_blank" rel="noreferrer">
							<img src={CommonRoom} alt="Gryffindor common room"/>
						</a>
					</div>

					<div>
						<a href="https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.6,f_auto,h_460/vpsl0y8uphi5y3ljsuy3" target="_blank" rel="noreferrer">
							<img src={PrefectBadge} alt="my prefect badge"/>
						</a>
					</div>

					<div>
						<a href="https://www.whatspaper.com/wp-content/uploads/2021/12/hd-gryffindor-wallpaper-whatspaper-12.jpg" target="_blank" rel="noreferrer">
							<img src={Gryffindor} alt="Gryffindor crest over common room"/>
						</a>
					</div>
			</Masonry>
		</div>
	);
}

export default Pins;
