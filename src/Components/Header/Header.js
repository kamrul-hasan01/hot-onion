import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../img/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Header = () => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <>
            <Navbar variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}
                            width="140"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav className="ms-auto  ">
                        <Nav.Link as={Link} to="/shoppingcart" className="pt-1 fs-3">{element}</Nav.Link>
                        <Nav.Link as={Link} to="/login" className="fs-4">Login</Nav.Link>
                        <Nav.Link as={Link} to="/signup"><Button variant="danger" >Sing up</Button></Nav.Link>

                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;