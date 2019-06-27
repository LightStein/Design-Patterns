
class Person {
    instance: Person
    
    constructor() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = this;
        return this;
    }
}

export default Person;
