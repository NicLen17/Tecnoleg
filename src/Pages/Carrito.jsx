import React, { Component } from 'react'
import './Carrito.css'

export default class Carrito extends Component {
    render() {
        return (
            <div className="container-carrito">
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
        )
    }
}
