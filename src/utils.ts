export const SRC_ANIMATIONS = (animationName: AnimationName) => `assets/animations/${animationName.toLowerCase()}`
export type Actions = 'ATTACK' | 'DEFENSE' | 'IDLE'

export type BattleBackZone = 'Forest'
export type AnimationName = 'SLASH'

export const useBattleBackTopImage = (battleBackZone: BattleBackZone) => {
    return `assets/battleback/${battleBackZone}-top.png`
}

export const useBattleBackBottomImage = (battleBackZone: BattleBackZone) => {
    return `assets/battleback/${battleBackZone}-bottom.png`
}

const lastFrameTime = Date.now();

export const setAnimation = <T>(callback: () => T, callbackRequestAnimation: () => void ) => {
    // Obtén el tiempo actual

    const currentFrameTime = Date.now();

    const framesPerSecond = 20; //20 FPS

    const delta = currentFrameTime - lastFrameTime;

    if (delta >= 1000 / framesPerSecond) {
        if(callback){
            callback();
        }
    }


    requestAnimationFrame(callbackRequestAnimation);
}
