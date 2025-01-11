// Forma tradicional de concatenar strings antes de ECMAScript6
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';
// console.log(epicPhrase)

// Template Literals
let epicPhrase2 = `${hello} ${world}!`
console.log(epicPhrase2)

// Multi-line strings
let lorem = 'esto es un string \n ' + 'esto es otra linea de string'

let lorem2 = `Esta es una frase epica
esto es la continuacion de frase epica.
`
console.log(lorem)
console.log(lorem2)