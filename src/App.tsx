import styles from "./app.module.css";
import { useRef } from "react";
import { Enemy } from "./features/Enemy";
import { EnemyProps } from "./features/Enemy/Enemy.ts";
import { Heroe, HeroeProps } from "./features/Heroe";

function App() {
	const animation = [
		"Slash_part_1.png",
		"Slash_part_2.png",
		"Slash_part_3.png",
		"Slash_part_4.png",
		"Slash_part_5.png",
	];
	// No se puede usar useState porque refresca el navegador y "reinicia" requestAnimationFrame
	const action = useRef<string>("IDLE");

	let lastFrameTime = Date.now();
	let framesPerSecond = 20; //20 FPS
	let loop: number = 0;
	let i = 0;

	const handleAttack = () => {
		const imageSlash = document.querySelector(
			'img[data-testid="ap-enemyZone"]',
		) as HTMLImageElement;
		const currentTime = Date.now();
		let delta = currentTime - lastFrameTime;

		if (delta >= 1000 / framesPerSecond) {
			lastFrameTime = Date.now();
			if (action.current === "ATTACK" && loop !== null) {
				imageSlash.src = `assets/animations/slash/${animation[i]}`;
				i = i + 1;
			}
		}

		if (i === animation.length) {
			i = 0;
			imageSlash.src = "";
			cancelAnimationFrame(loop);
			action.current = "IDLE";
		}

		requestAnimationFrame(handleAttack);
	};

	loop = requestAnimationFrame(handleAttack);

	const Frilledlizard: EnemyProps = {
		hp: 6,
		ap: 0,
		defense: 1,
		atk: 2,
		agi: 3,
		drops: ["Colmillo"],
		img: "assets/enemies/Frilledlizard.png",
	};

	const Aniv: HeroeProps = {
		hp: 10,
		ap: 4,
		defense: 2,
		atk: 2,
		agi: 2,
		img: "",
	};

	return (
		<article className={styles.screen}>
			<div className={styles.scenario}>
				<img src={'assets/battleback/GrassMaze-bottom.png'} className={`${styles["scenario_scene"]} ${styles["scene--bottom"]}`} alt={""}/>
				<img src={'assets/battleback/GrassMaze-top.png'} className={`${styles["scenario_scene"]} ${styles["scene--top"]}`} alt={""} />
				<Enemy {...Frilledlizard} />
				<Heroe {...Aniv} action={action} />
			</div>
		</article>
	);
}

export default App;
