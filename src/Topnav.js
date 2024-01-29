import { MdConstruction } from "react-icons/md";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { BsTelephone } from "react-icons/bs";
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Topnav() {

		return (
					<>
					<Navbar sticky="top" expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
					 <Container>
					 <Navbar.Brand style={{color: "#ff9900", fontFamily: "Trirong, serif"}}>
					 <img alt="" src=< MdConstruction/> width="60"  height="60" className="d-inline-block align-center"/>
			{' '} Visionary GC LLC	
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link>
								<ScrollLink to="section1" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">
								About
								</ScrollLink>
							</Nav.Link>
							<Nav.Link>
								<ScrollLink to="section2" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
								Services
								</ScrollLink>
							</Nav.Link>
							<Nav.Link>
								<ScrollLink to="section3" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
								Estimates
								</ScrollLink>
							</Nav.Link>
							<Nav.Link>
								<ScrollLink to="section4" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">
								Gallery
								</ScrollLink>
							</Nav.Link>
						
						</Nav>
			<Nav style={{marginRight: "200px", fontSize: "25px"}} >
			<Nav.Link style={{color: "white"}}><BsTelephone/> 123 343 5212</Nav.Link>
			</Nav>
					</Navbar.Collapse>
					
					 </Container>
					</Navbar>
					</>
				);
}
export default Topnav;
