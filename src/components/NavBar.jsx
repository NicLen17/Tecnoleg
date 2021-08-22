import React from 'react'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import LogoNav from './img/LogoNav.jpg'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function NavBar() {

    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    return (
        <div>
            <Navbar className="fixed-top" data-aos="fade" expand="lg">
                <div className="nav-container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link style={{ paddingTop: "10px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav" href="#home">Inicio</Nav.Link>
                            <Nav.Link style={{ paddingTop: "10px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav" href="#contacto">Productos</Nav.Link>
                            <img style={{ width: "50px", height: "50px" }} src={LogoNav} alt="" />
                            <Nav.Link style={{ paddingTop: "10px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav" href="#link">Carrito</Nav.Link>
                            <Nav.Link style={{ paddingTop: "10px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav" href="#galeria">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}
