# MONSTREACT


# El escenario

----

## Composición

Se compone de 
1. Un escenario **superior** (``battleBackTop``).
2. Un escenario **inferior** (`battleBackBottom`).
3. El/los enemigo/s.
4. El/los héroe/s.

### Ejemplo:

````
<div className={styles.scenario}>
    <img src={useBattleBackBottomImage('Forest')} className={`${styles["scenario_scene"]} ${styles["scene--bottom"]}`} alt={"battleback bottom"}/>
    <img src={useBattleBackTopImage('Forest')} className={`${styles["scenario_scene"]} ${styles["scene--top"]}`} alt={"battleback top"} />
    <Enemy {...Frilledlizard} />
    <Heroe {...Aniv} action={action} />
</div>
````


# Battlebacks

----


## Colocación

Primero se coloca el **battleback de bottom** y después el **battleback de top**. Esto es porque el BattleBack de top cuenta con un **fondo transparente** que ocupará el Battleback de **bottom**, mientras que el battleback de bottom es una imagen alta
completa que "pisaría" el battleback de top.

> Ejemplo
> ```
> <img src={useBattleBackBottomImage('Forest')} className={`${styles["scenario_scene"]} ${styles["scene--bottom"]}`} alt={"battleback bottom"}/>
>	<img src={useBattleBackTopImage('Forest')} className={`${styles["scenario_scene"]} ${styles["scene--top"]}`} alt={"battleback top"} />
> ```

## Utils

### BattleBack[Bottom | Top]Image

La función ``useBattleBack[bottom | front]Image`` nos permite obtener de los assets la imagen **top** o **bottom** del escenario:

````
export const useBattleBackTopImage = (battleBackZone: BattleBackZone) => {
    return `assets/battleback/${battleBackZone}-top.png`
}

export const useBattleBackBottomImage = (battleBackZone: BattleBackZone) => {
    return `assets/battleback/${battleBackZone}-bottom.png`
}
````

Obligatorio rellenar en sus tipos: ```export type BattleBackZone = 'Forest'``` las zonas que se vayan añadiendo.


### setAnimation
```
@param callback: () => T
@param callbackAnimation: () => void
```

Primero se escoge el **momento actual del frame**. Este momento **se actualizará durante todo el tiempo que dure la función**
``const currentFrameTime = Date.now();``

Previamente habremos cogido el **último frame que tuvimos**: ```const lastFrameTime = Date.now();```

Calcularemos el tiempo **delta**, que es **el tiempo que ha transcurrido desde el último frame hasta el frame actual**. Si ese tiempo es mayor o = a 1000, significa que habrá ocurrido, al menos, un segundo.
Este tiempo **delta** nos servirá para calcular los **frames per second**. Si queremos que haya **60 frames por segundo**:

```delta >= 1000 / 60``` tendremos que dividir el tiempo **delta** entre 60. En este caso, queremos que ocurran a **20 frames por segundo**.
Y dentro de esos frames, queremos que ocurra la animación de ataque, que se encuentra **dentro del parámetro** ``@callback``

```
const attackAnimation = () => {
			if (action.current === "ATTACK" && loop !== null) {
				imageSlash.src = `${SRC_ANIMATIONS('SLASH')}/${animation[i]}`;
				i = i + 1;
			}

			if (i === animation.length) {
				i = 0;
				imageSlash.src = "";
				cancelAnimationFrame(loop);
				action.current = "IDLE";
			}
		}
```

Comprobamos que la animación que se ha triggereado es la de `ataque` y cambiamos la propiedad `src`de las imagenes por **cada una de las imágenes secuencialmente que conforman la animación global de ataque**.
Cuando alcance el tope de las animaciones existentes, cancelaremos la animación para que no ocurra un **bucle infinito**.

## Hooks

- ``useBattleBack[Bottom | Top]Image``: Hook para situar la imagen de batalla de top o bottom


### Detalles técnicos

* Velocidad de fotogramas: 20fps.





# Reglas

> https://biomejs.dev/linter/rules/

- https://biomejs.dev/linter/rules/no-banned-types/
- https://biomejs.dev/linter/rules/no-excessive-cognitive-complexity/
- 
# monstreact
# monstreact
# monstreact
