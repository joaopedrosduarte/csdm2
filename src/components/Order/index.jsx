import AvatarIcon from '../AvatarIcon';
import styles from "./order.module.css"
import { DotsThreeVertical } from "phosphor-react"

export default function Order({pedido,fornecedor}){
    return (
        <div className={styles.wrapper}>
            <div className={styles.perfil}>
                <AvatarIcon />
                <div className={styles.perfilStatus}>
                    <div className={styles.perfilTxt}>
                        <h1>{pedido}</h1>
                        <span>status</span>
                    </div>
                    <div className={styles.threeDotsIcon}>
                        <DotsThreeVertical size={32} weight="bold" color="#79747e"/>
                    </div>
                </div>
            </div>
            <div className={styles.imgSection}></div>
            <div className={styles.content}>
                <div className={styles.specs}>
                    <h1>{fornecedor}</h1>
                    <span>Emissão: 24/09/2022</span>
                    <span>Recebimento: 20/11/2022</span>
                </div>
                <div className={styles.description}>
                    <h1>Descrição</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita atque consequuntur corporis illum quidem commodi, hic voluptas dolore eaque fugiat ducimus cum sint ratione! Harum neque magnam eaque blanditiis.</span>
                </div>
                <div className={styles.buttonUI}>
                    <button>Ver Detalhes</button>
                </div>
            </div>
        </div>
    )
}