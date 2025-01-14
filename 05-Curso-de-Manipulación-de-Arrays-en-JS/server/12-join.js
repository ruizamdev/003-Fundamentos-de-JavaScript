const elements = ["Fire", "Air", "Water"];

let respuestaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    respuestaFinal = respuestaFinal + element + separator;
}
console.log('for', respuestaFinal)

const finalAnswer = elements.join('--')
console.log('join', finalAnswer)

// split
const frase = 'Esto es un string de muestra'
const split = frase.split(' ');
console.log('split', split)

const fraseFinal = frase.split(' ').join('-');
console.log('split y join juntos: ', fraseFinal)