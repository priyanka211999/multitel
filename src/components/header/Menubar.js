import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

function Menubar() {
    const navigate = useNavigate()
  return (
    <Navbar expand="lg" variant="light" bg="white">
        <Container>
            <Navbar.Brand href="#">
                <img
                    src="/assets/images/logo.png"
                    className="d-inline-block align-top"
                    alt="Multitel logo"
                />    
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {/* <NavDropdown title="Home" id="basic-nav-dropdown" href='/home'>
                        <NavDropdown.Item href="#">Home Internet services</NavDropdown.Item>
                        <NavDropdown.Item href="#">Landline Telephony</NavDropdown.Item>
                        <NavDropdown.Item href="#">TV Services</NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link href="/home">Hom</Nav.Link>
                    <Nav.Link href="#">Multitel-Celular (MVNO)</Nav.Link>
                    <Nav.Link href="#">Marketplace</Nav.Link>
                    <Nav.Link href="#">Client Portal</Nav.Link>
                    <Nav.Link href="#">Contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Menubar
