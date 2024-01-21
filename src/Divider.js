import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Divider() {
	  return (
		      <Container fluid>
		        <Row>
		          <Col style={{backgroundColor: "#342309", borderRadius: "8px"}} >``</Col>
		        </Row>
		      </Container>
		    );
}

export default Divider;
