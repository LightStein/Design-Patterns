import { iInk } from './interfaces/index'

type InkType = "alcohol-based" | "acrylic-based"

export class Ink implements iInk <InkType>{
    type: InkType

    constructor(type: InkType) {
        this.type = type;
    }
    get() {
        return this.type;
    }
}