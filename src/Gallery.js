import Carousel from 'react-bootstrap/Carousel';
import Original from './Original.png';
import One from './media/electricone.jpg';
import Two from './media/electrictwo.jpg';
import Three from './media/electricthree.jpg';

import CurrentLogo from './currentlogo.png';  // Make sure the import is correct

function Gallery() {
	const myStyle = {
		
		height: "500px",
		width: "50%",
		border: "solid"
	};
	return (
	<>
	        <Carousel data-bs-theme="dark">
	          <Carousel.Item>
		        <img className="mx-auto d-block" style={myStyle}  src={One} alt="First slide" />

	          </Carousel.Item>
	          <Carousel.Item>

	      <img className="mx-auto d-block" style={myStyle} src={Two} alt="First slide" />
		</Carousel.Item>
	          <Carousel.Item>
	       	
	     <img className="mx-auto d-block "  style={myStyle} src={Three} alt="First slide" />
       
	          </Carousel.Item>
	        </Carousel>
		</>
	  );
}

export default Gallery;

