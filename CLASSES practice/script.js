// 1. Klasė Book
// Sukurkite klasę Book, turinčią savybes:
// title (pavadinimas)
// author (autorius)
// year (metai)
// Parašykite get ir set metodus visoms savybėms, kurie:
// Tikrina, ar įvesti duomenys yra tinkamo tipo.
// Mesti klaidą, jei duomenys netinkami.

class Book {
    #title;
    #author;
    #year;

    constructor (title, author, year) {
        this.#title = title;
        this.#author = author;
        this.#year = year; 
    }

    get title () {
        return this.#title;
    }
    get author () {
        return this.#author;
    }
    get year () {
        return this.#year;
    }

    set title(title) {
        if (title === '') {
            console.error('Title cannot be empty');
        } else {
            this.#title = title;  
        }
    }
    set author(author) {
        if (author === '') {
            console.error('Author cannot be empty');
        } else {
            this.#author = author;  
        }
    }
    set year(year) {
        if (typeof year !== 'number' || year <= 0) {
            console.error('Wrong year');
        } else {
            this.#year = year;  
        }
    }
}

// 2. Klasė Employee
// Sukurkite klasę Employee, turinčią savybes:
// name (vardas), position (pareigos), salary (atlyginimas)
// Parašykite metodą promote(), kuris keičia darbuotojo poziciją į naują.

class Employee {
    #name;
    #position;
    #salary;

    constructor (name, position, salary) {
        this.#name = name;
        this.#position = position;
        this.#salary = salary;
    }

    get name () {
        return this.#name;
    }
    get position () {
        return this.#position;
    }
    get salary () {
        return this.#salary.toFixed(2);
    }

    set name(name) {
        if (name === '') {
            console.error('Name cannot be empty');
        } else {
            this.#name = name;  
        }
    }
    set position(position) {
        if (position === '') {
            console.error('Position cannot be empty');
        } else {
            this.#position = position;  
        }
    }
    set salary(salary) {
        if (typeof salary !== 'number' || salary <= 0) {
            console.error('Wrong salary');
        } else {
            this.#salary = salary;  
        }
    }

    promote () {
        const positions = ['Salesman', 'Senior Salesman','Shop Manager', 'Project Manager'];
        const currentPositionIndex = positions.indexOf(this.#position);

        if (currentPositionIndex < positions.length - 1) {
            this.#position = positions[currentPositionIndex + 1];
            this.#salary = this.#salary * 1.1; //padidinti atlyginimą 20%
            console.log(`${this.#name} has been promoted to ${this.#position} with a new salary of ${this.#salary.toFixed(2)}`);
        } else {
            console.log(`${this.#name} is already at the highest position (${this.#position})`);
        }
    }
}
const mark = new Employee('Mark Doors', 'Senior Salesman', 2500);
console.log(mark.position, mark.salary);

mark.promote();
console.log(mark.position, mark.salary);
mark.promote();
console.log(mark.position, mark.salary);

// 3. Paveldėjimas: Vehicle ir Bicycle
// Sukurkite klasę Vehicle, turinčią savybes:
// brand (markė), model (modelis).
// Sukurkite klasę Bicycle, kuri paveldi iš Vehicle ir prideda savybę type.

class Vehicle {
    constructor (brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

class Bicycle extends Vehicle {
    constructor (type) {
        super('Cube', 'Aim');
        this.type = type;
    }
}

const myBicycle = new Bicycle ('Hybrid');
console.log(`My bicycle: "${myBicycle.brand} ${myBicycle.model}". Its type is ${myBicycle.type} bicycle.`);

// 4. Klasė Rectangle ir paveldėjimas Square
// Sukurkite klasę Rectangle, turinčią savybes:
// width (plotis), height (aukštis).
// Parašykite metodus getArea() ir getPerimeter().
// Sukurkite paveldėtą klasę Square, naudojančią tik vieną savybę side.

class Rectangle {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }

    getArea () {
        const area = this.width * this.height;
        return area;
    }

    getPerimeter() {
        const perimeter = (this.width * 2) + (this.height * 2);
        return perimeter;
    }
}

class Square extends Rectangle {
    constructor (side) {
        super(side, side);
        this.side = side;
    }
}

const rectangle1 = new Rectangle(30, 5);
console.log(rectangle1);

const square1 = new Square(20);
console.log(square1);

// 5. Klasė User
// Sukurkite klasę User, turinčią savybes:
// username (vartotojo vardas), password (slaptažodis).
// Parašykite metodą login(), kuris tikrina duomenų atitikimą.

class User {
    constructor (username, password) {
        this.username = username;
        this.password = password;
    }

    login(value) {
        if (this.password === value) {
            console.log('Prisijungta');
        } else {
            console.error ('Slaptažodis neteisingas');
        }
    }
}
const newUser = new User ('MoonAndSun', 'Moon123');
newUser.login('Moon123');

// 6. Klasė Animal ir paveldėjimas
// Sukurkite klasę Animal, turinčią savybę species ir metodą makeSound().
// Sukurkite paveldėjimo hierarchiją su šešiais gyvūnais.

class Animal {
    constructor (species) {
        this.species = species;
    }

    makeSound () {
        console.log(`${this.species} says...`)
    }
}

class Dog extends Animal {
    constructor () {
        super('Dog');
    }

    makeSound () {
        console.log(`${this.species} barks.`)
    }
}
const bob = new Dog ('Dog');
bob.makeSound();

class Cow extends Animal {
    constructor () {
        super('Cow');
    }

    makeSound () {
        console.log(`${this.species} moos.`)
    }
}
const daisy = new Cow ('Daisy');
daisy.makeSound();

class Cat extends Animal {
    constructor () {
        super('Cat');
    }

    makeSound () {
        console.log(`${this.species} meows.`)
    }
}
const caramel = new Cat ('Cat');
caramel.makeSound();

// 7. Klasė BankAccount
// Sukurkite klasę BankAccount su savybe balance.
// Parašykite get ir set metodus balansui ir metodą deposit().

class BankAccount {
    #balance;

    constructor (balance) {
        this.#balance = balance;
    }

    get balance () {
        return this.#balance;
    }

    set balance (amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            console.error('Wrong amount!');
        } else {
            this.#balance = amount;  
        }
    }

    deposit (amount) {
        if (amount <= 0) {
            console.error('Deposit amount must be positive!');
            return;
        }
        this.#balance += amount; 
        console.log(`Deposited ${amount} Eur.. New balance: ${this.#balance} Eur.`);
    }
}

const bankAcc = new BankAccount (500);
console.log(bankAcc.balance);
bankAcc.deposit(200);
console.log(bankAcc.balance);

// 8. Klasė School
// Sukurkite klasę School su savybėmis name ir students.
// Parašykite metodus addStudent() ir showStudents().

class School {
    constructor (name) {
        this.name = name;
        this.students = [];
    }

    addStudent(studentName) {
        this.students.push(studentName);
        console.log(`${studentName} has been added to ${this.name} school.`);
    }
    showStudents () {
        return this.students;
    }
}

const school1 = new School ('Green Wood');
school1.addStudent('Bob');
school1.addStudent(' Marry');
console.log(`Current ${school1.name} school students: ${school1.showStudents()}`);

// 9. Paveldėjimas: Instrument ir Guitar
// Sukurkite klasę Instrument su savybe name ir metodu playSound().
// Sukurkite paveldėtą klasę Guitar, kuri perrašo playSound().

class Instrument {
    constructor (name) {
        this.name = name;
    }

    playSound () {
        console.log(`${this.name} plays sound.`)
    }
}

class Guitar extends Instrument {
    constructor () {
        super ('Guitar');
    }

    playSound () {
        console.log(`${this.name} plays guitar sound.`)
    }
}

const myGuitar = new Guitar ('Guitar');
myGuitar.playSound();

// 10. Klasė Store
// Sukurkite klasę Store su savybe inventory.
// Parašykite metodus addItem() ir showInventory().

class Store {
    constructor (store) {
        this.store = store;
        this.inventory = [];
    }

    addItem(item) {
        this.inventory.push(item);
        console.log(`${item} has been added to inventory.`);
    }
    showInventory () {
        return this.inventory;
    }
}

const store1 = new Store ('Green');
store1.addItem('Green beans');
store1.addItem(' Milk');
console.log(`Here is a list of ${store1.store} shop inventory: ${store1.showInventory()}.`);
