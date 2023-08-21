
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiLogoGithub } from "react-icons/fa";
//import { BiLogoGithub } from 'react-bootstrap-icons';

//import logok from '../assets/mthura.png'



export const Home = () => {
  return (
  
    <Container className='mt-5'>
    <Row>
      <Col xs>
    <div>
      <h1>
        <BiLogoGithub/>
      </h1>
    </div>

 </Col>
      <Col xs={{ order: 12 }}>Hi. i’M MTHUNZI NTAMPULA
Welcome to my portfolio as i am looking for a job as a software DEVELOPER.</Col>
      <Col xs={{ order: 1 }}> Picture </Col>
    </Row>
  </Container>

  )
}
