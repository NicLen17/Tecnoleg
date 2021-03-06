import React from 'react'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Button, NavDropdown } from 'react-bootstrap'
import LogoNav from './img/LogoNav.jpg'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

export default function NavBar({
    userName,
    userCategory,
    logout,
    productosCarrito, }) {

    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    return (
        <div>
            <Navbar className="fixed-top" data-aos="fade-down" data-aos-delay="100" expand="lg">
                <div className="nav-container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <img className="logo-nav" style={{ width: "50px", height: "50px", marginTop: "5px", marginBottom: "5px", marginLeft: "5px" }} src={LogoNav} alt="" />
                            <Nav.Link to="/" exact as={NavLink} style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav mt-1" href="">Inicio</Nav.Link>
                            <Nav.Link to="/productos" exact as={NavLink} style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav mt-1" href="#contacto">Productos</Nav.Link>
                            <Nav.Link to="/contacto" exact as={NavLink} style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav mt-1" href="#link">Contacto</Nav.Link>
                            <Nav.Link to="/carrito" exact as={NavLink} style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav mt-1" href="#galeria">Carrito</Nav.Link>

                            <NavDropdown title="Cuenta" style={{ paddingTop: "9px", paddingRight: "50px", paddingLeft: "50px" }} id="basic-nav-dropdown">
                                {!userName && (
                                    <Nav.Link to="/login" style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} exact as={NavLink} className="efecto-nav" href="">Ingresar</Nav.Link>
                                )}
                                {!userName && (
                                    <Nav.Link to="/register" style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} exact as={NavLink} className="efecto-nav" href="">Registrarse</Nav.Link>
                                )}
                                {userName && (
                                    <Nav.Link style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav mt-1">
                                        {userName}
                                    </Nav.Link>
                                )}
                                {userName && userCategory && (
                                    <Nav.Link to="/admin" exact as={NavLink} style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav mt-1">
                                        Administracion
                                    </Nav.Link>
                                )}
                                {/* muestra el nombre del usuario, con la codicion que si no est?? logueado no muestre nada */}
                                {userName && (
                                    <Button style={{ paddingTop: "5px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav mt-0" variant="" onClick={logout}>
                                        Cerrar Sesi??n
                                    </Button>
                                )}
                            </NavDropdown>

                        </Nav>
                        <br />
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}
