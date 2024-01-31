import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Topinfo() {
	return (
		<>
		<Container>
		 <Navbar>
		   <Container className="justify-content-center">
		   <Nav fill  defaultActiveKey="/home">
		      <Nav.Item>
		        <Nav.Link eventKey="link-1">206-945-1830</Nav.Link>
		      </Nav.Item>
		      <Nav.Item>
		        <Nav.Link eventKey="link-2">Abrahamreyes1991@yahoo.com</Nav.Link>
		      </Nav.Item>
		      <Nav.Item>
		        <Nav.Link eventKey="disabled" disabled>
		          Logo
		        </Nav.Link>
		      </Nav.Item>
		    </Nav>
		</Container>
		</Navbar>
		</Container>
		</>
	);
}

export default Topinfo;
