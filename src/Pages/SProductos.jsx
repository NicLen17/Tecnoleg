import React from 'react'
import './SProductos.css'
import Example from '../components/MenuLateral'
import { Button, Card, CardGroup } from 'react-bootstrap'

export default function SProductos() {
    return (
        <div className="body-pro">
            <div style={{ marginTop: "150px" }}>
                <Example />
                <div>
                    <CardGroup>
                        <div className="card-flex">
                            <Card className="card-cont" style={{ width: '18rem' }}>
                                <Card.Img className="card-img" variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>Tira Led</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Agregar al carrito</Button>
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
                                    <Button variant="primary">Agregar al carrito</Button>
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
                                    <Button variant="primary">Agregar al carrito</Button>
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
                                    <Button variant="primary">Agregar al carrito</Button>
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
                                    <Button variant="primary">Agregar al carrito</Button>
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
                                    <Button variant="primary">Agregar al carrito</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        
                    </CardGroup>
                </div>
            </div>
        </div>
    )
}
