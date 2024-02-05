import "../styles/Contato.css";

function Contato() {
  return (
    <section id="contato">
      <div className="left-content">
        <img src="/images/contato-image.png" alt="" />
      </div>
      <div className="right-content">
        <h4>Fale conosco</h4>
        <div className="formulario">


        <form>
          <div className="input-group">
            <div className="campo">
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" required />
            </div>

            <div className="campo">
              <label htmlFor="telefone">Telefone (opcional):</label>
              <input type="tel" id="telefone" name="telefone" />
            </div>
          </div>

          <div className="input-group">
            <div className="campo">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="campo">
              <label htmlFor="titulo">Título:</label>
              <input type="text" id="titulo" name="titulo" required />
            </div>
          </div>

          <div className="input-group mensagem">
            <label htmlFor="mensagem">Mensagem:</label>
            <br />
            <textarea id="mensagem" name="mensagem" rows="4" required></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>


      </div>
      </div>
    </section>
  )
}

export default Contato

