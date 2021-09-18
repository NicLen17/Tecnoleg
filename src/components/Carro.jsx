import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Carro.css'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import BANER3 from './img/BANER3.jpeg'

export default function Carro() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])


    return (
        <div>
            <Carousel data-aos="fade-up" className="Carro" variant="dark">
                <Carousel.Item>
                    <img
                        style={{objectFit: "none"}}
                        className="d-block w-100 Carro-img Carro-img2"
                        src={BANER3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{objectFit: "cover"}}
                        className="d-block w-100 Carro-img"
                        src="https://www.anahuac.mx/generacion-anahuac/sites/default/files/articles/tecnologi%CC%81a%20en%20nuestra%20vida%20cotidiana.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{objectFit: "cover"}}
                        className="d-block w-100 Carro-img"
                        src="https://www.fmcgroup.com.co/wp-content/uploads/2019/03/banner-seccion-tecnologia.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
