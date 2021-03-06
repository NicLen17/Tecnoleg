import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap';

const options = [
    {
        name: <img style={{width: "55px", height: "35px"}} src="https://icongr.am/fontawesome/align-justify.svg?size=128&color=currentColor" alt="" />,
        scroll: true,
        backdrop: false,
    },
];

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>
            <Button className="global-btn me-2" variant="global-btn" onClick={toggleShow}>
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Prueba 1
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default function Example() {
    return (
        <>
            {options.map((props, idx) => (
                <OffCanvasExample key={idx} {...props} />
            ))}
        </>
    );
}
