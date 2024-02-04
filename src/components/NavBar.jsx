// src/components/NavBar.jsx
import "../styles/NavBar.css";
import "../styles/App.css";

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <img src="/logo_navbar.svg" alt="Logo" height="46" />
      </div>
      <div className="menu">
        <div className="menuItem">Início</div>
        <div className="menuItem">Sobre nós</div>
        <div className="menuItem">Contato</div>
      </div>
    </nav>
  );
}

export default NavBar;
