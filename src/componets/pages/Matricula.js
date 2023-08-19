import styles from './Matricula.module.css'

function Matricula(){
    return (
        <section className={styles.sessaoMatricula}>
            <form className={styles.formlarioMatricula}>
                <input type='text' placeholder='Nome completo'/>
                <input type='text' placeholder='CPF'/>
                <input type='text' placeholder='Email'/>
                <input type='text' placeholder='Senha'/>
                <input type='text' placeholder='Confirmação Email'/>
                <input type='text' placeholder='Confirmação Senha'/>
                <button>Confirmar</button>
            </form>
        </section>
    )
}

export default Matricula