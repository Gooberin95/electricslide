import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GalleryHeader() {
	  return (
		      <Container fluid className="d-flex align-items-center justify-content-center"  style={{borderRadius: "7px", height: '70px' }}>
		        <Row>
		          <Col className="text-center"><h1>Gallery</h1></Col>
		        </Row>
		      </Container>
		    );
}

export default GalleryHeader;

