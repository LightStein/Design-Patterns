import {iExactPrinter} from './interfaces/index'
import {Printer, Ink} from './index'

export class EpsonPrinter extends Printer implements iExactPrinter{
    ink: Ink

    constructor(ink: Ink) {
        super(ink);
    }

    print() {
        return "Printer: Epson, Ink: " + this.ink.get();
    }
}

export class HPprinter extends Printer implements iExactPrinter{
    ink: Ink

    constructor(ink: Ink) {
        super(ink);
    }

    print() {
        return "Printer: HP, Ink: " + this.ink.get();
    }
}