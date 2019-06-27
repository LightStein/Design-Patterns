import { iSoldier } from './interfaces/index'


export class Soldier implements iSoldier {
    level: number

    constructor(level: number) {
        this.level = level;
    }

    attack() {
        return this.level;
    }
}
