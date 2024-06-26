import {Frilledlizard} from "./enemies/frilledlizard.ts";
import styles from "./styles.module.css";
import {Dispatch, SetStateAction} from "react";
import {Aniv} from "../Heroe/Heroe.ts";

export interface EnemyProps {
	hp: number;
	ap: number;
	name: string;
	atk: number;
	defense: number;
	agi: number;
	drops: Array<string>;
	img: string;

}

export const EnemyCharacter = (enemy?: EnemyProps, setEnemyHP?: Dispatch<SetStateAction<number>>) => {
	return {
		spawn(): EnemyProps {
			return Frilledlizard;
		},

		attack(){

		},

		damaged(): boolean {

			const enemyImg = document.querySelector(`#enemy`);
			enemyImg.classList.add(styles.damaged);
			setTimeout(() => {
				enemyImg.classList.remove(styles.damaged);
				if(setEnemyHP){
					setEnemyHP(enemy.hp -= Aniv.atk
				);
					return enemy.hp > 0;
				}
			}, 500);

			return enemy.hp > 0;
		},

		idle(){

		}
	}
}
