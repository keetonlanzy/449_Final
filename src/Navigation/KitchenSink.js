import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function KitchenSinkExample() {
  return (
    <Container fluid>
        <Row>
            <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='man1.jpeg' />
      <Card.Body>
        <Card.Title>Owner</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Phone: 555-555-5555</ListGroup.Item>
        <ListGroup.Item>Email: owner@gmail.com</ListGroup.Item>
        <ListGroup.Item>1234 Address Road</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.Linkedin.com">Linkedin</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='man2.jpg' />
      <Card.Body>
        <Card.Title>Owner</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Phone: 555-555-5555</ListGroup.Item>
        <ListGroup.Item>Email: owner@gmail.com</ListGroup.Item>
        <ListGroup.Item>1234 Address Road</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.Linkedin.com">Linkedin</Card.Link>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='man3.jpg' />
      <Card.Body>
        <Card.Title>Manager</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Phone: 555-555-5555</ListGroup.Item>
        <ListGroup.Item>Email: manager@gmail.com</ListGroup.Item>
        <ListGroup.Item>1234 Address Road</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.Linkedin.com">Linkedin</Card.Link>
      </Card.Body>
    </Card>
    </Col>

    </Row>
    </Container>
  );
}

export default KitchenSinkExample;