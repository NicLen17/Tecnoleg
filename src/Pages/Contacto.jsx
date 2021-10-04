import React from 'react'
import './Contacto.css'
import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from 'axios';

export default function Contacto() {

    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({});
    const [alert, setAlert] = useState("");
    const [alertSuccess, setalertSuccess] = useState("")

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    const handleSubmit = async (e) => {
        const formulario = e.currentTarget;
        e.preventDefault();
        setValidated(true);
        if (formulario.checkValidity() === false) {
            return e.stopPropagation();
        }
        try {
            await axios.post("/mensajes", input);
            formulario.reset()
            setalertSuccess("Mensaje enviado. Gracias en breve le responderemos");
            setValidated(false);
        } catch (error) {
            error.response.data.msg
                ? setAlert(error.response.data.msg)
                : setAlert("este error");
        }
        setTimeout(() => {
            setAlert("");
        }, 5000);
    };
    const handleChange = (e) => {
        setAlert("");
        const { name, value } = e.target;
        const mensaje = { ...input, [name]: value };
        setInput(mensaje);
    }

    return (
        <div data-aos="fade-up" className="Contacto-cont">
            <div className="Contacto-form">
            {alert && <Alert variant="danger">{alert}</Alert>}
                {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
                <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group
                        style={{ marginTop: "15px" }}
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control className="labelform" type="name" placeholder="Ingresar su nombre" required name="nombreyapellido" maxLength="50" onChange={(e) => handleChange(e)} />
                        <Form.Control.Feedback type="invalid">
                            Se requiere nombre y apellido!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        style={{ marginTop: "15px" }}
                        controlId="exampleForm.ControlInput1"       >
                        <Form.Label>Correo electronico</Form.Label>
                        <Form.Control className="labelform" type="email" placeholder="Correo@example.com" required maxLength="30" name="email" onChange={(e) => handleChange(e)} />
                        <Form.Control.Feedback type="invalid">
                            Se requiere correo Electronico!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        style={{ marginTop: "15px" }}
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control className="labelform" maxLength="10" type="number" placeholder="codigo de area + numero sin 15" required max="999999999999" name="tel" onChange={(e) => handleChange(e)} />
                        <Form.Control.Feedback type="invalid">
                            Se requiere telefono valido!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        style={{ marginTop: "15px" }}
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control className="labelform" minLength="20" maxLength="300" as="textarea" placeholder="Mensaje" required rows={3} name="mensaje" onChange={(e) => handleChange(e)} />
                        <Form.Control.Feedback type="invalid">
                            Se requiere mensaje y un minimo de 20 caracteres!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                    </Form.Group>
                    <Button className="global-btn mt-5 mb-5"
                        variant="msgbut"
                        type="submit"
                        style={{ marginTop: "10px", width: "100%" }}
                    >
                        Enviar
                        <img
                            src="https://icongr.am/octicons/comment.svg?size=25&color=ffffff"
                            className="mr-3"
                            alt="imagen no disponible"
                        />
                    </Button>
                </Form>
            </div>
        </div>
    )
}
