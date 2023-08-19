import styles from './Home.module.css'
import principal from '../../img/principal.jpeg'
import aerobico from '../../img/aerobico.jpeg'
import equipamentos from '../../img/equipamentos.jpeg'
import professor from '../../img/professor.jpeg'
function Home(){
    return (
        <section className={styles.container}>
            <div className={styles.principal}>
                <img src={principal} alt='TopFit'/>
            </div>
            <div className={styles.Infraestrutura}>
                <h1>
                    APROVEITE NOSSA INFRAESTRUTURA
                </h1>
                <div className={styles.cards}>
                    <div>
                        <img src={equipamentos} alt='TopFit'/>
                        <p>
                            Equipamentos de alto padrão
                        </p>
                    </div>
                    <div>
                        <img src={aerobico} alt='TopFit'/>
                        <p>
                            Equipamentos de alto padrão
                        </p>    
                    </div>
                    <div>
                        <img src={professor} alt='TopFit'/> 
                        <p>
                            Equipamentos de alto padrão
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home