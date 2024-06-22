import styles from './styles.module.css';

import { MutableRefObject } from "react";

export interface HeroeProps {
	hp: number;
	ap: number;
	atk: number;
	defense: number;
	agi: number;
	img: string;
}

interface ElementProps {
	action: MutableRefObject<string>;
}

export const Heroe = ({ action }: HeroeProps & ElementProps) => {
	return (
		<section className={styles["scenario_zone--heroe"]}>
				<img src={'assets/heroe/heroe.png'} alt={"Aniv heroe"}/>
				<section className={styles["heroe--actions"]}>
					<button
						className={`${styles["heroe_action"]} ${styles["heroe_action--attack"]}`}
						onClick={() => (action.current = "ATTACK")}
					>
						Attack
					</button>
					<button
						className={`${styles["heroe_action"]} ${styles["heroe_action--defense"]}`}
						onClick={() => (action.current = "DEFENSE")}
					>
						Defense
					</button>
				</section>
		</section>
	);
};
