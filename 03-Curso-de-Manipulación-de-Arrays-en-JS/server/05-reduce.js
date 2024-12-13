const totales = [1,2,3,4,5]
let sum = 0;
for (let index = 0; index < totales.length; index++) {
    const element = totales[index];
    sum = sum + element;
}
console.log(sum);

// Se crea una constante "rta" con un valor de: array.reduce((acumulador, objeto-iterable) => acumulador + objeto-iterable, estado-inicial)
// 
const rta = totales.reduce((sum, element) => sum + element, 0)
console.log(rta)