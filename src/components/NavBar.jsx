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
          <a href="#"><li>Início</li></a>
          <a href="#beneficios"><li>Benefícios</li></a>
          <a href="#depoimentos"><li>Depoimentos</li></a>
          <a href="#contato"><li>Contato</li></a>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
