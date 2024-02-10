import { Star, StarFill } from "react-bootstrap-icons";
import "../styles/Depoimento.css";

const Depoimento = ({ comment, icon, title, description }) => {
  return (
    <div className="depoimento">
      <p className="comment">{comment}</p>
      <div className="profile">
        <div className="foto-nomes">
          <img
            style={{ borderRadius: "100%" }}
            src={icon}
            width="60px"
            alt=""
          />
          <div className="nome-cargo">
            <h5 className="nome">{title}</h5>
            <h6 className="cargo">{description}</h6>
          </div>
        </div>
        <div className="estrelas">
          {<StarFill color="#ff8a00" size={20} />}
          {<StarFill color="#ff8a00" size={20} />}
          {<StarFill color="#ff8a00" size={20} />}
          {<StarFill color="#ff8a00" size={20} />}
          {<Star color="#ff8a00" size={20} />}
        </div>
      </div>
    </div>
  );
};

export default Depoimento;
