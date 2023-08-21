import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export const Home = () => {
  return (
        <Container>
      <Row>
        <Col xs>First, but unordered</Col>
        <Col xs={{ order: 12 }}>Hi. i’M MTHUNZI NTAMPULA
Welcome to my portfolio as i am looking for a job as a software DEVELOPER.</Col>
        <Col xs={{ order: 1 }}><Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col> </Col>
      </Row>
    </Container>
  )
}
