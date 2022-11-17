import styles from './sidebar.module.css'
import { UserCircle, House, ClockCounterClockwise } from "phosphor-react"
import SignoutIcon from '../SignoutIcon';
import { useNavigate } from 'react-router-dom';

export default function Sidebar(){
    const navigate = useNavigate()

    function handleMenuButton(){
        navigate('/home');
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebar}>
                <div className={styles.profile}>
                    <UserCircle size={46} />
                    <div>
                        <span>Mirela Silva</span>
                        <span>ADM</span>
                    </div>
                </div>
                <nav className={styles.navigation}>
                    <button onClick={handleMenuButton}><House size={20}/><span>Home</span></button>
                    <button><ClockCounterClockwise size={20}/><span>Histórico</span></button>
                </nav>
                <div className={styles.out}>
                    <SignoutIcon />
                    <span>sair</span>
                </div>
            </div>
        </div>
    )
}