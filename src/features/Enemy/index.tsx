import { EnemyProps } from "./Enemy.ts";
import styles from "../../app.module.css";

export const Enemy = (enemy: EnemyProps) => {
	return (
		<section className={styles["scenario_zone--enemy"]}>
			<img
				src={""}
				alt={""}
				width={150}
				height={150}
				data-testid={"ap-enemyZone"}
				className={styles["zone"]}
			/>
			<img
				src={"assets/enemies/Frilledlizard.png"}
				width={150}
				height={150}
				alt={"Frilledlizard enemy"}
			/>
		</section>
	);
};
