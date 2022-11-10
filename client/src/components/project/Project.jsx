import style from './styles/project.module.css'

const Project = () => {

    return (
        <div className={style.contProject} id='project'>
            <div className={style.contTitle}>
                <h1>EL PROYECTO</h1>
            </div>
            <div className={style.contDescription}>
                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime doloribus laborum iure nam hic magni a alias repellat, voluptatem perspiciatis corrupti fugit ut odit praesentium minima dignissimos, enim impedit aliquid.</h5>
                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime doloribus laborum iure nam hic magni a alias repellat, voluptatem perspiciatis corrupti fugit ut odit praesentium minima dignissimos, enim impedit aliquid.</h5>
                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime doloribus laborum iure nam hic magni a alias repellat, voluptatem perspiciatis corrupti fugit ut odit praesentium minima dignissimos, enim impedit aliquid.</h5>
            </div>
        </div>
    )
}


export default Project;