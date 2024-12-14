# Métodos en JavaScript

## Some
Si algún elemento del array cumple un condicional.  
some solo devuelve un booleano, si alguno de los elementos cumple con la condición.

Esto es lo que hace some:
```javascript
const numbers = [1, 2, 3, 4];

let respuesta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}
console.log(rta);
// output
// true
```
Pero en esta sola linea:
```javascript
const respuesta2 = numbers.some(item => item % 2 ===0);
console.log(respuesta2);
// output
// true
```

