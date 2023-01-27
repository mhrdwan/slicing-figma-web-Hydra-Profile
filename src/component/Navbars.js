import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../assets/ihydra.png'

function Navbars() {
  return (
    <Navbar className='mt-4'  collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <Container>
        
        <Navbar.Brand  href="#home"><img src={icon} alt="" />HYDRA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">ABOUT</Nav.Link>
            <Nav.Link href="#pricing">SERVICES</Nav.Link>
            <Nav.Link href="#pricing">TECHNOLOGIES</Nav.Link>
            <Nav.Link href="#pricing">HOW TO</Nav.Link>
          </Nav>
          <div className="btn-navbar ">
          <button className='btn-contact mx-3'>CONTACT US</button>
          <button className='btn-join'>JOIN HYDRA</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;