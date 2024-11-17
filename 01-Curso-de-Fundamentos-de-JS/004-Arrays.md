# Manipulación de Arrays

## Introducción a los Arrays
Los arrays son una colección de valores almacenados en una sola variable y pueden ser considerados como objetos.

### Creación de arrays
Hay dos formas de crear arrays:
1. Con el método `new Array()` o `Array()`
```javascript
const fruits = Array('apple', 'platano', 'orange')
console.log(fruits)

// No es posible usar esta forma de array para un solo elemento
const justOneNumber = Array(12)
console.log(justOneNumber)
// da el siguiente resultado:
// <12 empty items>

const numbers = Array(1, 2, 3, 4, 5)
console.log(numbers)
```

2. Y con Array literal syntax (con corchetes)
```javascript
// Aquí si es posible crear un array con un solo dato
const oneNumber = [4]
console.log(oneNumber)

// incluso vacío
const emptyArray = []
console.log(emptyArray)

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)

const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredient: 'Milk', quantity: '1 cup'
    },
    false
]
```

### Accesando a los arrays
Los elementos almacenados dentro de un array, son contabilizados y agregados a un índice, el cual comienza con 0

```javascript
const fruits = Array('apple', 'platano', 'orange')
const firstFruit = fruit[0]
console.log(firstFruit)
// resultado:
// apple
```

Es posible también saber la cantidad de elementos almacenados:
```javascript
const numberOfFruits = fruits.length
console.log(numbersOfFruits)
// Resultado:
// 3
```

<br>

## Mutabilidad e Inmutabilidad
Siendo un array un objeto, éste puede tener diferentes métodos, estos metodos nos van a ayudar hacer una gran cantidad de cosas, dependiendo del tipo de metodo, vamos a poder transformar el valor del array (mutabilidad) o crear uno nuevo a partir del él (inmutabilidad).

### Mutabilidad
```javascript
const fruits = Array('apple', 'platano', 'orange')
fruits.push('watermelon')
console.log(fruits)
// resultado:
// ['apple', 'platano', 'orange', 'watermelon']
```

### Inmutabilidad
```javascript
const newFruits = fruits.concat(['grape', 'kiwi'])
console.log(fruits)
console.log(newFruits)
// resultado:
// ['apple', 'platano', 'orange', 'watermelon']
// ['apple', 'platano', 'orange', 'watermelon', 'grape', 'kiwi']
```

### Check arrays con Array.isArray()
```javascript
const isArray = Array.isArray(fruits)
console.log(isArray)
// resultado:
// true
```

Ejercicio practico: suma de todos los elementos de un array
```javascript
const numbersArray = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i]
}
console.log(sum)
// resultado:
// 15
```

<br>

## Métodos push() y pop()
Estos métodos nos van a permitir modificar el array original.

### push()
Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
```javascript
const countries = ['México', 'Colombia', 'Venezuela']

// al declarar esta variable estamos modificando la anterior y asignandole la longitud de la misma.
const newCountries = countries.push('Ecuador', 'Perú')

console.log(countries)
console.log(newCountries)

// resultados:
// ['México', 'Colombia', 'Venezuela', 'Ecuador', 'Perú']                                                                 
// 5
```


### pop()
Contrario a `push()`, elimina el último elemento de un array y lo devuelve
```javascript
const removeCountries = countries = countries.pop()

console.log(countries)
console.log(removeCountries)

// Resultados:
// ['México', 'Colombia', 'Venezuela', 'Ecuador']
// 4
```

<br>

## Métodos map() y forEach()
`map()` y `forEach()` no modifican el array original pero si iteran sobre él.

### map()
Permite aplicar una función a cada elemento de un array y construir un nuevo array con los resultados.
```javascript
const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)

console.log (numbers)
console.log (squaredNumbers)

// resultados:
// [1, 2, 3, 4, 5]
// [1, 4, 9, 16, 25]
```

### forEach()
Itera sobre todos los elementos del array igual que `map()` y ejecuta una función proporcionada para cada elemento, pero sin crear un nuevo array.
```javascript
const colors = ['red', 'green', 'blue']
const iteratedColors = colors.forEach(color => coonsole.log(color))

console.log(colors)
console.log(iteratedColors)

// Resultados:
// red
// green
// blue
// undefined
```

Ejemplo aplicado:  

**Fahrenheit to celsius conversion**  
Crea un programa que tome un array de temperaturas en grados fahrenheit como entrada y las convierta en grados celcius usando la formula:  

$C = 5/9 * (F - 32)$

```javascript
const tempFahrenheit = [32, 68, 95, 104, 212]
const tempCelcius = tempFahrenheit.map(f => (f - 32) * 5 / 9)

console.log(tempFahrenheit)
console.log(tempCelcius)

// [ 32, 68, 95, 104, 212 ]
// [ 0, 20, 35, 40, 100 ]
```
```javascript
const elements = [2, 4, 6, 8, 10]
let sumElements = 0
elements.forEach(element => {
    sumElements += element
})

console.log(elements)
console.log(sumElements)

// resultados:
// [ 2, 4, 6, 8, 10 ]
// 30
```

<br>

## Métodos filter() y reduce()
`filter()` y `reduce()` tampoco modifican el array original y solamente iteran sobre los elementos

### filter()
Crea un nuevo array con elementos que cumplen una condición dada por una función.
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers)
console.log(evenNumbers)

// resultados:
// [
// 1, 2, 3, 4, 5,
// 6, 7, 8, 9, 10
// ]
// [2, 4, 6, 8, 10]
```

### reduce()
Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
```javascript
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numbers)
console.log(sum)

// resultados:
// [1, 2, 3, 4, 5]
// 15
```

Que tanto ser repite una palabra en un array:

- Caso 1:
```javascript
const words = ['apple', 'orange', 'hello', 'bye', 'orange', 'bye', 'bye']
const wordFrecuency = word.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordFrecuency)

// resultado:
// { apple: 1, orange: 2, hello: 1, bye: 3}
```

<br>

## Métodos find() y findIndex()
Nos ayudan a encontrar elementos e indices en un array sin modificar el array original.

### find()
Devulve el valor del primer elemento del array que cumple la función de prueba proporcionada.
```javascript
const multipleOf5 = [5, 10, 15, 20]
const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10)

console.log(multipleOf5)
console.log(firstNumberGreaterThan10)

// resultados:
// [ 5, 10, 15, 20 ]
// 15
```

### findIndex()
```javascript
const randomNumbers = [6, 14, 27, 56, 40]
const indexNumber = randomNumber.findIndex(number => number > 50)

console.log(randomNumber)
console.log(indexNumber)

// resultados:
// [ 6, 14, 27, 56, 40 ]
// 3
```

<br>

## Método slice()
Crea una copia superficial (shallow copy) de una porción del array, especificada por índices de inicio y fin(fin no incluido)
```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(animals.slice(2))
console.log(animals.slice(2, 4))
console.log(animals.slice(1, 6))
console.log(animals.slice(-2))
console.log(animals.slice(2, -1))
console.log(animals.slice())

// resultado:
// [ 'camel', 'duck', 'elephant' ]
// [ 'camel', 'duck' ]
// [ 'bison', 'camel', 'duck', 'elephant' ]
// [ 'duck', 'elephant' ]
// [ 'camel', 'duck' ]
// [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
```

<br>

## Spread Operator
`spread(...)` se utiliza para expandir elementos de un iterable (como un array o un objeto) en lugares donde se esperan cero o más elementos.

### Copiando un array
```javascript
const originalArray = [1, 2, 3, 4, 5]
const copiedArray = [...originalArray]
console.log(originalArray)
console.log(copiedArray)

// resultados:
// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 3, 4, 5 ]
```

### Combinando arrays
```javascript
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(combinedArray)

// resultados:
// [ 1, 2, 3 ]
// [ 4, 5, 6 ]
// [ 1, 2, 3, 4, 5, 6 ]
```

### Crear arrays con elementos adicionales
```javascript
const baseArray = [1, 2, 3]
const addElementArray = [...baseArray, 4, 5, 6]

console.log(baseArray)
console.log(addElementArray)

// resultados:
// [ 1, 2, 3 ]
// [ 1, 2, 3, 4, 5, 6 ]
```

### Pasar parámetros a una función
```javascript
function sum (a, b, c) {
    return a + b + c
}
const numbers = [1, 2, 3]

// sum(1, 2, 3)
const result = sum(...numbers)

console.log(result)

// resultado:
// 6
```