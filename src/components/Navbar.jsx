import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


function NavigationBar({ onLogout }) {
  return (
    <Navbar style={{ backgroundColor: '#eb6864' }} expand="lg" className="w-100">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#moodle" style={{ color: 'white', fontWeight: 'bold' }}>Moodle</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="#cursos" style={{ color: 'white', fontWeight: 'bold' }}>Cursos</Nav.Link>
          <NavDropdown title={<span style={{ color: 'white', fontWeight: 'bold' }}>Perfil</span>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#perfil">Perfil</NavDropdown.Item>
            <NavDropdown.Item href="#calificaciones">Calificaciones</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={onLogout}>Cerrar Sesión</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;