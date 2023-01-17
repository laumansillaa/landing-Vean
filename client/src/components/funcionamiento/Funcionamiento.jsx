import style from "./styles/funcionamiento.module.css";
import imgSvg from "../../assets/svg/homeBook.svg";
// import Gallery from '../home/CarouselHome';

const Funcionamiento = () => {
  return (
    <div className={style.contFuncionamiento} id="funcionamiento">
      <div className={style.contTitle}>
        <h1>COMO FUNCIONA</h1>
      </div>
      <div className={style.contIt}>
        <div className={style.contItems}>
          <div className={style.contText}>
            <h3>1) Publicá tu ejemplar con nuestro formulario de ingreso.</h3>
          </div>
          <div className={style.contText}>
            <h3>2) Ponelo a la venta en nuestro marketplace.</h3>
          </div>
          <div className={style.contText}>
            <h3>3) Conseguí ingresos luego de cada compra.</h3>
          </div>
        </div>
        {/* <Gallery /> */}
      </div>

      {/* <div className={style.contCards}>
        <div>
          <div className={style.contCardOne}>
            <div className={style.contTexts}>
              <div><h4>Más libros, para más personas.</h4></div>
              <div className={style.cardDescription}>Creemos que vivir de escribir no debería ser una odisea.
                Por eso construimos una herramienta para publicar, vender y distribuir libros de forma
                mucho más simple.
              </div>
            </div>
            <div>
              <img src={imgSvg} className={style.imgIcons}/>
            </div>
          </div>
          <div className={style.contCardTwo}>
            <div className={style.contTextsTwo} >
              <div><h4>Descubrí una industria mejor</h4></div>
              <div className={style.cardDescriptionTwo} >
                Diseñamos un modelo de impresión eficiente que ofrece libros más baratos
                que siempre están disponibles, sin importar distancias, ni fronteras.
              </div>
            </div>
            <img src={imgSvg} className={style.imgIcons}/>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Funcionamiento;
