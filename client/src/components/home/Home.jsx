import style from './styles/home.module.css'

const Home = () => {

    return (
        <div className={style.contHome} id='home'>
            <div className={style.contTxtHome}>
                <h1>VEAN es</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing</h4>

                <div className={style.contDescriptionHome}>
                    <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio provident, aspernatur accusamus perspiciatis earum animi nihil aperiam consequuntur maxime esse obcaecati, debitis in enim vero, explicabo similique eum impedit hic.
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