import "../styles/Contato.css";
import emailjs from "emailjs-com";

function Contato() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_75bny0f",
        "template_cnr2wgc",
        e.target,
        "abJjoCFokFvazmZ1i"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          console.log(error.text);
          alert("Ocorreu um erro ao enviar a mensagem.");
        }
      );

    e.target.reset();
  }
  return (
    <section id="contato">
      <div className="left-content">
        <img src="/images/contato-image.png" alt="" />
      </div>
      <div className="right-content">
        <h4>Bora papear!</h4>
        <div className="formulario">
          <form onSubmit={sendEmail}>
            <div className="input-group">
              <div className="campo">
                <label htmlFor="name">Nome:</label>
                <input type="text" id="nome" name="name" required />
              </div>

              <div className="campo">
                <label htmlFor="phone">Telefone (opcional):</label>
                <input type="tel" id="telefone" name="phone" />
              </div>
            </div>

            <div className="input-group">
              <div className="campo">
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="campo">
                <label htmlFor="subject">Assunto:</label>
                <input type="text" id="titulo" name="subject" required />
              </div>
            </div>

            <div className="input-group-mensagem">
              <label htmlFor="message">Mensagem:</label>
              <textarea
                id="mensagem"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contato;
