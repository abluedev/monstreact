import styles from './styles.module.css';
import { GiPointySword } from "react-icons/gi";
import { GiBoltShield } from "react-icons/gi";



import { MutableRefObject } from "react";
import {HeroeProps} from "./Heroe.ts";

interface ElementProps {
	action: MutableRefObject<string>;
}

export const Heroe = ({ config, action }: HeroeProps & ElementProps) => {
	return (
		<section className={styles["scenario_zone--heroe"]}>

			<div className={styles["heroe--img"]}>
				<img src={config.avatar} alt={"Aniv heroe"}/>
				<img src={"/assets/heroe/brush.svg"} alt={""} className={styles["effect"]}/>
			</div>
			<section className={styles["heroe--panel"]}>
				<section className={styles["heroe--stats"]}>
					<button
						className={`${styles["heroe_stat"]} ${styles["heroe_action--hp"]}`}
					>
						HP
					</button>
					<button
						className={`${styles["heroe_stat"]} ${styles["heroe_action--ap"]}`}
					>
						AP

					</button>
				</section>
				<section className={styles["heroe--actions"]}>
					<button
						className={`${styles["heroe_action"]} ${styles["heroe_action--attack"]}`}
						onClick={() => (action.current = "ATTACK")}
					>
						Attack
						<GiPointySword className={`${styles["heroe_action--icon"]}`}/>
					</button>
					<button
						className={`${styles["heroe_action"]} ${styles["heroe_action--defense"]}`}
						onClick={() => {

							(action.current = "DEFENSE")
						}}
					>
						Defense
						<GiBoltShield className={`${styles["heroe_action--icon"]}`}/>

					</button>
					<button
						className={`${styles["heroe_action"]} ${styles["heroe_action--defense"]}`}
						onClick={() => {

							(action.current = "DEFENSE")
						}}
					>
						Defense
						<GiBoltShield className={`${styles["heroe_action--icon"]}`}/>

					</button><button
						className={`${styles["heroe_action"]} ${styles["heroe_action--defense"]}`}
						onClick={() => {

							(action.current = "DEFENSE")
						}}
					>
						Defense
						<GiBoltShield className={`${styles["heroe_action--icon"]}`}/>

					</button>
				</section>
			</section>
		</section>
	);
};
