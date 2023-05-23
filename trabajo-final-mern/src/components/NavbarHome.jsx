import React, { useState } from 'react';
import { Navbar, Button, Offcanvas, Nav } from 'react-bootstrap';

const NavbarHome = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <Navbar className="navbar-shadow justify-content-end">  
      <Button variant="link" onClick={handleOffcanvas} className="offcanvas-button">
        <span className="hamburger-bar">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAI1JREFUWEft1VEKgCAQRVFdpNJyajeirtEiqD/lUSIoXH+HYjozL62Z7NjJ+jE0pCaCEEJKQNXX2aHNuVN9TU89pFTFaArR0MO9zg717EfPswgpvXbKvN9NKcOiH3I+as0R+1fl+4/xHtnAE2Ksvp+UKXSEfgtx26vbfjohNetRdVKmZBFCSAmoOjukhC5quCslWWsd0AAAAABJRU5ErkJggg==" alt='Burger'/>
        </span>
      </Button>
      <Offcanvas show={showOffcanvas} onHide={handleOffcanvas} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Restaurante Rolling</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-dark-subtle'>
          <ul>
          <Nav.Link href="/">Menu del Dia</Nav.Link>
            <Nav.Link href="#home">Reservas</Nav.Link>
            <Nav.Link href="#home">Pedidos</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/registro">Registrarse</Nav.Link>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default NavbarHome;





