import style from './styles/home.module.css'

const Home = () => {

    return (
        <div className={style.contHome} id='home'>
            <div className={style.contTxtHome}>
                <h1>VEAN es</h1>
                <h4>Bienvenidos al futuro de la industria editorial</h4>

                <div className={style.contDescriptionHome}>
                    <h4>
                        Comprá, vendé y publicá libros en todo el mundo
                    </h4>
                </div>
                <div className={style.contBtn}>
                    <button className={style.btnHome}>
                        <a href='mailto:veanbooks@gmail.com'
                            target="_blank"
                            className={style.aux}
                        >
                            Contactanos
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;