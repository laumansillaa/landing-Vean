import style from './styles/mobile.module.css'

const RoadmapMobile = () => {
        return (
            <div className={style.contRoad}>
                <div className={style.contRight}>
                    <div className={style.contCardRoad}>
                        <h5>Q4 - 2022</h5>
                        <h2>BIENVENIDA</h2>
                        <h6>Landing page informativa. Comunidad: Twitter + Telegram
                            Proyecto en FundIt. Whitepaper.
                        </h6>
                    </div>
                    <div className={style.contCardRoad}>
                        <h5>Q1 - 2023</h5>
                        <h2>PRUEBA DE CONCEPTO</h2>
                        <h6>Invitamos a autores/as y sellos editoriales.
                            Validamos la prueba de valor. 
                            Desarrollamos los primeros formatos.
                        </h6>
                    </div>
                    <div className={style.contCardRoad}>
                        <h5>Q2 - 2023</h5>
                        <h2>EL CAMINO</h2>
                        <h6>Primer marketplace. Pagos con criptomonedas
                            y FIAT. Beta abierta de venta al público.
                        </h6>
                    </div>
                    <div className={style.contCardRoad}>
                        <h5>Q3 - 2023</h5>
                        <h2>LA EXPANSION</h2>
                        <h6>Apertura de nuestros locales.
                            Venta de libros como Tokens No Fungibles.
                            Nuevos participantes: traductores e ilustradoras.
                        </h6>
                    </div>
                    <div className={style.contCardRoad}>
                        <h5>Q4 - 2023</h5>
                        <h2>EL FUTURO</h2>
                        <h6>Modelo de franquiciado: librerias asociadas.
                            Gobernanza descentralizada: primer token nativo.
                            Nuevas funciones: alquileres, suscripciones y más.
                        </h6>
                    </div>
                    {/* <div className={style.contCardRoad}>
                        <h5>Q6</h5>
                        <h2>TITLE 01</h2>
                        <h6></h6>
                    </div> */}
                </div>
            </div>
        )
    }


export default RoadmapMobile;