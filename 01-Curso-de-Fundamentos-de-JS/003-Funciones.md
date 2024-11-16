# Funciones y This
## Anatomía de una Función
**Tipo de dato complejo.**  
Podemos pensar que las funciones son como legos, con las cuales podemos crear muchas cosas complejas.  
Son pedazos de código que tiene una funcionalidad genérica y las cuales podemos utilizar una y otra vez a lo largo de un programa, esto nos permite apegarnos al concepto de DRY, ya que nos permite acortar el código cuando una parte se repite muchas veces.

**Ejemplo**:
```javascript
function suma (a, b) {
    return a + b
}
suma (3, 5)
// function - Palabra clave
// suma - Nombre de la función
// (a, b) - Parámetros (pueden o no ser necesarios)
// {} - Entre llaves se coloca el código a ejecutar al llamar la función
// return a + b - cuerpo return
// a todo esto se le conoce como declaración de función

// suma(3, 5) - Llamado de la función
```

**Ejemplo teórico**:  
Suponiendo que es black Friday, y queremos aprovechar los descuentos en ropa; cada una de la ropa tiene un descuento.  
Tenemos el precio normal
Tenemos el descuento
Hay mucha gente y no tenemos el valor final de cada prenda.
En este caso hipotético podemos aplicar una función:

Que quiero | Que datos tengo
:---: | :---:
Precio con descuento | Precio: $100 descuento: 20%
OUTPUT | INPUT

Datos de entrada: Precio y Descuento ---> Datos de salida: El precio con descuento

**Ejemplo práctico**:  
```javascript
function calculateDiscountPrice (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount
    return priceWithDiscount
} 

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountPrice(originalPrice, discountPercentage)

console.log('Original Price: $' + originalPrice)
console.log('Discount: ' + discountPercentage + '%')
console.log('Price with discount: $' + finalPrice)

// Resultado:
// Original Price: $100
// Discount: 20%
// Price with discount: $80
```

## Function vs Method
Cuando escribimos una función en javascript, lo que hacemos es escribirla, llamarla, y si usamos un `typeof` sobre ella, nos dirá que es de tipo *function*, pero eso no quiere decir que no siga siendo un objeto, el cual tiene propiedades, métodos, contexto de ejecución y pueden ser invocadas.

### Capacidades que tienen las funciones igual que otros objetos

1. Pasar funciones como argumentos (callback)
```javascript
function a () {}
function b (a) {}
b(a)
```

2. Retornar funciones
```javascript
function a () {
    function b () {}
    return b
}
```

3. Asignar funciones a variables (expresión de función)
```javascript
const a = function () {}
```

4. Tener propiedades y métodos
```javascript
function a () {}
const obj = {}
a.call(obj)
```

5. Anidar funciones (nested functions)
```javascript
function a () {
    function b () {
        function c () {}
    }
}
```

6. Almacenar funciones en objetos (método)
```javascript
const rocket = {
    name: 'falcon 9',
    launchMessage: function launchMessage () {
        console.log('goodbye bastards')
    }
}

rocket.launchMessage()
```

<br>

## Funciones puras e impuras
### Funciones puras
Tienen dos características fundamentales:
1. De una misma entrada vamos a obtener la misma salida
2. No producen efectos secundarios (side effects):
    1. Modificar variables globales
    2. Modificar los parámetros de una función
    3. Solicitudes HTTP (API calls)
    4. Imprimir mensajes en pantalla o consola
    5. Manipulación del DOM
    6. Acceder fecha y hora


Ejemplo de función pura:
```javascript
function sum (a, b) {
    return a + b
}
```

### Funciones impuras

```javascript
function sum (a, b) {
    console.log('A: ', a)
    return a + b
}
```

```javascript
let total = 0

function sumWithSideEffect () {
    total += a
    return total
}
```

```javascript
// pura
function square(x) {
    return x * x
}
```

```javascript
function addTen (y) {
    return y + 10
}
```

Combinación de dos funciones puras = pura
```javascript
const number = 5
const finalResult = addTen(square(number))
console.log (finalResult)
```

<br>

## Arrow Functions y Lexical Binding
```javascript
 almuerzo (proteína, verdura) {
    return `${proteína} ${verdura}`
}

almuerzo('carne', 'brocoli')
```
```javascript
const almuerzo = (proteína, verdura) => {
    return `${proteína} ${verdura}`
}

almuerzo('carne', 'brocoli')
```

```javascript
const greeting = function (namee) {
    return `hi, ${namee}`
}

// arrow function con explicit return
const newGreeting = (namee) => {
    return `Hi, ${namee}`
}

// arrow function con implicit return
const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastname) => `Hi, ${name}`
```

```javascript
// Lexical Binding
const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    // Lexical Binding con arrow function
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

fictionalCharacter.messageWithTraditionalFunction('With great powers comes great responsibility')
fictionalCharacter.messageWithArrowFunction('May hazme un sandwich')

// Uncle Ben says: With great powers comes great responsibility
// undefined says: May hazme un sandwich
```

<br>

## Contextos de ejecución y Scope chain

Keyword | Scope | Hoisting | Re-assign | Re-declare
:---: | :---: | :---: | :---: | :---:
var | Función | Sí | Sí |Sí
let | Bloque | No | Sí | No
const | bloque | No | No | No

```javascript
const productName = 'Smartphone'
const price = 499
const brand = 'TechCo'

function getProductDetails () {
    const productName = 'Laptop'
    const price = 899

    return `The ${productName} costs $${price} and is from the brand ${brand}.`
}
console.log(getProductDetails())
// Resultado:
// The laptop costs $899 and is from the brand TechCo.

console.log(`The ${productName} costs $${price} and is from the brand ${brand}.`)
// Resultado:
// The Smartphone costs $499 and is from the brand TechCo.
```

En el ejemplo anterior vimos como las constantes declaradas y mostradas con `console.log` dentro de la función `getProductDetails` son mostradas, en cambio al llamar las mismas constantes pero por fuera de la función, obtiene el valor de las que esta por fuera de la misma.  

Buscando una analogía para describir este comportamiento es mediante la muñeca rusa *matrioshka* la cual puede almacenar una muñeca mas pequeña en su interior, y esas misma muñeca puede almacenar otra mas pequeña y asi sucesivamente. En javascript a esto se le conoce como **Contexto Global** y **Contexto Local**; podemos saber que existe un contexto local cuando existe código dentro de llaves.

Desde el contexto global no podemos acceder a contextos locales, pero si podemos a la inversa, es decir que podemos acceder al contexto global desde un contexto local.

Otro ejemplo:
```javascript
contst userPoints = 150

function checkAccess() {
    if (userPoints < 100) {
        const message = "Access denied: Insufficient points!"
        return message
    } else {
        const message = "Access granted: Enjoy the premium features!"
        return message
    }
}

console.log(checkAccess())
```

Para lograr identificar los contextos, debemos definir muy bien cuales son los bloques:

```javascript
// La primera línea y la última, son las únicas que están fuera de llaves, las cuales estarían en el contexto global y todo lo que está entre estas dos sería un bloque
const userPoints = 150

// El primer contexto local es sería todo lo que esta dentro de la función checkAccess, otro bloque
function checkAccess() {
    
    // Lo que esta dentro del if sería otro contexto local, tercer bloque
    if (userPoints < 100) {
        const message = "Access denied: Insufficient points!"
        return message
    // Y por último lo que esta dentro de else sería el último contexto local, el cuarto bloque.
    } else {
        const message = "Access granted: Enjoy the premium features!"
        return message
    }
}
```

A esto tambíen se le conoce como Scope chain

Otro ejemplo:
```javascript
contst globalVariable = 'carita'

function localOne () {
    console.log('GLOBAL 1: ', globalVariable)
    console.log('LOCAL 1: ', localVariable)
    
    function localTwo() {
        const carrot = 'zanahoria'
        console.log('LOCAL 2: ', carrot)
    }

    localTwo()
    localThree()
}

console.log(localOne())

// Resultado:
// GLOBAL 1: carita
// ReferenceError: localVariable is not defined

// si comentamos la línea donde aparece el error console.log('LOCAL 1: ', localVariable) nos daría el siguiente resultado
// GLOBAL: 1: carita
// LOCAL 2: zanahoria
//ReferenceError: carrot is not defined

// Entre contextos locales no se puede acceder
```

<br>

## Closure
Es una función que tiene acceso a variables de un ámbito externo, incluso después de que esa función haya terminado de ejecutarse.

**Ámbito léxico**: cada vez que se declara una función, crea su propio ámbito léxico, y puede acceder a las variables dentro de ese ámbito y a las variables en ámbitos superiores.

Ejemplo:
```javascript
function outerFunction () {
    let outerVariable = "I am from outer function"
    function innerFunction () {
        console.log(outerVariable)       
    }

    return innerFunction
}

const closureExample = outerFunction ()
closureExample()
```

```javascript
function createCounter () {
    let count = 0
    
    return function () {
        count++
        console.log(count)
    }
}

const counterA = createCounter()
counterA ()
counterA ()

const counterB = createCounter()
counterB ()

// resultado:
// I am outer function
// 1
// 2
// 1

// aqui se crea un conflicto de memoria
```

```javascript
function outer () {
    let message = "Hello, "
    
    function inner (name) {
        console.log(message + name)
    }

    return inner
}

const closureA = outer()
const closureB = outer()

closureA("Alicia")
closureA("Reyna")

// Resultado:
// Hello, Alicia
// Hello, Reyna
```