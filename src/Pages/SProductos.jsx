import React from 'react'
import './SProductos.css'
import Example from '../components/MenuLateral'
import { Card, CardGroup } from 'react-bootstrap'
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
                    <CardGroup className="cards-p">
                        <div data-aos="fade-up" className="card-flex">
                            <Card className="card-cont2" style={{ width: '25rem' }}>
                                <Card.Body>
                                    <div className="cardp-imgcont">
                                        <img className="cards-pimg" src="https://http2.mlstatic.com/D_NQ_NP_981719-MLA32994234888_112019-O.jpg" alt="" />
                                    </div>
                                    <Card.Title>Dark Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="card-cont2" style={{ width: '25rem' }}>
                                <Card.Body>
                                    <div>
                                        <div className="cardp-imgcont">
                                            <img className="cards-pimg" src="https://http2.mlstatic.com/D_NQ_NP_981719-MLA32994234888_112019-O.jpg" alt="" />
                                        </div>
                                    </div>
                                    <Card.Title>Dark Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="card-cont2" style={{ width: '25rem' }}>
                                <Card.Body>
                                    <div className="cardp-imgcont">
                                        <img className="cards-pimg" src="https://http2.mlstatic.com/D_NQ_NP_981719-MLA32994234888_112019-O.jpg" alt="" />
                                    </div>
                                    <Card.Title>Dark Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                    </CardGroup>
                </div>
            </div>
        </div>
    )
}
