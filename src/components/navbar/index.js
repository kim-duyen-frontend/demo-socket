import React, { useState } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";

function NavbarHome() {
    const [user, setUSer] = useState("duyenkim@gmail.com");
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        {user ? (
                            <>
                                <Nav.Link href="#">Hi,{user}  </Nav.Link>
                                <div className="vr" />
                                <Nav.Link href="#">Log out</Nav.Link>
                            </>
                        ) : (
                            ""
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarHome;