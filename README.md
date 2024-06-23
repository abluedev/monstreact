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


# Hooks

- ``useBattleBack[Bottom | Top]Image``: Hook para situar la imagen de batalla de top o bottom


### Detalles técnicos

* Velocidad de fotogramas: 20fps.





# Reglas

> https://biomejs.dev/linter/rules/

- https://biomejs.dev/linter/rules/no-banned-types/
- https://biomejs.dev/linter/rules/no-excessive-cognitive-complexity/
- 
