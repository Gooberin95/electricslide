import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Topinfo() {
	return (
		   <Nav fill  defaultActiveKey="/home">
		      <Nav.Item>
		        <Nav.Link eventKey="link-1">123-123-1234</Nav.Link>
		      </Nav.Item>
		      <Nav.Item>
		        <Nav.Link eventKey="link-2">applebee@outlook.com</Nav.Link>
		      </Nav.Item>
		      <Nav.Item>
		        <Nav.Link eventKey="disabled" disabled>
		          Logo
		        </Nav.Link>
		      </Nav.Item>
		    </Nav>
	);
}

export default Topinfo;
