import {useEffect, useState} from "react";
import {Battle} from "../Battle";
import styles from './styles.module.css';

export const ZoneA = () => {

    const [showBattleZone, setShowBattleZone] = useState(false);

    useEffect(() => {

        const randomEvent = () => {
            const rand = Math.random();

            // console.log(rand);
            if (rand < 0.01) { // Esta es la probabilidad de que se dispare el evento
                // Aquí el comportamiento aleatorio en este ejemplo una alerta.
                setShowBattleZone(true);
            }
        }

        document.addEventListener('mousemove', randomEvent);
        return () => document.removeEventListener('mousemove', randomEvent);
    }, []);


    const endBattle = () => {
        setShowBattleZone(false);
    }

    return (<div className={styles['scenario']}>
        { showBattleZone && <Battle endBattle={endBattle} /> }
    </div>)
}
