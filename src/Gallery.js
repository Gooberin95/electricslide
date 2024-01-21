import Carousel from 'react-bootstrap/Carousel';
import Original from './Original.png';
import Sheep from './sheep.png';
import CurrentLogo from './currentlogo.png';  // Make sure the import is correct

function Gallery() {
	return (
	<>
	        <Carousel>
	          <Carousel.Item>
			<img src={Sheep} alt="Hello"/>	
	          </Carousel.Item>
	          <Carousel.Item>
				<img src={Sheep}/>	

	          </Carousel.Item>
	          <Carousel.Item>
	       	
	            <img src={Sheep} alt="First slide" />
       
	          </Carousel.Item>
	        </Carousel>
		</>
	  );
}

export default Gallery;

