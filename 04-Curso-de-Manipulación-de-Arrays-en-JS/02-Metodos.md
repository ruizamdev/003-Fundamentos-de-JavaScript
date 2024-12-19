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
## flat y flatMap
Manipulacion de arrays dentro de arrays dentro de arrays.

Flat:
```javascript
const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log('for', newArray)
```

```javascript
const respuesta = matriz.flat()
console.log('flat', newArray)
```


Flatmap:
```javascript
const calendars = {
    primaryCalendar: [
        {startDate: new Date(2021, 1, 1, 15), endDate: new Date(2021, 1, 1, 16), title: 'primary 1'},
        {startDate: new Date(2021, 1, 1, 17), endDate: new Date(2021, 1, 1, 18), title: 'primary 2'},
        // se agregan 3 objetos mas con las mismas propiedades
        {startDate: new Date(2021, 1, 1, 19), endDate: new Date(2021, 1, 1, 20), title: 'primary 3'},
        {startDate: new Date(2021, 1, 1, 21), endDate: new Date(2021, 1, 1, 22), title: 'primary 4'},
        {startDate: new Date(2021, 1, 1, 23), endDate: new Date(2021, 1, 1, 24), title: 'primary 5'}
    ],
    secondaryCalendar: [
        {startDate: new Date(2021, 1, 1, 19), endDate: new Date(2021, 1, 1, 20), title: 'secondary 1'},
        {startDate: new Date(2021, 1, 1, 21), endDate: new Date(2021, 1, 1, 22), title: 'secondary 2'},
        // se agregan 3 objetos mas con las mismas propiedades
        {startDate: new Date(2021, 1, 1, 23), endDate: new Date(2021, 1, 1, 24), title: 'secondary 3'},
        {startDate: new Date(2021, 1, 1, 25), endDate: new Date(2021, 1, 1, 26), title: 'secondary 4'},
        {startDate: new Date(2021, 1, 1, 27), endDate: new Date(2021, 1, 1, 28), title: 'secondary 5'}
    ]
};

const respuesta4 = Object.values(calendars).flatMap(item => {
    console.log('item', item)
    return item.map(date => date.startDate);
});
console.log(respuesta4);
```

## Mutable Functions
Recordatorio de métodos mutables e inmutables

En el siguiente ejemplo vemos como es posible utilizar ambos tipos de métodos (los que mutan y los que no mutan a los arrays).

En este caso tenemos el método findIndex()(inmutable) para poder encontrar un elemento dentro del array y los métodos push()(mutable) para agregar un elemento a un array y slice()(mutable) para eliminar un elemento del array.
```javascript
const products = [
    { title: 'Pizza', price: 121, id: "🍕" },
    { title: 'Burger', price: 123, id: "🍔" },
    { title: 'Hot cakes', price: 111, id: "🥞" },
    { title: 'Hot-dog', price: 234, id: "🌭" },
    { title: 'Tacos', price: 432, id: "🌮" }
];

const myProducts = [];
console.log('products:', products);
console.log('myProducts:', myProducts);
console.log("-".repeat(10));
const productIndex = products.findIndex(item => item.id === "🍔");

if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}

console.log('products:', products);
console.log('myProducts:', myProducts);
console.log("-".repeat(10));
```

En este otro ejemplo, hacemos un update de un elemento del array agregando un nuevo precio y una descripción por medio del spread operator:
```javascript
const productsV2 = [
    { title: 'Pizza', price: 121, id: "🍕" },
    { title: 'Burger', price: 123, id: "🍔" },
    { title: 'Hot cakes', price: 111, id: "🥞" },
    { title: 'Hot-dog', price: 234, id: "🌭" },
    { title: 'Tacos', price: 432, id: "🌮" }
]

const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: "Deliciosos hot cakes",
    }
}

const productIndexV2 = productsV2.findIndex(item => item.id === update.id)
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
}

console.log(productsV2)
```

<br>

## Sort (mutable)
Cambia el orden del array original
