import styles from "./app.module.css";
import {useRef} from "react";
import {Enemy} from "./features/Enemy";
import {Heroe} from "./features/Heroe";
import {Actions, setAnimation, SRC_ANIMATIONS, useBattleBackBottomImage, useBattleBackTopImage} from "./utils.ts";
import {Aniv} from "./features/Heroe/Heroe.ts";

function App() {
	// No se puede usar useState porque refresca el navegador y "reinicia" requestAnimationFrame
	const action = useRef<Actions>("IDLE");
	let loop: number = 0;
	let i = 0;

	const attackAnimation = () => {
		const imageSlash = document.querySelector(
			'img[data-testid="ap-enemyZone"]',
		) as HTMLImageElement;

		if (loop !== null) {
			// Más tarde debe de ir en las props del arma
			imageSlash.src = `${SRC_ANIMATIONS('SLASH')}/${Aniv.equipment.weapon.animation[i]}`;
			i = i + 1;
		}

		if (i === Aniv.equipment.weapon.animation.length) {
			i = 0;
			imageSlash.src = "";
			cancelAnimationFrame(loop);
			Aniv.equipment.weapon.sound.play();
			action.current = "IDLE";
		}
	}

	const handleAttack = () => {

		const selectAnimation: Map<Actions, () => void> = new Map([['ATTACK', attackAnimation]])
		setAnimation(selectAnimation.get(action.current)!, handleAttack)
	};

	loop = requestAnimationFrame(handleAttack);


	return (
		<article className={styles.screen}>
			<div className={styles.scenario}>
				<img src={useBattleBackBottomImage('Forest')} className={`${styles["scenario_scene"]} ${styles["scene--bottom"]}`} alt={"battleback bottom"}/>
				<img src={useBattleBackTopImage('Forest')} className={`${styles["scenario_scene"]} ${styles["scene--top"]}`} alt={"battleback top"} />
				<Enemy />
				<Heroe {...Aniv} action={action} />
			</div>
		</article>
	);
}

export default App;
