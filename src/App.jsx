// src/App.jsx
import NavBar from "./components/NavBar";
import InicioSection from './components/InicioSection';
import Beneficios from './components/Beneficios';
import Depoimentos from "./components/Depoimentos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import "../src/styles/App.css";


function App() {
  return (
    <div className="app-container">
      <NavBar />
      <InicioSection />
      <Beneficios />
      <Depoimentos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
