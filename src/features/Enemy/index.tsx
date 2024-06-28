import styles from "./styles.module.css";
import {EnemyProps} from "./Enemy.ts";

export const Enemy = (enemy: EnemyProps) => {

	return (
		<section className={styles["zone"]}>
			<img
				src={""}
				alt={""}
				width={175}
				height={175}
				data-testid={"zone--ap"}
				className={styles["zone--ap"]}
			/>
			<img
				src={enemy.img}
				width={300}
				height={300}
				id='enemy'
				alt={"Frilledlizard enemy"}
				className={styles["zone--enemy-img"]}
			/>
			<div className={styles["enemy_stats--hp"]} style={{ width: `${((enemy.hp * 100) / enemy.hpMax)}px` }}> { enemy.hp }</div>
		</section>
	);
};
