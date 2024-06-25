import {WeaponProps} from "../Weapon/Weapon.ts";
import {ShortSword} from "../Weapon/short-sword.ts";

export interface HeroeProps {
	hp: number;
	ap: number;
	atk: number;
	defense: number;
	agi: number;
	equipment: {
		weapon: WeaponProps
	},
	config: {
		avatar: string;
	}
}

export const Aniv: HeroeProps = {
	atk: 3,
	defense: 2,
	hp: 80,
	agi: 2,
	ap: 12,
	equipment: {
		weapon: ShortSword
	},
	config: {
		avatar: './assets/heroe/heroe.png'
	}
}
