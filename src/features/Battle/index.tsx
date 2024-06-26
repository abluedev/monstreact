import {useEffect, useRef, useState} from "react";
import {Actions, setAnimation, SRC_ANIMATIONS, useBattleBackBottomImage, useBattleBackTopImage} from "../../utils.ts";
import {Aniv} from "../Heroe/Heroe.ts";
import styles from "../../app.module.css";
import {Enemy} from "../Enemy";
import {Heroe} from "../Heroe";
import {EnemyCharacter, EnemyProps} from "../Enemy/Enemy.ts";

export const Battle = ({endBattle} : {endBattle:
() => void
}) => {

    const [ enemy, setEnemy ]  = useState<EnemyProps>({});
    const [ enemyHP, setEnemyHP ] = useState(enemy.hp);
    const music = useRef(new Audio('./assets/music/battle.ogg'));

    useEffect(() => {
        setEnemy(EnemyCharacter().spawn());
        music.current.play();
        music.current.loop = true;
    }, []);
    // No se puede usar useState porque refresca el navegador y "reinicia" requestAnimationFrame
    const action = useRef<Actions>("IDLE");
    let loop: number = 0;
    let i = 0;

    const attackAnimation = () => {
        if(enemy.hp === undefined){ return; }
        const imageSlash = document.querySelector(
            'img[data-testid="ap-enemyZone"]',
        ) as HTMLImageElement;

        if (loop !== null) {
            // Más tarde debe de ir en las props del arma
            imageSlash.src = `${SRC_ANIMATIONS('SLASH')}/${Aniv.equipment.weapon.animation[i]}`;
            i = i + 1;
        }

        if (i === Aniv.equipment.weapon.animation.length) {
            i = 0;
            imageSlash.src = "";
            cancelAnimationFrame(loop);
            Aniv.equipment.weapon.sound.play();
            action.current = "IDLE";

            handleEnemyDamaged()
            return;
        }

    }

    const handleEnemyDamaged = () => {
        Aniv.attack(enemy);
        const enemyStillAlive = EnemyCharacter(enemy, setEnemyHP).damaged();
        if(!enemyStillAlive){
            endBattle()
            music.current.pause()
        }
        EnemyCharacter(enemy).idle();
    }

    const handleAttack = () => {

        const selectAnimation: Map<Actions, () => void> = new Map([['ATTACK', attackAnimation]])
        setAnimation(selectAnimation.get(action.current)!, handleAttack)
    };

    loop = requestAnimationFrame(handleAttack);


    return (
        <article className={styles.screen}>
            <div className={styles.backdrop}>
            <div className={styles.scenario}>
                <img src={useBattleBackBottomImage('Forest')} className={`${styles["scenario_scene"]} ${styles["scene--bottom"]}`} alt={"battleback bottom"}/>
                <img src={useBattleBackTopImage('Forest')} className={`${styles["scenario_scene"]} ${styles["scene--top"]}`} alt={"battleback top"} />
                <Enemy {...enemy} hp={enemyHP}  />
                <Heroe {...Aniv} action={action} />
            </div>
            </div>
        </article>
    );
}
