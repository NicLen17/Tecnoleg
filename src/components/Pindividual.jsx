import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import './Pindividual.css';
import axios from 'axios';
import Aos from "aos";
import "aos/dist/aos.css";

export default function PIndividual({ productosCarrito, setProductosCarrito }) {
    const [alertSuccess, setalertSuccess] = useState("")
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [alert, setAlert] = useState("");

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    useEffect(() => {
        
        const producto = async () => {
            const { data } = await axios.get(`/productos/${id}`);
            setProduct(data);
        }
        producto()
    }, [id])

    const agregarcarrito = () => {
        if (product.stock === 0) return setAlert("No hay stock!");
        if (!productosCarrito.find(p => p.modelo === product.modelo)) {
            const agregado = [...productosCarrito, product];
            setProductosCarrito(agregado);
            setalertSuccess(`${product.marca} ${product.modelo} agregado al carrito!`);
            setTimeout(() => {
                setAlert("");
            }, 4000);
        }
        else {
            setalertSuccess("");
            setAlert("Este producto ya se encuentra en el carrito");
        }

    }
    localStorage.setItem("agregarcarrito", JSON.stringify(productosCarrito));
    return (
        <div data-aos="fade-up" className="backgroundoP">
            <div className="pcontainers">
            <div className="container-btn">
                <NavLink className="ml-2 mt-2" to='/productos' as={NavLink}><img className="btnatras" src="https://icongr.am/fontawesome/arrow-circle-left.svg?size=50&color=6ea7ad" alt="atras" /></NavLink>
                </div>
                <div className="pcontainer">
                    <div className="pimgcont">
                        <img className="imgpro" src={product.img?.[0]} alt="Producto principal" />
                    </div>
                </div>
                <div className="contenido1">
                    <h2>{product.marca}  {product.modelo} <br />
                    </h2>
                    <h2>${product.price}</h2>
                    <br />
                    {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
                    {alert && <Alert variant="danger">{alert}</Alert>}
                </div>
                <div className="contenido1">
                    <div>
                        <h2 className="">Caracteristicas</h2>
                        <p style={{ fontSize: "15px", maxInlineSize: "415px", marginTop: "20px", textJustify: "initial" }}>
                            {product.descripcion}
                        </p>
                    </div>
                    <Button className="global-btn" variant="global-btn" onClick={agregarcarrito} > Agregar al carrito </Button>
                </div>
                <div className="imagenesdesc">
                    {product.img?.map((i) => (
                        <div>
                            <img src={i} alt="Producto principal vista 1" />
                        </div>))}
                </div>
            </div>
        </div>

    )
}

