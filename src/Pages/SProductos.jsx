import React from 'react'
import './SProductos.css'
import Example from '../components/MenuLateral'
import { Button, Card, CardGroup } from 'react-bootstrap'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SProductos() {


    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className="body-pro">
            <div style={{ marginTop: "150px" }}>
                <Example />
                <div>
                    <CardGroup>
                        <div data-aos="fade-up" className="card-flex">
                            <Card className="card-cont" style={{ width: '18rem' }}>
                                <Card.Img className="card-img" variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>Tira Led</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button className="global-btn" variant="global-btn">Agregar al carrito</Button>
                                </Card.Body>
                            </Card>
                            <Card className="card-cont" style={{ width: '18rem' }}>
                                <Card.Img className="card-img" variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>Tira Led</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button className="global-btn" variant="global-btn">Agregar al carrito</Button>
                                </Card.Body>
                            </Card>
                            <Card className="card-cont" style={{ width: '18rem' }}>
                                <Card.Img className="card-img" variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>Tira Led</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button className="global-btn" variant="global-btn">Agregar al carrito</Button>
                                </Card.Body>
                            </Card>
                            <Card className="card-cont" style={{ width: '18rem' }}>
                                <Card.Img className="card-img" variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>Tira Led</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button className="global-btn" variant="global-btn">Agregar al carrito</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </CardGroup>
                </div>
            </div>
        </div>
    )
}
