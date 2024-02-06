import "../styles/Beneficios.css";
import { CheckAll, Recycle, HouseHeart } from "react-bootstrap-icons"
import Beneficio from "./Beneficio";

function Beneficios() {
  return (
    <section id="beneficios">
      <div className="beneficios-content">
        <h4>Gostinho maranhense na sua casa</h4>
        <h5>Saca só os benefícios em garantir um produto TZEC.</h5>
        <div className="beneficio-container">
          <Beneficio icon={<CheckAll size={26}/>} title="Autenticidade Maranhense" description="Cada mordida é uma exploração do sabor da região - uma jornada de sabores autênticos que encantam seu paladar." />

          <Beneficio icon={<Recycle size={26}/>} title="Sustentabilidade" description="Nosso compromisso também é com o planeta! Nossos produtos refletem a beleza maranhense e a beleza da sustentabilidade." />

          <Beneficio icon={<HouseHeart size={26}/>} title="Apoio à Economia Local." description="Valorizamos a cultura da nossa região maranhense. Cada compra apoia a economia local, cultivando prosperidade." />
        
        </div>
      </div>
    </section>
  );
}

export default Beneficios;
