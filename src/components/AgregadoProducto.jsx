import React, { useState } from 'react'
import './AgregadoProducto.css'
import axios from "axios";
import {
    Form,
    InputGroup,
    Button,
    Container,
    Row,
    Col,
    Card,
    Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"
import { getBase64 } from './utils/img';


export default function AgregadoProducto({ productos }) {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({});
    const [alert, setAlert] = useState("");
    const [imagenes, setImagenes] = useState({})
    const [alertSuccess, setalertSuccess] = useState("")
    const handleSubmit = async (event) => {
        const formulario = event.currentTarget;
        event.preventDefault();
        setValidated(true);
        if (formulario.checkValidity() === false) {
            return event.stopPropagation();
        }
        try {
            await axios.post("/productos", input);
            formulario.reset();
            setalertSuccess(`PRODUCTO CREADO EXITOSAMENTE`);
            setValidated(false);

        } catch (error) {
                    error.response.data.msg
                ? setAlert(error.response.data.msg)
                : setAlert(error.response.data);
        }
        productos();
        setTimeout(() => { setalertSuccess("") }, 5000);
    };
    const onChangeImg = async (e) => {
        const imagenesArray = [];
        const imagenesInput = e.target.files;
        for (let i = 0; i < imagenesInput.length; i++) {
            const base64 = await getBase64(imagenesInput[i]);
            imagenesArray.push(base64);
            const iman = { img: imagenesArray }
            setImagenes(iman);
        };
    }

    const handleChange = (e) => {
        setAlert("");
        const { name, value } = e.target;
        const productoInput = { ...input, ...imagenes, [name]: value.toUpperCase() };
        setInput(productoInput);
    };

    return (
        <div className="agregadoform">
            <div className="agregadocontent">
                <Container className="registerformagregado">
                    <Row>
                        <Col xs={12} sm={8} md={6} className="mx-auto my-5">
                            {alert && <Alert variant="danger">{alert}</Alert>}
                            {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
                            <Card style={{ height: "880px" }} className="border registercontent-a">
                            <p style={{ marginTop: "30px", fontSize: "35px", letterSpacing: "10px" }} className="register-titulo">Agregado Producto</p>
                                <Card.Body>
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Form.Group className="reginputconteineragregado" controlId="validationCustom02">
                                            <Form.Label >Marca</Form.Label>
                                            <Form.Control
                                                name="marca"
                                                onChange={(e) => handleChange(e)}
                                                required
                                                type="text"
                                                placeholder="Fabricante del producto"
                                                className="labelform-register"
                                                maxLength="20"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Se requiere el fabricante del producto!
                                            </Form.Control.Feedback>
                                            <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="reginputconteineragregado" controlId="validationCustom01">
                                            <Form.Label >Modelo del producto</Form.Label>
                                            <Form.Control
                                                name="modelo"
                                                onChange={(e) => handleChange(e)}
                                                required
                                                type="text"
                                                placeholder="Nombre del producto"
                                                className="labelform-register"
                                                maxLength="20"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Se requiere el nombre del producto!
                                            </Form.Control.Feedback>
                                            <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label >Precio</Form.Label>
                                            <Form.Control
                                                min="0"
                                                name="price"
                                                onChange={(e) => handleChange(e)}
                                                type="number"
                                                placeholder="$$$"
                                                className="labelform-register"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Precio obligatorio!
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="reginputconteineragregado" controlId="validationCustomUsername">
                                            <Form.Label >Caracteristicas</Form.Label>
                                            <InputGroup hasValidation>
                                                <Form.Control
                                                    minLength="6"
                                                    name="descripcion"
                                                    onChange={(e) => handleChange(e)}
                                                    as="textarea"
                                                    placeholder="Caracteristicas principales del producto"
                                                    aria-describedby="inputGroupPrepend"
                                                    className="labelform-register mb-4"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Las caracteristicas son obligarorias!
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group controlId="formFile" className="mb-3">
                                            <Form.Label className="labelform-register">Agregar imagen del producto de forma local</Form.Label>
                                            <Form.Group controlId="formFileMultiple" className="mb-3" onChange={(e) => onChangeImg(e)}>
                                                <Form.Control type="file" multiple />
                                            </Form.Group>
                                            <Form.Control.Feedback type="invalid">
                                                La imagen es obligaroria!
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label >Stock Disponible</Form.Label>
                                            <Form.Control
                                                name="stock"
                                                onChange={(e) => handleChange(e)}
                                                type="number"
                                                placeholder="stock"
                                                className="labelform-register w-25"
                                                required
                                                min="0"
                                                max="100"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                La cantidad disponible es obligatoria! STOCK
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="selectsa">
                                            <select className="global-btn" aria-label="Default select example"
                                                name="color" onChange={(e) => handleChange(e)} required>
                                                <option defaultValue>Color</option>
                                                <option value="Negro">Negro</option>
                                                <option value="Blanco">Blanco</option>
                                                <option value="Azul">Azul</option>
                                            </select>
                                        </Form.Group>
                                        <Form.Group className="selectsa">
                                            <select className="global-btn" aria-label="Default select example"
                                                name="categoria" onChange={(e) => handleChange(e)} required>
                                                <option defaultValue >Categoria</option>
                                                <option value="Celular">Auriculares</option>
                                                <option value="Tablet">Cargadores</option>
                                                <option value="Accesorios">Accesorios celular</option>
                                                <option value="Otro">Gadget</option>
                                            </select>
                                        </Form.Group>
                                        <Row>
                                            <Button className="global-btn" variant="global-btn" type="submit">
                                                Agregar
                                            </Button>
                                        </Row>
                                        <Row>
                                            <Link className="mx-auto mt-2" to="/productos">
                                                Ver productos agregados
                                            </Link>
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}
