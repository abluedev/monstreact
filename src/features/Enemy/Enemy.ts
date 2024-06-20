export interface Enemy {
    hp: number;
    ap: number;
    atk: number;
    defense: number;
    agi: number;
    drops: Array<string>;
}

interface EnemyActions {
    attack(): void;
}
