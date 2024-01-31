import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { FaBoltLightning } from "react-icons/fa6";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


function Footer() {
	    return (
		            <>
		                
		                    <Navbar style={{ backgroundColor: "rgb(43,48,25)", height: "60px", marginTop: "100px" }}>
		                        <Container className="justify-content-between align-items-center">
		                            <Nav.Link style={{ marginRight: "20px", marginLeft: "20px", color: "white" }} href="#">206-945-1830</Nav.Link>
		                            <Nav.Link style={{ marginRight: "20px", marginLeft: "20px", color: "white" }} href="#"> © 2024 Visionary GC LLC. All Rights Reserved <FaBoltLightning /></Nav.Link>
		                            <Nav.Link style={{ marginRight: "20px", marginLeft: "20px", color: "white" }} href="#">Abrahamreyes1991@yahoo.com</Nav.Link>
		                        </Container>
		                    </Navbar>
		            </>
		        );
}

export default Footer;

