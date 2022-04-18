import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container className='fs-4 header'>
                    <Navbar.Brand as={Link} to='/' className='fw-bolder fs-1 '>Denti<span className='text-danger'>Care</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#treatment">Treatments</Nav.Link>
                            <Nav.Link className='link' as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link className='link' as={Link} to="/about-me">About Me</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="home#doctor">Dr.Ruhul Amin  </Nav.Link>
                            <Nav.Link className='link btn btn-outline-warning pe-3 ps-3 pt-3 pb-0 fw-bolder' as={Link} to="#book">Book an Appointment</Nav.Link>
                            {
                                user
                                    ?
                                    <button className='btn btn-outline-danger text-decoration-none  fs-4' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link className='link' as={Link} to="/login" >
                                        Login
                                    </Nav.Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;