// components/Beneficio.js
import "../styles/Beneficio.css";

const Beneficio = ({ icon, title, description }) => {
  return (
    <div className="beneficio">
      <div className="beneficio-title">
        {icon}
        <h6>{title}</h6>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Beneficio;
