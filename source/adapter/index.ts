import { iJediAdapter } from './interfaces/index'
import { Jedi } from './jedi'
export { Soldier } from './Soldier'


class JediAdapter implements iJediAdapter {
    jedi: Jedi

    constructor(jedi: Jedi) {
        this.jedi = jedi;
    }

    attack() {
        return this.jedi.attackWithSaber();
    }
}

export { Jedi, JediAdapter};