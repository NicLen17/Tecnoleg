import React from 'react'
import './SProductos.css'
import Example from '../components/MenuLateral'
import { Card, CardGroup, Form, FormControl } from 'react-bootstrap'
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
            <div style={{ marginTop: "150px" }}>
                <div className="nav-filtro">
                    <Form className="d-flex nav-form">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2 busqueda-productos"
                            aria-label="Search"
                            style={{ width: "450px" }}
                        />
                        <Button className="global-btn me-3 " variant="outline-success"><img style={{width:"35px", height:"35px"}} src="https://icongr.am/fontawesome/search.svg?size=128&color=00000" alt="" /></Button>
                        <Example />
                    </Form>
                </div>
                <div>
                    <CardGroup className="cards-p">
                        {products.map((prod) => {
                            return (prod.categoria === "CELULAR" && (
                                <div data-aos="fade-up" className="card-flex">
                                    <NavLink
                                        key={prod._id}
                                        style={{ textDecorationLine: "none" }}
                                        to={`/individual/${prod._id}`}
                                        exact
                                        as={NavLink}
                                    >
                                        <Card className="card-cont2" style={{ width: '25rem' }}>
                                            <Card.Body>
                                                <div className="cardp-imgcont">
                                                    <img className="cards-pimg" src={prod.img[0]} alt="" />
                                                </div>
                                                <Card.Title>{prod.modelo}</Card.Title>
                                                <Card.Text className="module line-clamp">
                                                    {prod.descripcion}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </NavLink>
                                </div>)
                            );
                        })}
                    </CardGroup>
                </div>
            </div>
        </div>
    )
}
