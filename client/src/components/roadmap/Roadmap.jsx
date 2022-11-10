import { useEffect, useState } from 'react'
import style from './styles/roadmap.module.css'
import RoadmapMobile from './RoadmapMobile'

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

            {
                mobile? <RoadmapMobile/> :

                <div className={style.contRoad}>
                    <div className={style.contLeft}>
                        <div className={style.contCardRoad}>
                            <h5>Q2</h5>
                            <h2>TITLE 01</h2>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, excepturi eligendi! Nam sequi delectus dolores eveniet nostrum nihil asperiores aliquid optio vitae? Nostrum nesciunt maxime iusto fugit? Officiis, repellendus maxime!</h6>
                        </div>
                        <div className={style.contCardRoad}>
                            <h5>Q4</h5>
                            <h2>TITLE 01</h2>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, excepturi eligendi! Nam sequi delectus dolores eveniet nostrum nihil asperiores aliquid optio vitae? Nostrum nesciunt maxime iusto fugit? Officiis, repellendus maxime!</h6>
                        </div>
                        <div className={style.contCardRoad}>
                            <h5>Q6</h5>
                            <h2>TITLE 01</h2>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, excepturi eligendi! Nam sequi delectus dolores eveniet nostrum nihil asperiores aliquid optio vitae? Nostrum nesciunt maxime iusto fugit? Officiis, repellendus maxime!</h6>
                        </div>
                    </div>
                    <div className={style.contRight}>
                        <div className={style.contCardRoadR}>
                            <h5>Q1</h5>
                            <h2>TITLE 01</h2>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, excepturi eligendi! Nam sequi delectus dolores eveniet nostrum nihil asperiores aliquid optio vitae? Nostrum nesciunt maxime iusto fugit? Officiis, repellendus maxime!</h6>
                        </div>
                        <div className={style.contCardRoadR}>
                            <h5>Q3</h5>
                            <h2>TITLE 01</h2>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, excepturi eligendi! Nam sequi delectus dolores eveniet nostrum nihil asperiores aliquid optio vitae? Nostrum nesciunt maxime iusto fugit? Officiis, repellendus maxime!</h6>
                        </div>
                        <div className={style.contCardRoadR}>
                            <h5>Q5</h5>
                            <h2>TITLE 01</h2>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, excepturi eligendi! Nam sequi delectus dolores eveniet nostrum nihil asperiores aliquid optio vitae? Nostrum nesciunt maxime iusto fugit? Officiis, repellendus maxime!</h6>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


export default Roadmap;