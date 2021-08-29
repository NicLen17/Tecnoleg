import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Carro from './components/Carro'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SProductos from './Pages/SProductos';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SCards from './components/SCards';

function App() {
  return (
    <div className="App">

      <Router>

        <Route>
          <ScrollToTop></ScrollToTop>
        </Route>

        <NavBar />

        <Switch>

          <Route path="/" exact>
            <Carro />

            <SCards />
          </Route>
          <Route path="/productos" exact>
            <SProductos />
          </Route>
        </Switch>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
