import {Clonable} from './interfaces/Clonable'
import {iSheep} from './interfaces/ISheep'

class Sheep implements Clonable<Sheep>, iSheep {
    name: string
    weight: number

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }

    clone(): Sheep{
        return new Sheep(this.name, this.weight);
    }
}

export default Sheep;
