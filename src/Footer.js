import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { SiUpwork } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { RiTwitterXLine } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Footer() {
	    return (
		            <>
		                <div className="fixed-bottom">
		                    <Navbar style={{ backgroundColor: "rgb(43,48,53)", height: "60px" }}>
		                        <Container className="justify-content-between align-items-center">
		                            <Nav.Link style={{ marginRight: "20px", marginLeft: "20px", color: "white" }} href="#">123-123-1234</Nav.Link>
		                            <Nav.Link style={{ marginRight: "20px", marginLeft: "20px", color: "white" }} href="#"><SiUpwork /></Nav.Link>
		                            <Nav.Link style={{ marginRight: "20px", marginLeft: "20px", color: "white" }} href="#"><FaLinkedin /></Nav.Link>
		                            <Nav.Link style={{ marginRight: "20px", marginLeft: "20px", color: "white" }} href="#"><RiTwitterXLine /></Nav.Link>
		                            <Nav.Link style={{ marginRight: "20px", marginLeft: "20px", color: "white" }} href="#"><FiGithub /></Nav.Link>
		                            <Nav.Link style={{ marginRight: "20px", marginLeft: "20px", color: "white" }} href="#">helloworld@outlook.com</Nav.Link>
		                        </Container>
		                    </Navbar>
		                </div>
		            </>
		        );
}

export default Footer;

