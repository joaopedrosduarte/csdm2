import styles from "./home.module.css"
import Order from '../../components/Order';
import Sidebar from "../../components/Sidebar";
import { Plus } from "phosphor-react"
import { useNavigate } from "react-router-dom";

export default function Home({modal}){
    const navigate = useNavigate();

    function handleNewApplication(event){
        event.preventDefault();

        navigate('/home/application');
    }

    return(
        <div className={styles.wrapper}>
            <Sidebar />
            <div className={styles.content}>
                <div>
                    <h1>Requisições em andamento</h1>
                    <div className={styles.orders}>
                        <Order pedido={"Pedido 1"} fornecedor={"Loja X"}/>
                        <Order pedido={"Pedido 2"} fornecedor={"Loja Y"}/>
                    </div>
                </div>
                <form className={styles.buttonUI} onSubmit={handleNewApplication}>
                    <button><Plus size={14} color="#fcfcfc" weight="bold" />Fazer Requerimento</button>
                </form>
            </div>
        </div>
    )
}