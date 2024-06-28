import {Frilledlizard} from "./enemies/frilledlizard.ts";
import styles from "./styles.module.css";
import {Dispatch, SetStateAction} from "react";
import {Aniv, HeroeProps} from "../Heroe/Heroe.ts";

export interface EnemyProps {
    hp: number;
    hpMax: number;
    ap: number;
    name: string;
    atk: number;
    defense: number;
    agi: number;
    drops: Array<string>;
    img: string;

}

export const EnemyCharacter = () => {
    return {
        spawn(): EnemyProps {
            return Object.assign({}, Frilledlizard);
        },

        attack(enemy: EnemyProps, heroe: HeroeProps): boolean {
            heroe.hp -= enemy?.atk;
            return heroe.hp > 0;
        },

        damaged(enemy: EnemyProps, setEnemyHP: Dispatch<SetStateAction<number | undefined>>): boolean {

            const enemyImg = document.querySelector(`#enemy`);
            enemyImg!.classList.add(styles.damaged);
            enemyImg!.classList.remove(styles.damaged);
            if (setEnemyHP && enemy) {
                setEnemyHP(enemy.hp -= Aniv.atk
                );
                return enemy.hp > 0;
            }
            return true;
        },

        idle() {

        }
    }
}
