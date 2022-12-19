import style from './styles/project.module.css'

const Project = () => {

    return (
        <div className={style.contProject} id='project'>
            <div className={style.contTitle}>
                <h1>EL PROYECTO</h1>
            </div>
            <div className={style.contDescription}>
                <div className={style.contCardProyect}>
                    <div className={style.ContTitleCard}>
                        <h2 className={style.titleCard}>Más libros, para más personas</h2>
                    </div>
                    <div>
                        <h6 className={style.textCard}>
                            Usamos la tecnología como una herramienta para publicar libros,
                            almacenarlos en una base de datos descentralizada e imprimirlos
                            bajo demanda luego de cada compra.
                        </h6>
                    </div>
                </div>
                <div className={style.contCardProyect}>
                    <div className={style.ContTitleCard}>
                        <h2 className={style.titleCard}>¿Cómo funciona?</h2>
                    </div>
                    <div>
                        <div>
                            <h6 className={style.textCard}>
                                • Publicá tu ejemplar con nuestro formulario de ingreso
                            </h6>
                        </div>
                        <div>
                            <h6 className={style.textCard}>
                                • Ponelo a la venta en nuestro marketplace
                            </h6>
                        </div>
                        <div>
                            <h6 className={style.textCard}>
                                • Conseguí ingresos luego de cada compra
                            </h6>
                        </div>

                    </div>
                </div>
                <div className={style.contCardProyect}>
                    <div className={style.ContTitleCard}>
                        <h2 className={style.titleCard}>Descubrí una industria mejor</h2>
                    </div>
                    <div>
                        <h6 className={style.textCard}>
                            Creamos un sistema de impresión que usa materiales ecologicos,
                            mediante un modelo de distribucion digital que permite que estén
                            disponibles en todas partes.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Project;