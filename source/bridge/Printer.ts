import { iPrinter } from './interfaces/index'
import { Ink } from './index'
export class Printer implements iPrinter {
    ink: Ink

    constructor(ink: Ink) {
        this.ink = ink;
    }
}
