import React, { useState, useEffect } from "react";
import { Button, Card, Alert } from "react-bootstrap";

export default function CardCarrito({ p, productosCarrito, setProductosCarrito, sumaTotal }) {
    const [count, setCount] = useState(1)
    const [alert, setAlert] = useState("");

    useEffect(() => {
        sumaTotal()
    }, [count])

    let producto = () => {
        let productoStorage = JSON.parse(localStorage.getItem("agregarcarrito")) ? JSON.parse(localStorage.getItem("agregarcarrito")) : [];
        setProductosCarrito(productoStorage);
    };

    const eliminarcarrito = (id) => {
        const confirmar = window.confirm("Acepta eliminar del Carrito?");
        if (!confirmar) {
            return;
        }
        let productosFiltrados = [];
        productosCarrito.map((e) => {
            const coincideId = e._id === id;
            if (!coincideId) {
                productosFiltrados.push(e);
            }
        });
        localStorage.setItem("agregarcarrito", JSON.stringify(productosFiltrados))
        setAlert("PRODUCTO ELIMINADO");
        setTimeout(() => {
            setAlert("");
        }, 8000);
        producto()
    };

    const sumCantidad = () => {
        var c = count + 1;
        setCount(c);
        p.cantidad = c;
    }

    const resCantidad = () => {
        var c = count - 1;
        setCount(c);
        p.cantidad = c;
    }
    return (
        <div>
            {/*-------------------Card de Producto--------------------*/}
            {alert && <Alert variant="danger">{alert}</Alert>}
            <Card className="card overflow container producto">
                {/*-------------------Precio del Articulo------------------------*/}
                <br />
                <div className="container containercardcarrito d-flex">
                    <br />
                    <div className="cardcarrito">
                        <div className="carritoimg">
                            <img style={{ marginTop: "15px", marginBottom: "15px", maxWidth: "300px", maxHeight: "250px", margin: "auto" }} src={p.img[0]} alt="" />
                        </div>
                        <div className="infocarrito">
                            <p>{p.marca} {p.modelo}
                            </p>
                            <p><b>

                                {count} x ${p.price * count}
                            </b></p>
                            <div className="d-flex justify-content-center ">
                                {count > 1 ? <Button onClick={() => resCantidad()}
                                >
                                    <img
                                        className=""
                                        src="https://icongr.am/clarity/window-min.svg?size=10&color=currentColor"
                                        alt="resta"
                                    />
                                </Button> :
                                    <Button
                                    >
                                        <img
                                            className=""
                                            src="https://icongr.am/clarity/window-min.svg?size=10&color=currentColor"
                                            alt="resta"
                                        />

                                    </Button>}

                                <h4 className="border border-dark" style={{ width: 56, height: 50, margin: 0, paddingTop: 10 }}>{count}</h4>
                                <Button onClick={() => sumCantidad()}
                                >
                                    <img
                                        className=""
                                        src="https://icongr.am/clarity/add.svg?size=10&color=currentColor"
                                        alt="suma"
                                    />

                                </Button>
                            </div>
                            <Button
                                onClick={() => eliminarcarrito(p._id)}
                                className="btn btn-danger botoneliminarnone ml-1"
                                style={{ backgroundColor: "transparent", display: "none" }}
                            >Eliminar
                                <img
                                    className="botoneliminar"
                                    src="https://icongr.am/fontawesome/trash.svg?size=35&color=ffffff"
                                    alt=""
                                />
                            </Button>
                        </div>
                        <Button
                            onClick={() => eliminarcarrito(p._id)}
                            className="btn botoneliminar ml-1"
                            variant="botoneliminar"
                            style={{ backgroundColor: "transparent" }}
                        >
                            <img
                                className="botoneliminar"
                                src="https://icongr.am/fontawesome/trash.svg?size=35&color=ffffff"
                                alt=""
                            />
                        </Button>
                    </div>
                    <br />
                    <br />
                </div>
            </Card>
        </div>
    )
}




