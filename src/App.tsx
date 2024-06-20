import styles from './app.module.css'
import {useRef} from "react";

function App() {
    const animation = ["Slash_part_1.png", "Slash_part_2.png", "Slash_part_3.png", "Slash_part_4.png", "Slash_part_5.png"]
    // No se puede usar useState porque refresca el navegador y "reinicia" requestAnimationFrame
    const action = useRef<string>('IDLE')

    let timeNow = Date.now();
    let loop: number = 0;
    let i = 0;

  const handleAttack = () => {
      const imageSlash = document.querySelector('img[data-testid="ap-enemyZone"]') as HTMLImageElement;
      const currentTime = Date.now();
      const deltaTime = currentTime - timeNow;
      timeNow = currentTime;

      // 60 FPS
      if(deltaTime < 1000 / 60) {
          if(action.current === 'ATTACK' && loop !== null){
                  imageSlash.src = `assets/animations/slash/${animation[i]}`;
                  i = (i + 1);
          }
      }

      if(i === animation.length){
          i = 0;
          imageSlash.src = '';
          cancelAnimationFrame(loop);
          action.current = 'IDLE';
      }

      requestAnimationFrame(handleAttack);
  }

  loop = requestAnimationFrame(handleAttack);




  return (
      <article className={styles.screen}>
        <div className={styles.scenario}>
          <section className={styles["scenario_zone--enemy"]}>
              <img src={''} alt={''} width={150} height={150} data-testid={'ap-enemyZone'} className={styles['zone']}/>
            <img src={'assets/enemies/Frilledlizard.png'} width={150} height={150} alt={'Frilledlizard enemy'}/>
          </section>
          <section className={styles["scenario_zone--heroe"]}>
            <div> Heroe</div>
            <div className={styles["heroe"]}>
              <button className={styles['heroe_actions heroe_actions--attack']} onClick={() => action.current = 'ATTACK'}>Attack</button>
              <button className={styles['heroe_actions heroe_actions--defense']} onClick={() => action.current = 'DEFENSE' }>Defense</button>
            </div>
          </section>
        </div>
      </article>
  )
}

export default App
