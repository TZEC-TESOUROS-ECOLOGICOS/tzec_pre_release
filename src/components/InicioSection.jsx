// src/components/InicioSection.jsx
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/InicioSection.css";

function InicioSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        
        customPaging: function (i) {
            return <div key={i} className={`custom-dot ${i === 0 ? 'slick-active' : ''}`} />;
          },
  };

  return (
    <section id="inicio">
      <div className="inicio-content">
        <div className="left-content">
          <h2>Tesouros Ecológicos</h2>
          <h3>Gostinho maranhese na sua casa</h3>
          <p>
            Mais do que produtos naturais, oferecemos o sabor autêntico do
            Maranhão, temperado com regionalismo e uma pitada de tradição. Vem
            curtir a essência única da nossa terra!
          </p>
          <a className="botao-primario" href="/">Saiba mais</a>
        </div>
        <div className="right-content">
        <div className="carrossel-container">
          <Slider {...settings}>
            <div>
              <img src="/images/carrossel_01.png" alt="Imagem 1" />
            </div>
            <div>
              <img src="/images/carrossel_02.png" alt="Imagem 2" />
            </div>
            <div>
              <img src="/images/carrossel_03.png" alt="Imagem 3" />
            </div>
          </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InicioSection;
