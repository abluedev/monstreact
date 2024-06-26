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

        endAnimation(image: HTMLImageElement, frame: number){
            frame = 0;
            image.src = "";
        }
}

