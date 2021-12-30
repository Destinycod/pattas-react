import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav" ;
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget";

const NavBar = () => {
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Link to="/">Pattas Petshop</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/categoria/perros">Perros</NavLink>
                        <Link to="/categoria/gatos">Gatos</Link>
                    </Nav>
                </Navbar.Collapse>
                <Link to="/carrito" ><CartWidget/></Link>
            </Navbar>
        </div>
    )
}

export default NavBar