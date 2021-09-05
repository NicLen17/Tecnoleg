import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import './SCards.css'
import p1 from './img/p1.jpeg'
import p2 from './img/p2.jpeg'
import p3 from './img/p3.jpeg'
import p4 from './img/p4.jpeg'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function SCards() {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className="inicio">
            <div data-aos="fade-up-right" className="h-cardscontainer">
                <div className="inicio-titulo">
                    <p>
                        Categorias populares
                    </p>
                </div>
                <div data-aos-delay="2400" data-aos="fade-up-left" className="horizontal-card">
                    <div className="h-cardcont">
                        <p className="h-cardtitulo">Accesorios para celular</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, deserunt! Quidem, nobis dolore molestias, fugiat quam modi commodi maiores ea explicabo pariatur maxime porro nemo illum totam, earum impedit aliquid?
                        </p>
                    </div>
                    <div className="h-cardimg">
                        <img src="https://www.belkin.com/medias/belkin-category-banner-power-charging-banks-768x400-v01-r01-us.jpg?context=bWFzdGVyfHJvb3R8MTM3ODI5fGltYWdlL2pwZWd8aDdmL2gzZS84ODk5MjAxMjA0MjU0LmpwZ3wwZDUwYTBjOTRmMWJjOWI2YmM4ODg1NDhlZWFkNzgyNGFjMzNlYmY0NjRkZTg1Yjg2MjYyYmZiZmM0YjQxOGI3" alt="" />
                    </div>
                </div>
                <div data-aos-duration="2400" data-aos="fade-up-left" className="horizontal-card2">
                    <div className="h-cardimg">
                        <img src="http://d3ugyf2ht6aenh.cloudfront.net/stores/017/775/products/balanza-digital-5kg1-5c2671d8717979403216111512589822-640-0.png" alt="" />
                    </div>
                    <div className="h-cardcont">
                        <p className="h-cardtitulo">Articulos para el hogar</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, deserunt! Quidem, nobis dolore molestias, fugiat quam modi commodi maiores ea explicabo pariatur maxime porro nemo illum totam, earum impedit aliquid?
                        </p>
                    </div>
                </div>
                <div data-aos-delay="2400" data-aos="fade-up-right" className="horizontal-card">
                    <div className="h-cardcont">
                        <p className="h-cardtitulo">Perifericos para PC</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, deserunt! Quidem, nobis dolore molestias, fugiat quam modi commodi maiores ea explicabo pariatur maxime porro nemo illum totam, earum impedit aliquid?
                        </p>
                    </div>
                    <div className="h-cardimg">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_725297-MLA44405772200_122020-O.jpg" alt="" />
                    </div>
                </div>
                <div data-aos-delay="2400" data-aos="fade-up-left" className="horizontal-card2">
                    <div className="h-cardimg">
                        <img src="https://ryrinformatica.com/wp-content/uploads/2021/05/21370.jpg" alt="" />
                    </div>
                    <div className="h-cardcont">
                        <p className="h-cardtitulo">Audio</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, deserunt! Quidem, nobis dolore molestias, fugiat quam modi commodi maiores ea explicabo pariatur maxime porro nemo illum totam, earum impedit aliquid?
                        </p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="inicio-titulo2">
                <p>
                    Mas vendidos
                </p>
            </div>
            <CardGroup className="card-flex">
                <div className="card-flex">
                    <Card data-aos="fade-up-right" className="card-cont" style={{ width: '18rem' }}>
                        <Card.Img className="card-img" variant="top" src={p1} />
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
                <div data-aos="fade-up-left" className="card-flex">
                    <Card className="card-cont" style={{ width: '18rem' }}>
                        <Card.Img className="card-img" variant="top" src={p2} />
                        <Card.Body>
                            <Card.Title>Receptor Bluetooth</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button className="global-btn" variant="global-btn">Agregar al carrito</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div data-aos="fade-up-right" className="card-flex">
                    <Card className="card-cont" style={{ width: '18rem' }}>
                        <Card.Img className="card-img" variant="top" src={p3} />
                        <Card.Body>
                            <Card.Title>Noga Twins</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button className="global-btn" variant="global-btn">Agregar al carrito</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div data-aos="fade-up-left" className="card-flex">
                    <Card className="card-cont" style={{ width: '18rem' }}>
                        <Card.Img className="card-img" variant="top" src={p4} />
                        <Card.Body>
                            <Card.Title>Batidor de cafe</Card.Title>
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
    )
}
