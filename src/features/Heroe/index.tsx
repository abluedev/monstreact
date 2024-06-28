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
		<section className={styles["heroe"]}>

			<div className={styles["heroe_img"]}>
				<img src={config.avatar} alt={"Aniv heroe"}/>
				<img src={"/assets/heroe/brush.svg"} alt={""} className={styles["effect"]}/>
			</div>
			<section className={styles["heroe_panel"]}>
				<section className={styles["heroe_stats"]}>
					<div
						className={`${styles["heroe_stats--hp"]}`}
					>
						HP
					</div>
					<div
						className={`${styles["heroe_stats--ap"]}`}
					>
						AP

					</div>
				</section>
				<section className={styles["heroe_actions"]}>
					<button
						className={`${styles["heroe_action"]} ${styles["heroe_action--attack"]}`}
						onClick={() => (action.current = "ATTACK")}
					>
						Attack
						<GiPointySword className={`${styles["heroe_action--icon"]}`}/>
					</button>
					<button
						className={`${styles["heroe_action"]} "${styles["heroe_action--defense"]}`}
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

							(action.current = "ABILITY")
						}}
					>
						Abilities
						<GiBoltShield className={`${styles["heroe_action--icon"]}`}/>

					</button><button
						className={`${styles["heroe_action"]} ${styles["heroe_action--defense"]}`}
						onClick={() => {

							(action.current = "USE_ITEM")
						}}
					>
						Items
						<GiBoltShield className={`${styles["heroe_action--icon"]}`}/>

					</button>
				</section>
			</section>
		</section>
	);
};
