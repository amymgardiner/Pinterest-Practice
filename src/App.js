import React from 'react'
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
  default: 6,
  1100: 4,
  700: 3,
  500: 2
};

function App() {
  return (
<Masonry
  breakpointCols={breakpointColumnsObj}
  className="main-masonry-grid"
  columnClassName="main-masonry-grid_column">
</Masonry>
  );
}

export default App;
