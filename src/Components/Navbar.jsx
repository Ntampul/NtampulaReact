
import {Link} from "react-router-dom"
import "./navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//import logok from '../assets/mthura.png'



export const Navbars = () => {
  return (
  
    <Navbar bg="" data-bs-theme="dark">
        <Container>
          <Navbar.Brand > <img width={60} src="https://i.ibb.co/3MgzP8F/mthura-high-resolution-color-logo.png"></img> <Link to="/"className="tittle"> 
          </Link></Navbar.Brand>
          <Nav className="link">
            <Nav.Link > <Link className="link" to="/Home"> Home</Link></Nav.Link>
            <Nav.Link ><Link className="link"  to="/About">About</Link></Nav.Link>
            <Nav.Link ><Link className="link"  to="/Skills">Skills</Link></Nav.Link>
            <Nav.Link ><Link className="link"  to="/projects">Project</Link></Nav.Link>
            <Nav.Link ><Link className="link"  to="/Contacts">Contacts</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  )
}
