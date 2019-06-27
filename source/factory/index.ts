
import { iBmw, Model } from "./interfaces/index";

class BmwFactory{
    static create(type: Model) {
        if (type === 'X5')
            return new Bmw(type, 108000, 300);
        if (type === 'X6')
            return new Bmw(type, 111000, 320);
    }
}

class Bmw implements iBmw {
    model: Model
    price: Number
    maxSpeed: Number

    constructor (model: Model, price: Number, maxSpeed: Number) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

export default BmwFactory;
