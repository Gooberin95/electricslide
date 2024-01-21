import logo from './currentlogo.png';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Topnav() {

	return (
		<>
		<Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
		 <Container>
		 <Navbar.Brand style={{color: "#ff9900"}}>
		 <img alt="" src={logo} width="60"  height="60"/>
		 {' '}
	
		Current Connections
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav"/>
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="me-auto">
				<Nav.Link>
					<ScrollLink to="section1" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
					Section1
					</ScrollLink>
				</Nav.Link>
				<Nav.Link>
					<ScrollLink to="section2" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
					Section2
					</ScrollLink>
				</Nav.Link>
				<Nav.Link>
					<ScrollLink to="section3" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
					Section3
					</ScrollLink>
				</Nav.Link>
				<Nav.Link>
					<ScrollLink to="section4" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
					Section4
					</ScrollLink>
				</Nav.Link>

			</Nav>
		</Navbar.Collapse>
		
		 </Container>
		</Navbar>
		</>
	);
}
export default Topnav;
