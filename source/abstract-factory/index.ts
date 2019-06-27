import { Kind } from "./types/Tkind";
import { iDroid } from "./interfaces/IDroid";


function droidProducer(kind: Kind): Function{
    if (kind === 'battle'){
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

function battleDroidFactory(): B1 {
    return new B1();
}

function pilotDroidFactory(): Rx24 {
    return new Rx24();
}

class B1 implements iDroid{
    info() {
        return "B1, Battle Droid";
    }
}

class Rx24 implements iDroid{
    info() {
        return "Rx24, Pilot Droid";
    }
}

export default droidProducer;
