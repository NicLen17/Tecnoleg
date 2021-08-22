import Back3 from './img/Back3.jpeg'
import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Carro.css'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Carro() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])


    return (
        <div>
            <Carousel data-aos="fade-up" className="Carro" variant="dark">
                <Carousel.Item>
                    <img
                        style={{objectFit: "cover"}}
                        className="d-block w-100 Carro-img"
                        src={Back3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>TecnoLeg</h5>
                        <p>Lo mejor de tecnologia al mejor precio</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 Carro-img"
                        src="https://www.avantel.co/blog/wp-content/uploads/2019/07/14.Los-accesorios-para-celulares-ma%E2%95%A0%C3%BCs-y-menos-u%E2%95%A0%C3%BCtiles.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 Carro-img"
                        src="https://sdrtecnologia.co/wp-content/uploads/2020/09/Lista-de-accesorios-imprescindibles-para-celulares-en-este-2020-937x480.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
