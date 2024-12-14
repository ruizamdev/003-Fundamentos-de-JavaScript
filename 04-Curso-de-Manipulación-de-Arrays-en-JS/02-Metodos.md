# Métodos en JavaScript

## 7. some
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
const respuesta2 = numbers.some(item => item % 2 === 0);
console.log(respuesta2);
// output
// true
```

## 8. every
```javascript
const numbers = [ 1, 30, 39, 29, 10, 13 ];

let respuesta = true;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element >= 40) {
        respuesta = false;
    }
}
console.log('for', respuesta);
```

```javascript
const respuesta2 = numbers.every(item => item <= 40)
console.log('respuesta2:', respuesta2);
```

## 9. find y findIndex
```javascript
const numbers = [ 1, 30, 49, 29, 10, 13 ];

// estructura for
let rta = undefined;
for ( let i = 0; i < numbers.length; i++ ) {
    const element = numbers[ i ];
    if ( element === 30 ) {
        respuesta = element;
        break;
    }
}

console.log( 'for', respuesta );
```
```javascript
// estructura ecmascript
const respuesta2 = numbers.find ( item => item === 30 );
console.log ( 'find', respuesta2 );

// Array de productos
const products = [
    {
        name: 'Pizza',
        price: 12,
        id: '🍕'
    },
    {
        name: 'Burger',
        price: 23,
        id: '🍔'
    },
    {
        name: 'Hot dog',
        price: 34,
        id: '🌭'
    },
    {
        name: 'Hot cakes',
        price: 355,
        id: '🥞'
    }
];

const respuesta3 = products.find(item => item.id === '🍔');
console.log('find', respuesta3);
const respuesta4 = products.findIndex(item => item.id === '🍔');
console.log('findIndex:', respuesta4);
```

## 10. includes


```javascript
// retorna Si un elemento dado esta o no dentro del array

const pets = ['cat', 'dog', 'bat'];

for (let index = 0; index < pets.length; index++){
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}
console.log('for', includeInArray);
```

```javascript
//
const respuesta = pets.includes('dog');
console.log('includes', includeInArray)
```

## 11. join y split
Unificar el array

```javascript
const elements = ["Fire", "Air", "Water"];

let respuestafinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    respuestaFinal = respuestaFinal + element + separador;
}
console.log('for', respuestaFinal)
```

## 12. concat (inmutable, genera un array nuevo) para arrays y solo par arrays
Fusionar arrays
```javascript
const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

const newArray = elements;
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
console.log('for', newArray);
```
```javascript
const respuesta = elements.concat(othersElements);
const respuesta2 = [...elements, ...otherElements];
const respuesta3 = [...elements, ...'random'];
console.log('for', newArray);
console.log('respuesta')
console.log('respuesta2')
console.log('respuesta3')
elements.push(...othersElements);
console.log('elements', elements);
```
##