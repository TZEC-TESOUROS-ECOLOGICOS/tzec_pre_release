import { useState, useEffect } from "react";
import "../styles/MobileNavBar.css";

function MobileNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleMenuClick() {
    setMenuOpen(false); // Fecha o menu ao clicar em uma opção
  }

  // Função para lidar com a rolagem da página
  function handleScroll() {
    // Obtém o deslocamento da página em relação ao topo da janela
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Define a visibilidade da navbar com base no deslocamento
    setNavbarVisible(scrollTop < (window.lastScroll || 0));
    window.lastScroll = scrollTop;
    setMenuOpen(false);
  }

  // Função para lidar com o clique fora do menu
  function handleOutsideClick(event) {
    if (!event.target.closest(".mobile-navbar")) {
      setMenuOpen(false); // Fecha o menu se o clique for fora da navbar
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className={`mobile-navbar ${navbarVisible ? "" : "hidden"}`}>
      <div className="logo">
        <img src="/logo_navbar.svg" alt="Logo" height="42" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`} />
        <div className={`bar ${menuOpen ? "open" : ""}`} />
        <div className={`bar ${menuOpen ? "open" : ""}`} />
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <a href="#inicio" onClick={handleMenuClick}>
            <li>Início</li>
          </a>
          <a href="#beneficios" onClick={handleMenuClick}>
            <li>Benefícios</li>
          </a>
          <a href="#depoimentos" onClick={handleMenuClick}>
            <li>Depoimentos</li>
          </a>
          <a href="#contato" onClick={handleMenuClick}>
            <li>Contato</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default MobileNavBar;
