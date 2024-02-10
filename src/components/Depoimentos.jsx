import "../styles/Depoimentos.css";
import Depoimento from "./Depoimento";

function Depoimentos() {
  return (
    <section id="depoimentos">
      <h4 className="depoimentos-titulo">Depoimentos</h4>
      <h5 className="depoimentos-subtitulo">
        Dá uma olhada no que estão falando da TZEC pelo Marannhão afora!
      </h5>
      <div className="depoimentos-container">
        <Depoimento
          comment={
            "Desde que comecei a consumir os produtos da empresa, sinto-me mais conectado com a natureza e a cultura maranhense. É uma experiência deliciosa e enriquecedora!"
          }
          icon={"/images/depoimento-01.png"}
          title={"Dideia Torres"}
          description={"Analista do SEBRAE"}
        />
        <Depoimento
          comment={
            "Os produtos da empresa trazem um pedacinho do Maranhão até minha casa - é como ter um pedacinho da região na minha mesa todos os dias!"
          }
          icon={"/images/depoimento-02.jpeg"}
          title={"Yasmin Milhomem"}
          description={"Entusiasta de produtos naturais"}
        />
        <Depoimento
          comment={
            "Estou encantado com a variedade de opções naturais que a empresa oferece. É bom saber que estou apoiando produtores locais e cuidando da minha saúde ao mesmo tempo!"
          }
          icon={"/images/depoimento-03.png"}
          title={"Vinicius Schneider"}
          description={"Entusiasta de produtos naturais"}
        />
        <Depoimento
          comment={
            "Cada produto que experimento da empresa me transporta diretamente para as paisagens e sabores do Maranhão. "
          }
          icon={"/images/depoimento-04.png"}
          title={"Daniel Duarte"}
          description={"Mentor de gestão"}
        />
      </div>
    </section>
  );
}

export default Depoimentos;
