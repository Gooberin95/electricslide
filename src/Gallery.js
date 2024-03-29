import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import React from 'react';
import deckfix from './deckfix.jpeg';
import abrahamOne from './abrahamOne.jpg';
import abrahamThree from './abrahamThree.jpg';
import abrahamFive from './abrahamFive.jpg';
import eleven1 from './thumbnail_image45.jpg';
import eleven2 from './thumbnail_image42.jpg';
import eleven3 from './thumbnail_image41.jpg';
import eleven4 from './thumbnail_image39.jpg';
import eleven5 from './thumbnail_image38.jpg';
import eleven6 from './thumbnail_image37.jpg';
import eleven7 from './thumbnail_image36.jpg';
import eleven8 from './thumbnail_image35.jpg';
import eleven9 from './kitchen.jpg';
import eleven10 from './thumbnail_image33.jpg';
import thirtytwo from './thumbnail_image32.jpg';
import thirtyone from './thumbnail_image31.jpg';
import thirty from './thumbnail_image30.jpg';

import twentynine from './thumbnail_image29.jpg';
import twentyeight from './thumbnail_image28.jpg';
import twentyseven from './thumbnail_image27.jpg';
import twentysix from './thumbnail_image26.jpg';
import twentyfive from './thumbnail_image25.jpg';
import twentyfour from './thumbnail_image24.jpg';
import thirteen from './thumbnail_image13.jpg';
import tweleve from './thumbnail_image12.jpg';
import eleven11 from './thumbnail_image11.jpg';
import fourtysix from './thumbnail_image46.jpg';
import fourtyseven from './thumbnail_image47.jpg';



const imageList = [
	  deckfix,
	  abrahamOne,
	  abrahamThree,
	  abrahamFive,
	  eleven1,
	  eleven2,
	  eleven3,
	  eleven4,
	  eleven5,
	  eleven6,
	  eleven7,
	  eleven8,
	  eleven9,
	  eleven10,
	  thirtytwo,
	  thirtyone,
	  thirty,
	  twentynine,
	  twentyeight,
	  twentyseven,
	  twentysix,
	  twentyfive,
	  twentyfour,
	  thirteen,
	  tweleve,
	  eleven11,
	  fourtysix,
	  fourtyseven
];
	function Gallery() {
		  const myStyle = {
			      height: '80%',
			      width: '80%', 
			      border: "white"
			     
			    };
		



	return (
				    <>
		
		<Container fluid className="d-flex justify-content-center align-items-center" style={{ paddingTop: "20px", paddingBottom: "20px", backgroundColor: "#f1f1f1"}}>
				      <Carousel fade data-bs-theme="dark"  id="section4" style={{width: "70%", height: "70%"}}>
					{imageList.map((imageUrl, index) => (
							  <Carousel.Item key={index} interval={1000}>
							    <img className="mx-auto d-block" style={myStyle} src={imageUrl} alt={`Slide ${index + 1}`} />
							  </Carousel.Item>
							))}
				      </Carousel>
		</Container>
				    </>
				  );
	}
export default Gallery;
