import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Catagories.css'

const Catagories = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
        borderBottom: "1px solid red"
    }

    return (
        <Navbar expand="md">
            <Container>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto custom-cata-style">

                        <NavLink to="/breakfast" activeStyle={activeStyle} >Breakfast</NavLink>
                        <NavLink to="/lunch" activeStyle={activeStyle}> Lunch</NavLink>
                        <NavLink to="/dinner" activeStyle={activeStyle}> Dinner</NavLink>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Catagories;