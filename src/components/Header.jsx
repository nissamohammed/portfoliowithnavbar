import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

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
                <Nav.Link href="/" className="fw-bolder text-light">Home</Nav.Link>
                <Nav.Link href="/about" className="fw-bolder text-light">About</Nav.Link>
                <Nav.Link href="/myworks" className="fw-bolder text-light">Projects</Nav.Link>
                <Nav.Link href="/contact" className="fw-bolder text-light">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
