import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import './Inicio.css'
import p1 from './img/p1.jpeg'
import p2 from './img/p2.jpeg'
import p3 from './img/p3.jpeg'
import p4 from './img/p4.jpeg'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Inicio() {

    useEffect(() => {
        Aos.init({ duration: 3200 });
    }, [])

    return (
        <div data-aos="fade-up" className="inicio">
            <h1>
                Productos
            </h1>
            <CardGroup className="card-flex">
            <div className="card-flex">
                <Card className="card-cont" style={{ width: '18rem' }}>
                    <Card.Img className="card-img"  variant="top" src={p1} />
                    <Card.Body>
                        <Card.Title>Tira Led</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="card-flex">
                <Card className="card-cont" style={{ width: '18rem' }}>
                    <Card.Img className="card-img" variant="top" src={p2} />
                    <Card.Body>
                        <Card.Title>Receptor Bluetooth</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="card-flex">
                <Card className="card-cont" style={{ width: '18rem' }}>
                    <Card.Img className="card-img"  variant="top" src={p3} />
                    <Card.Body>
                        <Card.Title>Noga Twins</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="card-flex">
                <Card className="card-cont" style={{ width: '18rem' }}>
                    <Card.Img className="card-img"  variant="top" src={p4} />
                    <Card.Body>
                        <Card.Title>Batidor de cafe</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            </div>
            </CardGroup>
        </div>
    )
}
