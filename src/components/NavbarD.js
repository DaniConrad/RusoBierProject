import React from 'react';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import CartIcon from './CartIcon';
import Logo from './Logo';


const NavbarD = () => {
    return( 
    <Navbar className='nav-back-color' expand="lg">
        <Container>
          <Navbar.Brand href="#home">
             <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
            <Nav className="me-auto">
              <Nav.Link href="#home" className='fs-4 underline text-color-standard'>Productos</Nav.Link>
              <Nav.Link href="#link" className='fs-4 underline text-color-standard'>Servicios</Nav.Link>
              <Nav.Link href="#link" className='fs-4 underline text-color-standard'>Galería</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant="outline-secondary" className='border-0'>
            <CartIcon />
          </Button>
        </Container>
      </Navbar>
)};
    


export default NavbarD;