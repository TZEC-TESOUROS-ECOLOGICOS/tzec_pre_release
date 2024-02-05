// src/components/Footer.jsx
import "../styles/Footer.css";
import { Mail, Phone, Instagram, Facebook } from "react-feather";

function Footer() {
  return (
    <section id="footer">
        <h4>Vem papear com a gente!</h4>
        <div className="social-media">
            <ul>
                <a href="mailto:email@provedor.com.br"><li><Mail /></li></a>
                <a href="https://www.wa.me/5599 "><li><Phone /></li></a>
                <a href="https://www.instagram.com/tzec"><li><Instagram /></li></a>
                <a href="https://www.instagram.com/tzec"><li><Facebook /></li></a>
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
