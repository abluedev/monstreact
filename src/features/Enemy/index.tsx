import styles from "./styles.module.css";
import {EnemyProps} from "./Enemy.ts";

export const Enemy = (enemy: EnemyProps) => {

	return (
		<section className={styles["zone"]}>
			<img
				src={""}
				alt={""}
				width={150}
				height={150}
				data-testid={"ap-enemyZone"}
				className={styles["zone--ap"]}
			/>
			<img
				src={enemy.img}
				width={150}
				height={150}
				id='enemy'
				alt={"Frilledlizard enemy"}
			/>
			<div className={styles["enemy_stats--hp"]}> { enemy.hp }</div>
		</section>
	);
};
