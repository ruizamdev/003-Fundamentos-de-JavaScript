const numbers = [ 1, 30, 39, 29, 10, 13 ];

let respuesta = true;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element >= 40) {
        respuesta = false;
    }
}
console.log('for', respuesta);
const respuesta2 = numbers.every(item => item <= 40)
console.log('respuesta2:', respuesta2);