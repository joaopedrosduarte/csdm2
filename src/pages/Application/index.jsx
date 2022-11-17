import styles from './application.module.css'
import Sidebar from '../../components/Sidebar/index';
import Provider from '../../components/Provider/index';

export default function Application() {
    return (
        <div className={styles.wrapper}>
            <Sidebar />
            <div className={styles.content}>
                <div>
                    <div>
                        <button className={styles.returnButton}>{'<'}</button>
                        <h1>Requerimento</h1>
                    </div>
                    <div className={styles.filtros}>
                        <h2 className={styles.h2_1}>Categoria</h2>
                        <select name="Categoria" className={styles.inputs}>
                            <option value="Eletronico">Eletronico</option>
                            <option value="Outro">Outros</option>
                        </select>
                        <h2 className={styles.h2_2}>Filtros</h2>
                        <select name="Categoria" className={styles.inputs}>
                            <option value="Eletronico">Eletronico</option>
                            <option value="Outro">Outros</option>
                        </select>
                        <select name="Categoria" className={styles.inputs}>
                            <option value="Eletronico">Eletronico</option>
                            <option value="Outro">Outros</option>
                        </select>
                        <select name="Categoria" className={styles.inputs}>
                            <option value="Eletronico">Eletronico</option>
                            <option value="Outro">Outros</option>
                        </select>
                        <select name="Categoria" className={styles.inputs}>
                            <option value="Eletronico">Eletronico</option>
                            <option value="Outro">Outros</option>
                        </select>
                        <select name="Categoria" className={styles.inputs}>
                            <option value="Eletronico">Eletronico</option>
                            <option value="Outro">Outros</option>
                        </select>
                    </div>
                </div>
                <div className={styles.resultados}>
                    <h2>
                        Resultados Obtidos
                    </h2>
                    <div className={styles.resultsMain}>
                        <Provider fornecedor={'Fornecedor 1'}/>
                        <Provider fornecedor={'Fornecedor 2'}/>
                        <Provider fornecedor={'Fornecedor 3'}/>
                        <Provider fornecedor={'Fornecedor 4'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}