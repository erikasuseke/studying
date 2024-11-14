class Animal {
    constructor(species) {
        this.species = species;
    }

    makeSound() {
        console.log(`${this.species} leidžia garsą`);
    }
}

class Whale extends Animal {
    constructor() {
        super("Banginis");
    }

    makeSound() {
        console.log(`${this.species} tyli.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super("Šuo");
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} sako: au`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super("Katė");
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} sako: miau miau`);
    }
}

class Sparrow extends Animal {
    constructor(name) {
        super("Žvirblis");
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} sako: čikčirik čikčirik čikčirik`);
    }
}

class Rooster extends Animal {
    constructor(name) {
        super("Gaidys");
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} sako: kakariekū kakariekū kakariekū kakariekū`);
    }
}

class Cow extends Animal {
    constructor(name) {
        super("Karvė");
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} sako: mū mū mū mū mū`);
    }
}

// Pavyzdžiai
let whale = new Whale();
whale.makeSound(); // Banginis yra tyli.

let dog = new Dog("Rex");
dog.makeSound(); // Rex sako: au

let cat = new Cat("Murka");
cat.makeSound(); // Murka sako: miau miau

let sparrow = new Sparrow("Čirikas");
sparrow.makeSound(); // Čirikas sako: čikčirik čikčirik čikčirik

let rooster = new Rooster("Gaidelis");
rooster.makeSound(); // Gaidelis sako: kakariekū kakariekū kakariekū kakariekū

let cow = new Cow("Mūka");
cow.makeSound(); // Mūka sako: mū mū mū mū mū