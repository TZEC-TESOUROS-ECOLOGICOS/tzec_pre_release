import "../styles/Depoimento.css";

const Depoimento = ({ comment, icon, title, description }) => {
  return (
    <div className="depoimento">
        <p className="comment">{comment}</p>
        <div className="foto-nomes">
          <img style={{borderRadius: "100%"}} src={icon} width="50px" alt="" />
          <div className="nome-cargo">
              <h5 className="nome">{title}</h5>
              <h6 className="cargo">{description}</h6>
          </div>
        </div>
    </div>
  );
};

export default Depoimento