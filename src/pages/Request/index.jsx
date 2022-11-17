import styles from './request.module.css';
import Sidebar from '../../components/Sidebar';
import { Plus } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

export default function Request(){
    const navigate = useNavigate();

    function handleNewApplication(){
        console.log('eae');

        navigate('/home/aplication/doing_request');
    }

    return (
        <div className={styles.wrapper}>
            <Sidebar />
            <div className={styles.content}>
                <div>
                    <button className={styles.returnButton}>{'<'}</button>
                </div>
                <div className={styles.mainContent}>
                    <div className={styles.divMainContent}>
                        <header>
                            <h1>Fornecedor 1</h1>
                        </header>
                        <main>
                            <div className={styles.products}>
                                <h2 className={styles.productTxt}>Produtos: </h2>
                                <div className={styles.productsImg}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className={styles.specs}>
                                <h2>Informações</h2>
                                <span>Média tempo de entrega:</span>
                                <span>Custo:</span>
                                <span>Qualidade:</span>
                                <span>Satisfação</span>
                            </div>
                        </main>
                        <footer>
                            <form className={styles.buttonUI} onSubmit={handleNewApplication}>
                                <button><Plus size={16} color="#fcfcfc" weight="bold" /><p>FAZER PEDIDO</p></button>
                            </form>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}