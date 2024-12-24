import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: 'rgb(74, 114, 183)' }}>
        <Container>
          <Navbar.Brand href="#home" className="fw-bolder text-light">Portfolio .</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            style={{ backgroundColor: 'rgb(74, 114, 183)', color: '#fff' }}
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title id="offcanvasNavbarLabel" className="fw-bolder text-light">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to={'/'} className="fw-bolder text-light me-3" style={{textDecoration:'none'}}>Home</Link>
                <Link to={'/about'} className="fw-bolder text-light me-3" style={{textDecoration:'none'}}>About</Link>
                <Link to={'/myworks'} className="fw-bolder text-light me-3" style={{textDecoration:'none'}}>Projects</Link>
                <Link to={'/contact'} className="fw-bolder text-light me-3" style={{textDecoration:'none'}}>Contact</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
