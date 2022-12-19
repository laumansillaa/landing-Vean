import { useEffect, useState } from 'react'
import style from './styles/roadmap.module.css'
import RoadmapMobile from './RoadmapMobile'
import RoadMui from './RoadMui'

const Roadmap = () => {

    const [mobile, setMobile] = useState(null)
    const [windowSize, setWindowSize] = useState(getWindowSize())
    // console.log('SOY WIDTH: ', innerWidth)

    useEffect(() => {

        function handleWindowResize () {
            setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleWindowResize);

        if (windowSize < 480){
            setMobile(true)
        } else {
            setMobile(null)
        }
        // console.log('SOY WIDTH effect: ', windowSize)

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
        

    }, [windowSize])

    function getWindowSize () {
        const {innerWidth} = window
        return innerWidth
    }


    return (
        <div className={style.contRoadmap} id='roadmap'>
            <div className={style.contTitle}>
                <h1>ROADMAP</h1>
            </div>

                {/* <RoadMui/> */}

            {
                mobile? <RoadmapMobile/> :

                <div className={style.contRoad}>
                    <div className={style.contLeft}>
                        <div className={style.contCardRoad}>
                            <h5>Q4 - 2022</h5>
                            <h2>BIENVENIDA</h2>
                            <h6>Landing page informativa. Comunidad: Twitter + Telegram.
                                Proyecto en FundIt. Whitepaper.
                            </h6>
                        </div>

                        <div className={style.contCardRoad}>
                            <h5>Q2 - 2023</h5>
                            <h2>EL CAMINO</h2>
                            <h6>Primer marketplace. Pagos con criptomonedas y FIAT. 
                                Beta abierta de venta al público.</h6>
                        </div>

                        <div className={style.contCardRoad}>
                            <h5>Q4 - 2023</h5>
                            <h2>EL FUTURO</h2>
                            <h6>Modelo de franquiciado: librerias asociadas.
                                Gobernanza descentralizada: primer token nativo.
                                Nuevas funciones: alquileres, suscripciones y más.
                            </h6>
                        </div>
                    </div>

                    <div className={style.contRight}>
                        <div className={style.contCardRoadR}>
                            <h5>Q1 - 2023</h5>
                            <h2>PRUEBA DE CONCEPTO</h2>
                            <h6>Invitamos a autores/as y sellos editoriales. 
                                Validamos la prueba de valor. Desarrollamos los primeros formatos.
                            </h6>
                        </div>

                        <div className={style.contCardRoadR}>
                            <h5>Q3 - 2023</h5>
                            <h2>LA EXPANSION</h2>
                            <h6>Apertura de nuestros locales. Venta de libros como Tokens No Fungibles.
                                Nuevos participantes: traductores e ilustradoras.
                            </h6>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


export default Roadmap;