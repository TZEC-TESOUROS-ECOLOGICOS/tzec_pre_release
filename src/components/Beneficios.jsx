// src/components/InicioSection.jsx
import "../styles/Beneficios.css";
import { Clock, DollarSign, Truck } from "react-feather";

function Beneficios() {
  return (
    <section id="beneficios">
      <div className="beneficios-content">
        <h4>Gostinho maranhense na sua casa</h4>
        <h5>Saca só os benefícios em garantir um produto TZEC.</h5>
        <div className="beneficio-container">
          <div className="beneficio">
            <div className="beneficio-title">
              <Truck />
              <h6>Entrega garantida</h6>
            </div>
            <p>Nosso método de envio é seguro e nacional!</p>
          </div>

          <div className="beneficio">
            <div className="beneficio-title">
              <DollarSign />
              <h6>Pagamento seguro</h6>
            </div>
            <p>Sistema de pagamentos robusto e confiável.</p>
          </div>

          <div className="beneficio">
            <div className="beneficio-title">
              <Clock />
              <h6>Suporte 24h</h6>
            </div>
            <p>Estamos prontos para lhe ajudar a qualquer momento.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Beneficios;
