import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Carro from './components/Carro'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SProductos from './Pages/SProductos';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SCards from './components/SCards';
import Contacto from './Pages/Contacto'
import Carrito from './Pages/Carrito'
import Pindividual from './components/Pindividual';
import Seccion404 from './components/Seccion404';
import Admin from './Pages/Admin';
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { useEffect, useState } from 'react';
import axios from 'axios';

const localToken = JSON.parse(localStorage.getItem("token"))?.token || "";
function App() {

  const [user, setUser] = useState({});
  const [productosCarrito, setProductosCarrito] = useState([])
  const [token, setToken] = useState(localToken);
  useEffect(() => {

    if (token) {
      const request = async () => {
        axios.defaults.headers = { "x-auth-token": token };
        const { data } = await axios.get("/auth");
        setUser(data);
      };
      request();
    }
  }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
    axios.defaults.headers = { "x-auth-token": "" };
    setUser({});
    setToken("");
  };

  return (
    <div className="App">

      <Router>

        <Route>
          <ScrollToTop></ScrollToTop>
        </Route>

        <NavBar 
          userName={user.nombre}
          userCategory={user.category}
          logout={logout} />

        <Switch>

          <Route path="/" exact>
            <Carro />

            <SCards />

          </Route>
          <Route path="/productos" exact>
            <SProductos />
          </Route>

          <Route path="/contacto" exact>
            <Contacto />
          </Route>

          <Route path="/carrito" exact>
            <Carrito productosCarrito={productosCarrito} setProductosCarrito= {setProductosCarrito} />
          </Route>

          <Route path="/individual/:id" exact>
            <Pindividual productosCarrito={productosCarrito} setProductosCarrito= {setProductosCarrito} />
          </Route>

          <Route path="/admin" exact>
            <Admin user={user.nombre} />
          </Route>

          <Route path="/login">
            <Login setUser={setUser} setToken={setToken} />
          </Route>

          <Route path="/register">
            <Register setToken={setToken} />
          </Route>

          <Route path="*" component={Seccion404} />

        </Switch>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
