import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Catagories.css'

const Catagories = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    const handleBreakfst = () => {
        console.log("click")
    }
    return (
        <Navbar bg="light" expand="md">
            <Container>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto custom-cata-style">

                        <NavLink to="/breakfast" activeStyle={activeStyle} onClick={handleBreakfst}>Breakfast</NavLink>
                        <NavLink to="/lunch" activeStyle={activeStyle}> Lunch</NavLink>
                        <NavLink to="/dinner" activeStyle={activeStyle}> Dinner</NavLink>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Catagories;