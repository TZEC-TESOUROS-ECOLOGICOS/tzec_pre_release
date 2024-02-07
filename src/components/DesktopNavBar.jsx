import { useEffect, useState } from "react";
import "../styles/DesktopNavBar.css";

function DesktopNavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      setVisible(!isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
      <div className="logo">
        <img src="/logo_navbar.svg" alt="Logo" height="42" />
      </div>
      <div className="menu">
        <ul>
          <a href="#">
            <li className="item-menu">Início</li>
          </a>
          <a href="#beneficios">
            <li className="item-menu">Benefícios</li>
          </a>
          <a href="#depoimentos">
            <li className="item-menu">Depoimentos</li>
          </a>
          <a href="#contato">
            <li className="item-menu">Contato</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default DesktopNavBar;
