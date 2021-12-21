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
                        <NavLink to="/categoria/remeras">Remeras</NavLink>
                        <Link to="/categoria/gorras">Gorras</Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gorras action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Tazas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Link to="/carrito" ><CartWidget/></Link>
            </Navbar>
        </div>
    )
}

export default NavBar