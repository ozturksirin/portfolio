import React from 'react'
import '../../assets/style/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarLayouts = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="nav-body">
                <Container>
                    <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#" >Home</Nav.Link>
                            <Nav.Link href="#" >About</Nav.Link>
                            <Nav.Link href="#">Lab</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarLayouts
