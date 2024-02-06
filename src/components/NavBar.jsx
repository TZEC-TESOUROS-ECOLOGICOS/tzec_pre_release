// src/components/NavBar.jsx
import "../styles/NavBar.css";
import "../styles/App.css";

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <img src="/logo_navbar.svg" alt="Logo" height="42" />
      </div>
      <div className="menu">
        <ul>
          <a href="#"><li className="item-menu">Início</li></a>
          <a href="#beneficios"><li className="item-menu">Benefícios</li></a>
          <a href="#depoimentos"><li className="item-menu">Depoimentos</li></a>
          <a href="#contato"><li className="item-menu">Contato</li></a>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
