import React from 'react'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import pp from './img/pp (1).jpg'
import LogoNav from './img/LogoNav.jpg'

export default function NavBar() {
    return (
        <div>
            <Navbar sticky="top" bg="light" expand="lg">
                    <div className="nav-container">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link style={{paddingTop: "10px", paddingRight: "15px", paddingLeft: "15px"}} className="efecto-nav" href="#home">Inicio</Nav.Link>
                                <Nav.Link style={{paddingTop: "10px", paddingRight: "15px", paddingLeft: "15px"}} className="efecto-nav" href="#contacto">Contacto</Nav.Link>
                                <img style={{width: "50px", height: "50px"}} src={LogoNav} alt="" />
                                <Nav.Link style={{paddingTop: "10px", paddingRight: "15px", paddingLeft: "15px"}} className="efecto-nav" href="#link">Productos</Nav.Link>
                                <Nav.Link style={{paddingTop: "10px", paddingRight: "15px", paddingLeft: "15px"}} className="efecto-nav" href="#galeria">Galeria</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
            </Navbar>
        </div>
    )
}
