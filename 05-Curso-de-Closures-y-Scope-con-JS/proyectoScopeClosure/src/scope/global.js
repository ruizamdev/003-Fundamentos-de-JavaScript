// variables

var a; // declarando variable a
var b = 'b'; // declarando variable b y asignando un valor
var b = 'bb'; // resignación
var a = 'aa'; // re-declaración

// Global scope
var fruit = 'Apple'; // global
console.log(fruit)

function bestFruit() {
    console.log(fruit)
}

bestFruit();


// Otra forma de crear una variable global
function countries() {
    country = 'Colombia'; // se esta declarando implícitamente una variable, la cual será global
    console.log(country);
}

countries()
console.log(country);

// Si declaramos la variable explícitamente dentro de la función, se convierte en function scope

function mexStates() {
    let state = 'San Luis Potosí'
    console.log(state)
}

mexStates()
console.log(state)