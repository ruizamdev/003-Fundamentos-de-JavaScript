# Fundamentos de manejo de arrays

## 1. forEach

Iteración con forEach
```javascript
const letters = ['a', 'b', 'c']

// solo con for
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for', element);
}
// output:
// for a
// for b
// for c

// con forEach se reduce significativamente el número de líneas de código.
letters.forEach(item => console.log('forEach', item))
//output:
// forEach a
// forEach b
// forEach c
```

<br>

## Mutabilidad e Inmutabilidad (Transforma, no transforma)
Es la capacidad de un método de array de modificar el array original.
Mayormente se recomienda practicar la Inmutabilidad.

Nos debemos preguntar antes de hacer una modificación...  
...esto traerá efectos colaterales?
```javascript
lovelyPets = [🐵, 🐶, 🦝, 😸];
```
Estructura de datos Inmutable
sin modificar el array original
![inmutabilidad](./assets/inmutabildad.png)

<br>

## 2. map (Inmutable)
map transforma, 

hace una transformación del array (crea una copia optimizada para trabajar sobre ella) itera y aplica una función para cada uno de los valores.
```javascript
const letters = ['a', 'b', 'c'];

const newArray = letters.map(item => item + '++');
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const letter = letters[index];
//     newArray.push(letter + '++');
// }

console.log('original', letters);
console.log('new', newArray);
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // App 2
        numbers = [1, 2, 3, 4, 5];
        const multipliedNumbers = numbers.map(number => {
            return number * 2;
        });

        console.log(numbers);
        console.log(multipliedNumbers);
    </script>
</body>
</html>
```

<br>

## 3. map reloaded (Inmutable)
Podemos transformar nuestros arrays en lo que sea. Utilizando esta forma.
Tomares el siguiente array para los ejemplos posteriores:
```javascript
const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true
    },
    {
        cusotmerName: 'Valentina',
        total: 240,
        delivered: true
    }
];
```

<br>

### Creacion de un array a partir de la información contenida en otro array
```javascript
console.log('original', orders);
const respuesta = orders.map(item => item.total);
console.log('respuesta', respuesta);
```
Output:
```
original [
  { custmerName: 'Nicolas', total: 60, delivered: true },
  { custmerName: 'Zulema', total: 120, delivered: false },
  { custmerName: 'Santiago', total: 180, delivered: true },
  { custmerName: 'Valentina', total: 240, delivered: true }
]
respuesta [ 60, 120, 180, 240 ]
```
```javascript
const respuesta2 = orders.map(item => {
    item.tax = .19;
    return item
})
console.log('respuesta2', respuesta2);
console.log('original', orders)
```
Output:
```
respuesta2 [
  { custmerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
  { custmerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
  { custmerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
  { custmerName: 'Valentina', total: 240, delivered: true, tax: 0.19 }
]
original [
  { custmerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
  { custmerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
  { custmerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
  { custmerName: 'Valentina', total: 240, delivered: true, tax: 0.19 }
]
```
Aquí lo que se esta haciendo es trabajar una copia del array de objetos hecha por map, por lo tanto solo sera de manera temporal, ya que el array original no se esta modificando en realidad.

---
### 

```javascript
const respuesta3 = orders.map((item) => {
    return {
        ...item,
        tax: .19
    }
})

console.log('Respuesta #3: ', respuesta3)
console.log('original: ', orders)
```
Output:
```
Respuesta #3:  [
  { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
  { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
  { customerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
  { customerName: 'Valentina', total: 240, delivered: true, tax: 0.19 }
]
original:  [
  { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
  { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
  { customerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
  { customerName: 'Valentina', total: 240, delivered: true, tax: 0.19 }
]
```

<br>

## 4. Filter (Inmutable)
Ayuda a filtrar los elementos en base a un condicional, los elementos que cumplan con la condición van a ser parte de ese nuevo array.

Planteamos este array:
```javascript
const words = [`spray`, `limit`, `elite`, `exuberant`];
```

Una forma de filtrar un array seria de la siguiente manera:
```javascript
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length >= 6) {
        newArray.push(item);       
    };
};
console.log(`newArray: `, newArray);
console.log(`words: `, words);
```
Pero esto es algo largo, una forma de reducirlo es utilizando filter:
```javascript
const respuesta = words.filter(item => item.length >= 6)
console.log(`respuesta: `, respuesta);
console.log(`words: `, words);

```
En tan solo una linea se pudo expresar lo mismo que en la anterior con 7 lineas de código

<br>

Tomando el array del ejemplo dado en map-reloaded:\
```javascript
const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true
    }
];
```
Podemos hacer esto con filter:
```javascript
const filtro = orders.filter(item => item.delivered)
console.log('filtro: ', filtro)

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}
console.log('resultado', search('Nico'))
```

<br>

## 5. Reduce
reduce un array a un único valor.Este método aplica una función a un acumulador y a cada elemento del array(de izquierda a derecha) para reducirlo a un solo valor.

Código sin reduce:
```javascript
const totales = [1,2,3,4,5]
let sum = 0;
for (let index = 0; index < totales.length; index++) {
    const element = totales[index];
    sum = sum + element;
}
console.log(sum);
// output:
// 15
```

Código con método reduce():
```javascript
const rta = totales.reduce((sum, element) => sum + element, 0)
console.log(rta)
```

## 6. reduce reloaded
```javascript
// Reduce reloaded
const items = [1,1,2,6,5,4,1,3,0,1,6,5,8,9,7,0,0,6,5,7,4,2,7,3,2,0,4,6];
// cuantos hay de un mismo de cada uno de los elementos del array
//output
// 1: 1,
// 3: 2,
// 2: 1,

const respuesta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    };
    return obj;
}, {}); 

console.log(respuesta);


// ahora con objetos

const data = [
    {
        name: "Laura",
        department: "UX Designer"
    },
    {
        name: "Carlos",
        department: "Backend Dev"
    },
    {
        name: "Juan",
        department: "Frontend Dev"
    },
    {
        name: "Liliana",
        department: "Frontend Dev"
    },
    {
        name: "Andres",
        department: "Backend Dev"
    },
    {
        name: "Carlos",
        department: "Frontend Dev"
    },
    {
        name: "Armando",
        department: "Frontend Dev"
    },
    {
        name: "Laura",
        department: "UX Designer"
    },
    {
        name: "Carlos",
        department: "Backend Dev"
    },
    {
        name: "Juan",
        department: "Frontend Dev"
    },
    {
        name: "Liliana",
        department: "Frontend Dev"
    },
    {
        name: "Andres",
        department: "Backend Dev"
    }
];

const respuesta2 = data
.map(item => item.department)
.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(respuesta2);


// por rangos

const numeros = [1,1,5,3,2,1,1,5,6,5,7,4,8,9,1,3,2,1,9,6,8,5,4,1,3,5,3,0,1,6,5,4,9,5,7,8,2,0,1,2,3,0,2,9,7];
const respuesta3 = numeros
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }    
})
```