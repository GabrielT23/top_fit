import styles from './Login.module.css'

function Login(){
    return (
        <section className={styles.sessaoLogin}>
            <form className={styles.formlarioLogin}>
                <input type='text' placeholder='Email'/>
                <input type='text' placeholder='Senha'/>
                <button>Confirmar</button>
            </form>
        </section>

    )
}

export default Login