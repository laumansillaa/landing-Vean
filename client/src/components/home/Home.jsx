import homeBook from "../../assets/svg/homeBook.svg";
import Gallery from "./CarouselHome";
import style from "./styles/home.module.css";

const Home = () => {
  return (
    <div className={style.contHome} id="home">
      <div className={style.contTxtHome}>
        {/* <h1 className={style.titleHome}>VEAN <h1>es</h1></h1> */}
        <h1>Bienvenidos al futuro de la industria editorial</h1>

        <div className={style.contDescriptionHome}>
          <h4>Comprá, vendé y publicá libros en todo el mundo</h4>
        </div>
        <div className={style.contBtn}>
          <button className={style.btnHome}>
            <a
              //   href="mailto:veanbooks@gmail.com"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeqxwWCcrw0ncY1-HTVF-NBwz1C4JboZSEig5AQ-tJJa7SPzg/viewform"
              target="_blank"
              className={style.aux}
            >
              Empezá ahora
            </a>
          </button>
          <button className={style.btnHome}>
            <a
              href="https://fundit.finance/projects/vean-3wlljg8a6"
              target="_blank"
              className={style.aux}
            >
              Enterate de más
            </a>
          </button>
        </div>
      </div>
      <div className={style.contImgHome}>
        <img src={homeBook} alt="homebook" className={style.homeBook} />
        
      </div>
    </div>
  );
};

export default Home;
