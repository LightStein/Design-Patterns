import { iJedi } from './interfaces/index'

export class Jedi implements iJedi {
    level: number

    constructor(level: number) {
        this.level = level;
    }

    attackWithSaber() {
        return this.level * 100;
    }
}
