import styles from "../../app.module.css";
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
			<div> Heroe</div>
			<div className={styles["heroe"]}>
				<button
					className={styles["heroe_actions heroe_actions--attack"]}
					onClick={() => (action.current = "ATTACK")}
				>
					Attack
				</button>
				<button
					className={styles["heroe_actions heroe_actions--defense"]}
					onClick={() => (action.current = "DEFENSE")}
				>
					Defense
				</button>
			</div>
		</section>
	);
};
