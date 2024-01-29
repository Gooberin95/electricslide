import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GalleryHeader() {
	  return (
		      <Container fluid className="d-flex align-items-center justify-content-center" style={{backgroundColor: "orange",border: "solid "  , borderRadius: "7px", height: '70px' }}>
		        <Row>
		          <Col className="text-center"><h1 style={{textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>Gallery</h1></Col>
		        </Row>
		      </Container>
		    );
}

export default GalleryHeader;

