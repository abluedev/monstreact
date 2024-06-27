import {useEffect, useRef, useState} from "react";
import {Actions, setAnimation, useBattleBackBottomImage, useBattleBackTopImage} from "../../utils.ts";
import {Aniv} from "../Heroe/Heroe.ts";
import styles from "../../app.module.css";
import {Enemy} from "../Enemy";
import {Heroe} from "../Heroe";
import {EnemyCharacter, EnemyProps} from "../Enemy/Enemy.ts";
import {WeaponState} from "../Weapon/Weapon.ts";

export const Battle = ({endBattle} : {endBattle:
() => void
}) => {

    const [ enemy, setEnemy ]  = useState<EnemyProps>({});
    const [ enemyHP, setEnemyHP ] = useState(enemy.hp);
    const music = useRef(new Audio('./assets/music/battle.ogg'));
    const imageSlash = document.querySelector(
        'img[data-testid="zone--ap"]',
    ) as HTMLImageElement;

    useEffect(() => {
        setEnemy(EnemyCharacter().spawn());
        music.current.play();
        music.current.loop = true;
    }, []);
    // No se puede usar useState porque refresca el navegador y "reinicia" requestAnimationFrame
    const action = useRef<Actions>("IDLE");
    let loop: number = 0;
    let frame = 0;

    const attackAnimation = () => {
        if(enemy.hp === undefined){ return; }

        if (loop !== null) {
            WeaponState.updateAnimation(imageSlash, frame);
            frame += 1;
        }

        if (frame === Aniv.equipment.weapon.animation.length) {
            WeaponState.endAnimation(imageSlash, frame);
            cancelAnimationFrame(loop);
            Aniv.equipment.weapon.sound.play();
            action.current = "IDLE";

            const enemyStillAlive = EnemyCharacter(enemy, setEnemyHP).damaged();
            if(!enemyStillAlive){
                endBattle()
                music.current.pause()
            }
            EnemyCharacter(enemy).idle();
            return;
        }

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
