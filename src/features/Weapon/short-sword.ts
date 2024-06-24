import {WeaponProps} from "./Weapon.ts";

export const ShortSword: WeaponProps = {
    atk: 2,
    animation: [
        "Slash_part_1.png",
        "Slash_part_2.png",
        "Slash_part_3.png",
        "Slash_part_4.png",
        "Slash_part_5.png",
    ],
    sound: new Audio('assets/sounds/effects/Slash7.ogg')
}
