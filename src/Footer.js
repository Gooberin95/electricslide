import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { FaBoltLightning } from "react-icons/fa6";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


function Footer() {
	    return (
		            <>
		                <div className="fixed-bottom">
		                    <Navbar style={{ backgroundColor: "rgb(43,48,25)", height: "60px" }}>
		                        <Container className="justify-content-between align-items-center">
		                            <Nav.Link style={{ marginRight: "20px", marginLeft: "20px", color: "white" }} href="#">123-123-1234</Nav.Link>
		                            <Nav.Link style={{ marginRight: "20px", marginLeft: "20px", color: "white" }} href="#"> © 2024 Visionary GC LLC. All Rights Reserved <FaBoltLightning /></Nav.Link>
		                            <Nav.Link style={{ marginRight: "20px", marginLeft: "20px", color: "white" }} href="#">helloworld@outlook.com</Nav.Link>
		                        </Container>
		                    </Navbar>
		                </div>
		            </>
		        );
}

export default Footer;

