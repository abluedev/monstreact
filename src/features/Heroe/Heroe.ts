export interface Heroe {
    hp: number;
    ap: number;
    atk: number;
    defense: number;
    agi: number;
}


interface HeoreActions {
    attack(): void;
    defense(): void;
}
