import {SRC_ANIMATIONS} from "../../utils.ts";
import {Aniv} from "../Heroe/Heroe.ts";

export interface WeaponProps {
    atk: number;
    sound: HTMLAudioElement;
    animation: Array<string>;
    sprite?: string;
}

export const WeaponState = {
        updateAnimation: (image: HTMLImageElement, frame: number) => {
            image.src = `${SRC_ANIMATIONS('SLASH')}/${Aniv.equipment.weapon.animation[frame]}`;
        },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
        endAnimation(image: HTMLImageElement){
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            image.src = "";
        }
}

