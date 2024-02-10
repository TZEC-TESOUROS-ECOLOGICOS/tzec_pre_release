// src/components/Footer.jsx
import "../styles/Footer.css";
import { Envelope, Whatsapp, Instagram } from "react-bootstrap-icons";

function Footer() {
  return (
    <section id="footer">
      <h4>Vem seguir a gente!</h4>
      <div className="social-media">
        <ul>
          <a href="mailto:contato@tzec.com.br">
            <li>
              <Envelope />
            </li>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5599984052737&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20a%20TZEC%20%F0%9F%98%80%F0%9F%8D%807">
            <li>
              <Whatsapp />
            </li>
          </a>
          <a href="https://www.instagram.com/tzec_">
            <li>
              <Instagram />
            </li>
          </a>
        </ul>
      </div>
      <div className="subtitle">
        <h5>Tesouros Ecológicos</h5>
        <h6>Gostinho maranhense na sua casa</h6>
      </div>
    </section>
  );
}

export default Footer;
