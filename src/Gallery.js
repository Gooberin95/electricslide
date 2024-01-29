import Carousel from 'react-bootstrap/Carousel';
import Original from './abrahamSeven.jpg';
import One from './abrahamOne.jpg';
import Two from './abrahamTwo.jpg';
import Three from './abrahamThree.jpg';

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

