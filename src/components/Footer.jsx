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

          <p className="mt-3">Direccion:</p> <br />
          <p>C. República de Francia 64, Tucumán</p>

          <div className="mapa-footer mt-2" action="#" method="post">

            <a href="https://www.google.com/maps/dir/-26.7705179,-65.2263446/tecnoleg/@-26.8029971,-65.2341758,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94225c034dbd42a3:0x3537b867703ff27f!2m2!1d-65.1958326!2d-26.8311852"> <img className="mapa-img" style={{width: "350px", height: "200px"}} src="https://img.lagaceta.com.ar/fotos/notas/2016/07/27/tmb1_691869_201607261953120000001.jpg" alt="" /> </a>

          </div>

        </div>

      </footer>
    </div>
  )
}
