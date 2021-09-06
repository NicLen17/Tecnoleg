import React from 'react'
import { Form } from 'react-bootstrap'
import './Footer.css'
import LogoNav from './img/LogoNav.jpg'

export default function Footer() {
  return (
    <div>
      <footer className="footer-distributed">

        <div className="footer-left">

          <h3><img style={{ width: "60px", height: "60px" }} src={LogoNav} alt="" /> Tecnoleg</h3>

          <p className="footer-links">
            <a className="mt-2 " href="#home">Inicio</a>
            <br />
            <a className="mt-2" href="#s" blog>Contacto</a>
            <br />
            <a className="mt-2" href="#a">Registro</a>
            <br />
            <a className="mt-2" href="#a">Carrito</a>
          </p>

          <div className="footer-icons">

            <a href="https://www.facebook.com/brunotecnoleg"><img style={{width: "50px", height: "50px"}} src="https://icongr.am/fontawesome/facebook-official.svg?size=128&color=355bd0" alt="" /></a>
            <a href="https://www.instagram.com/tecnoleg_/"><img style={{width: "50px", height: "50px"}} src="https://icongr.am/fontawesome/instagram.svg?size=128&color=ff24f8" alt="" /></a>
            <a href="https://api.whatsapp.com/send?phone=543816776773"><img style={{width: "50px", height: "50px"}} src="https://icongr.am/fontawesome/whatsapp.svg?size=30&color=1dcd3b" alt="" /></a>

          </div>

        </div>

        <div className="footer-right">

          <p className="mt-3">Contacto:</p>

          <Form action="#" method="post">

            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Mensaje"></textarea>
            <button>Enviar</button>

          </Form>

        </div>

      </footer>
    </div>
  )
}
