import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Carro from './components/Carro'
import NavBar from './components/NavBar'
import Inicio from './components/Inicio'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">

      <NavBar />

      <Carro />

      <Inicio />

      <Footer />

    </div>
  );
}

export default App;
