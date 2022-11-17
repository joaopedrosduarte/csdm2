import styles from './finalOrder.module.css';
import Sidebar from '../../components/Sidebar';
import { Plus } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

export default function FinalOrder() {
    const navigate = useNavigate();

    function handleBackPage(){
        navigate('/home/aplication/new_request')
    }

    function handleApplicationDone(){
        navigate('/home');
    }

    return (
        <div className={styles.wrapper}>
            <Sidebar />
            <div className={styles.content}>
                <div className={styles.mainContent}>
                    <div className={styles.divMainContent}>
                        <header>
                            <h1>Fornecedor 1</h1>
                        </header>
                        <main>
                        <div className={styles.products}>
                                <h2 className={styles.productTxt}>Informações </h2>
                                <textarea className={styles.productsImg}>
                                </textarea>
                            </div>
                        </main>
                        <footer>
                            <form className={styles.buttonUI1} onSubmit={handleBackPage}>
                                <button><p>VOLTAR</p></button>
                            </form>
                            <form className={styles.buttonUI2} onSubmit={handleApplicationDone}>
                                <button><Plus size={16} color="#fcfcfc" weight="bold" /><p>FAZER PEDIDO</p></button>
                            </form>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}