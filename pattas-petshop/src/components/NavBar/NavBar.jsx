import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav" ;
import CartWidget from "../CartWidget";

const NavBar = () => {
    return(
        <div>
            {/* <Navbar bg="light" expand="lg">
                <Link to="/">Pattas Petshop</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/categoria/perros">Perros</NavLink>
                        <Link to="/categoria/gatos">Gatos</Link>
                    </Nav>
                </Navbar.Collapse>
                <Link to="/carrito" ><CartWidget/></Link>
            </Navbar> */}
            <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categoria/perros">Perros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categoria/gatos">Gatos</Link>
                            </li>
                        </ul>
                            </div>
                        </nav>
                        
        </div>
    )
}

export default NavBar