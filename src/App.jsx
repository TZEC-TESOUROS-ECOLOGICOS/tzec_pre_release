// src/App.jsx
import NavBar from "./components/NavBar";
import InicioSection from './components/InicioSection';
import Beneficios from './components/Beneficios'
import "../src/styles/App.css";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <InicioSection />
      <Beneficios />
    </div>
  );
}

export default App;
