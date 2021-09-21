import React from 'react'
import './Carrito.css'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Carrito() {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div>
            <div data-aos="fade-up" className="container-carrito">
                <div className="carrito-box">
                    <div className="carrito-titulo">
                        <p style={{ marginTop: "30px", marginLeft: "50px", fontSize: "35px", letterSpacing: "10px" }} >Carrito</p>
                    </div>
                    <div className="carrito-cards">
                        <div className="carrito-card">
                            <img className="cc-img" src="https://images.fravega.com/f500/c97ee4e75e2a85ff83e8b2107259be9a.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrito
