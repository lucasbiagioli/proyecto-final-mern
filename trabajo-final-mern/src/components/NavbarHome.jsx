import React, { useState } from 'react';
import { Navbar, Button, Offcanvas } from 'react-bootstrap';

const NavbarHome = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <Navbar className="navbar-shadow">  
      <Button variant="link" onClick={handleOffcanvas} className="offcanvas-button">
        <span className="hamburger-bar">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAI1JREFUWEft1VEKgCAQRVFdpNJyajeirtEiqD/lUSIoXH+HYjozL62Z7NjJ+jE0pCaCEEJKQNXX2aHNuVN9TU89pFTFaArR0MO9zg717EfPswgpvXbKvN9NKcOiH3I+as0R+1fl+4/xHtnAE2Ksvp+UKXSEfgtx26vbfjohNetRdVKmZBFCSAmoOjukhC5quCslWWsd0AAAAABJRU5ErkJggg=="/>
        </span>
      </Button>
      <Navbar.Brand href="#" className='text-light'>Restaurante Rolling</Navbar.Brand>
      <Offcanvas show={showOffcanvas} onHide={handleOffcanvas} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Restaurante Rolling</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-dark-subtle'>
          <ul>
            <li>Menus del dia</li>
            <li>Reservas</li>
            <li>Pedidos</li>
            <li>Login</li>
            <li>Registrarse</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default NavbarHome;





