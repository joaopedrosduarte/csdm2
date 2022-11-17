import styles from './provider.module.css'
import { useNavigate } from 'react-router-dom'

export default function Provider({fornecedor}){
    const navigate = useNavigate();
    
    function handleNewRequest(){
        navigate("/home/aplication/new_request")
    }

    return(
        <div className={styles.wrapper}> 
            <h1>{fornecedor}</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam ipsam laudantium itaque veniam dicta perferendis possimus, culpa natus architecto deserunt earum eaque, placeat nisi ad quod nemo aliquid! Possimus?</span>
            <div className={styles.buttonDiv}>
                <button className={styles.buttonUI} onClick={handleNewRequest}>
                    Ver Detalhes
                </button>
            </div>
        </div>
    )
}