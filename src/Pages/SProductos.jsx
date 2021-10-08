import React from 'react'
import './SProductos.css'
import Example from '../components/MenuLateral'
import { Card, Form, FormControl } from 'react-bootstrap'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Button from '@restart/ui/esm/Button';
import axios from "axios";
import { NavLink } from 'react-router-dom';


export default function SProductos() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productos = async () => {
            const { data } = await axios.get("/productos");
            setProducts(data);
        };
        productos()

        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className="body-pro">
            <div className="p-container">
                <div className="nav-filtro">
                    <Form className="d-flex nav-form">
                    <Example />
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="busqueda-productos me-2"
                            aria-label="Search"
                            style={{ width: "650px" }}
                        />
                        <Button className="global-btn" variant="outline-success"><img style={{ width: "55px", height: "35px" }} src="https://icongr.am/fontawesome/search.svg?size=128&color=00000" alt="" /></Button>
                        
                    </Form>
                </div>
                <div className="cards-p">
                    {products.map((prod) => {
                        return (prod.categoria === "CELULAR", "TABLETS", "ACCESORIOS" && (
                            <NavLink
                            key={prod._id}
                            style={{ textDecorationLine: "none" }}
                            to={`/individual/${prod._id}`}
                            exact
                            as={NavLink}
                        >
                            <div data-aos="fade-up" className="card-flex">
                                    <Card className="card-cont2">
                                        <Card.Body>
                                            <div className="cardp-imgcont">
                                                <img style={{ objectFit: "cover" }} className="cards-pimg" src={prod.img[0]} alt="" />
                                            </div>
                                            <Card.Title>{prod.modelo}</Card.Title>
                                            <Card.Text className="module line-clamp">
                                                {prod.descripcion}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                            </div>
                            </NavLink>)                           
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
