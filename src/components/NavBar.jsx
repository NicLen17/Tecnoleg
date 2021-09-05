import React from 'react'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import LogoNav from './img/LogoNav.jpg'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {

    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    return (
        <div>
            <Navbar className="fixed-top" data-aos="fade-down"  data-aos-delay="100" expand="lg">
                <div className="nav-container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link to="/" exact as={NavLink} style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav" href="">Inicio</Nav.Link>
                            <Nav.Link to="/productos" exact as={NavLink} style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav" href="#contacto">Categorias</Nav.Link>
                            <img className="logo-nav" style={{ width: "50px", height: "50px", marginTop: "3px", marginBottom: "3px" }} src={LogoNav} alt="" />
                            <Nav.Link style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav" href="#link">Carrito</Nav.Link>
                            <Nav.Link style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav" href="#galeria">Login</Nav.Link>
                            {/* <img style={{ width: "50px", height: "50px", marginBottom: "3px", marginRight: "500px" }} src="https://icongr.am/clarity/shopping-cart.svg?size=128&color=000000" alt="" /> */}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}
