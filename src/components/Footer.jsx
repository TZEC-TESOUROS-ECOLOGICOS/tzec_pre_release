// src/components/Footer.jsx
import "../styles/Footer.css";
import { Envelope, Whatsapp, Instagram } from "react-bootstrap-icons";

function Footer() {
  return (
    <section id="footer">
      <h4>Vem seguir a gente!</h4>
      <div className="social-media">
        <ul>
          <a href="mailto:tzececologicos@gmail.com">
            <li>
              <Envelope />
            </li>
          </a>
          <a href="https://www.wa.me/5599991526997 ">
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
        <h6>Gostinho maranhese na sua casa</h6>
      </div>
    </section>
  );
}

export default Footer;
