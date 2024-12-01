# Tipos de scope en JavaScript
### Qué es el Scope?
Es el alcance que determina la accesibilidad de las variables. Tenemos tres tipos de scope en JS:
1. Global
2. Function
3. Block

El **Scope** determina la accesibilidad de variables, objetos y funciones desde diferentes partes del código.

<br>

## 1. Global Scope
Las variables globales pueden ser accesibles desde cualquier entorno, desde el mismo entorno global y el de alguna función o bloque.

Aquí tenemos un ejemplo de Global scope en el que se declara una variable fuera de una función, y la función es capaz de acceder a la variable.
```javascript
// Global scope
var fruit = 'Apple'; // global
console.log(fruit)

function bestFruit() {
    console.log(fruit)
}

bestFruit();
```
Output:
```
Apple
Apple
```

Otra forma en la que se crean variables globales, es cuando declaramos una dentro de una función de manera implícita, de la siguiente manera:
```javascript
// Otra forma de crear una variable global
function countries() {
    country = 'Colombia'; // se esta declarando implícitamente una variable, la cual será global
    console.log(country);
}

countries()
console.log(country);
```
Output:
```
Colombia
Colombia
```
Aquí es posible acceder a la variable que esta dentro de la función desde el entorno global.

<br>

## 2. Function Scope
Todas las funciones que hagamos dentro de la lógica de una función van a tener su propio alcance y serán accesibles solamente dentro de esta función y sus funciones anidadas.

Aquí tenemos un ejemplo en donde tenemos una función en donde dentro se declara explícitamente una variable y otra función condicional dentro de la misma función principal puede acceder a ella:
```javascript
function greeting() {
    let userName = 'Hilda';
    console.log(userName);

    if (userName === 'Hilda'); {
        console.log(`Hello ${userName}!`)
    }
} 

greeting();
```
Output:
```
Hilda
Hello Hilda!
```
Si quisiéramos acceder a la variable desde fuera de la función, es decir del entorno global, tendríamos un error de referencia, porque no esta definida.

<br>

## 3. Block Scope
Se introdujo este concepto mediante la creación de las palabras reservadas para crear variables `let` y `const` en ES6.

Block scope se refiere a que el alcance de las variables creadas dentro de un bloque solo pueden ser utilizadas dentro de este bloque.

Un bloque es cualquier código que este dentro de *Handle Bars*

Aquí tenemos un ejemplo:
```javascript
function fruits () {
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits ()
```
Dentro de la función `fruits()` se crea otra función condicional que declara tres variables, una por cada palabra reservada para tal propósito, fuera de ésta función, pero aún dentro de la función principal fruits, hacemos un `console.log` de todas las variables, dando como resultado lo siguiente:

Output:
```
Apple
ReferenceError: fruit2 is not defined
ReferenceError: fruit2 is not defined
```

El acceso a la primera variable, creada con `var` es posible por el Function scope, pero con las otras dos, `let` y `const`, no es posible porque están dentro de otra función, que para ES6 estas palabras se rigen por el Block scope.

<br>

## Re-asignación y Re-declaración

### var
```javascript
// var
var firstName; // cuando se declara se le asigna un valor undefined
console.log(firstName)
// output: undefined
firstName = 'Armando';
console.log(firstName);
// output: Armando

var lastName = 'Ruiz'; // declarando y asignando
console.log(lastName)
// output: Ruiz
lastName = 'Mariscal'; // reasignando
console.log(lastName);
// output: Mariscal


var secondName = 'Hilda';
conosole.log(secondName) // declarando y asignando
// output: Hilda
var secondName = 'Irina'; // reasignando
console.log(secondName)
// output: Irina
```
Aqui vemos que con `var` es posible reasignar y redeclarar

### let
```javascript
let fruit = 'Apple'; // declarando y asignando
console.log(fruit)
// output: Apple
fruit = 'kiwi' // reasignando
console.log(fruit)
// output: kiwi
let fruit = 'banana';
console.log(fruit)
// SyntaxError: Identifier 'fruit' has already been declared
```
Con let es posible reasignar pero no redeclarar

### const
```javascript
const animal = 'Dog';
console.log(animal);
// output: Dog
animal = 'Cat';
console.log(animal);
// TypeError: Assignment to constant variable.
```
Con const no es posible reasignar ni mucho menos redeclarar. Pero es posible trabajar las constantes como un array, siempre y cuando se haga con los métodos aplicables, como el siguiente ejemplo:
```javascript
const vehicles = [];
console.log(vehicles);
// output: []
vehicles.push("toyota");
console.log(vehicles)
// output: [ 'toyota' ]
vehicles.pop()
console.log(vehicles)
// output: []
```

<br>

## Strict Mode
Implementado en ES5, nos permite ejecutar de forma estricta reglas particulares para tener mucho mejor control sobre la asignación de las variables.
```javascript
'use strict';
pi = 3.1416;
console.log(pi);

function myFunction() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction());
```