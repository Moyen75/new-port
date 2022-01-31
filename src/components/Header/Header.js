import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import pdf from '../../upload/MoyenulIslam.pdf'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mb-5'>
            {/* <Navbar collapseOnSelect expand="lg" className='nav' variant="dark" >
                <Container>
                    <Navbar>Moyenul Islam</Navbar>
                    <Navbar.Collapse id="responsive-navbar-nav " className='justify-content-end'>
                        <div>
                            <Nav className="me-auto">
                                <Link to="/home">HOME </Link>
                                <Link to="/about">ABOUT US</Link>
                                <Link to="/services">SERVICES</Link>
                                <Link to="/projects">PROJECTS </Link>
                                <Link to="/testimonials">TESTIMONIALS</Link>
                                <Link to="/contact">CONTACT </Link>
                            </Nav>
                        </div>
                        <Nav>
                            <a href='https://drive.google.com/file/d/1HhNpzuYc48_6H7q1eB9gRHDktPrrgMnB/view?usp=sharing' target='blank' download>RESUME</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </div>
    );
};

export default Header;