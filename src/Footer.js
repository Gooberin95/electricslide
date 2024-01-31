import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { SiNextdoor } from 'react-icons/si';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

function Footer() {
	    return (
		            <>
		                 
		                    <Navbar style={{ height: "60px", marginTop: "100px" }} bg="dark" data-bs-theme="dark">
		                        <Container className="justify-content-center">
		    <Nav>
		                            <Nav.Link style={{ marginRight: "20px", marginLeft: "20px", color: "white" }} href="#"><FaInstagram/></Nav.Link>
		                            <Nav.Link style={{ marginRight: "20px", marginLeft: "20px", color: "white" }} href="#"> <FaFacebook/></Nav.Link>
		                            <Nav.Link style={{ marginRight: "20px", marginLeft: "20px", color: "white" }} href="#"><SiNextdoor/></Nav.Link>
		    </Nav>
		                        </Container>
		                    </Navbar>
		            </>
		        );
}

export default Footer;

