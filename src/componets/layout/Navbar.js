import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                    <div className={styles.TopFit} >
                        <Link to={"/"}> TopFit </Link>
                    </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to={"/matricula"}> Matricule-se </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to={"/promocoes"}> Promocões </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to={"/login"}> Login </Link>
                    </li>
                </ul>
              
            </Container>
        </nav>
    )
}

export default Navbar