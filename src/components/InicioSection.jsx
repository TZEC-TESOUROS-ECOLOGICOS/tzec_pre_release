// src/components/InicioSection.jsx
import "../styles/InicioSection.css";

function InicioSection() {
  return (
    <section className="inicio-section">
      <div className="inicio-content">
        <div className="left-content">
          <h2>Tesouros Ecológicos</h2>
          <h3>Gostinho maranhese na sua casa</h3>
          <p>
            Mais do que produtos naturais, oferecemos o sabor autêntico do
            Maranhão, temperado com regionalismo e uma pitada de tradição. Vem
            curtir a essência única da nossa terra em cada experiência
            culinária!
          </p>
          <button>Saiba mais!</button>
        </div>
        <div className="right-content">
          {/* Adicione o carrossel de fotos aqui */}
          <p>Fotos do carrossel</p>
        </div>
      </div>
    </section>
  );
}

export default InicioSection;
