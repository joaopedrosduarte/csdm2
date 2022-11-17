import { useNavigate } from "react-router-dom";
import styles from "./login.module.css"

export default function Login(){
    const navigate = useNavigate();

    function handleLogin(event){
        event.preventDefault();

        navigate("/home");
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.login}>
                <div className={styles.pic}></div>
                <form action="" className={styles.forms} onSubmit={handleLogin}>
                    <span className={styles.loginTxt}>Login</span>
                    <span className={styles.spansInput1}>E-mail</span>
                    <input type="email" className={styles.inputs}placeholder="input" />
                    <span className={styles.spansInput2}>Senha</span>
                    <input type="text" className={styles.inputs} placeholder="input" />
                    <a href="#" className={styles.help}>Esqueci minha senha</a>
                    <button type="submit" className={styles.buttonLogin}>
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    )
}