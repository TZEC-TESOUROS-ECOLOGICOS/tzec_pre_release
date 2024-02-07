import { useEffect, useState } from "react";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  // Verifica se o viewport tem uma largura menor que 768px para decidir se a navbar móvel deve ser exibida
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <MobileNavBar /> : <DesktopNavBar />}</>;
}

export default NavBar;
