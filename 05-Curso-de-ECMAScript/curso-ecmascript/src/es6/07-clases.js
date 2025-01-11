// clases
// declarando clase
class User {};
// creando instancia de la clase
const newUser = new User();

class user {
    // métodos:
    greeting() {
        return 'hello!';
    }
};

const ruiz7am = new user();
console.log(ruiz7am.greeting());

const hilda = new user();
console.log(hilda.greeting());


// constructor
class user {
    //constructor
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hello!';
    }
}

const irina = new user();

// this
class user {
    constructor(name) {
        this.name = name;
    }
    // métodos
    speak() {
        return 'Hello!';
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}

const cuca = new user('Cuca');
console.log(cuca.greeting());

// setters and getters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // métodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const petra = new user('Petra', '20');
console.log(petra.uAge)
console.log(petra.uAge = 15)