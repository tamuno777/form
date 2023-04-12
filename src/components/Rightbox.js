import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../components/Rightbox.css';


function Rightbox() {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid className='d-flex'>
        <Navbar.Brand href="#">ODD NETWORK</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 head"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            
            <NavDropdown title="Address"   id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Lorem, ipsum dolor <br /> sit amet consectetur adipisicing elit. <br /> Officia, ipsum.</NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="Let's Talk"   id="navbarScrollingDropdown">
              <NavDropdown.Item href="tel:#"> +1 800 000000</NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="General Support"   id="navbarScrollingDropdown">
              <NavDropdown.Item href="emal:#">Contact@example.com</NavDropdown.Item>
              
            </NavDropdown>
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Rightbox;