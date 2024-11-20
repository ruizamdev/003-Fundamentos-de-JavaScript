# Introducción

## Preparación de Entorno (Linux)
Aquí esta mi [configuración de entorno](https://www.notion.so/Preparaci-n-de-entorno-13092b7f8e7c8012b946ee820ab51d95)

## Anatomía de una variable
Las variables son contenedores que nos permiten almacenar datos de distintos tipos y a las que les podemos poner un nombre específico. Las variables, como su nombre lo indica, va a variar a lo largo de la ejecución del código.

Para crear una variable en JS se utiliza la palabra reservada `let`, seguido del nombre que queramos asignarle y para el valor, escribimos el signo de asignación **"Igual"** `=`, seguido del tipo de valor que queramos:
```javascript
let cajaDeAndy = "Woody" // Aquí estamos utilizando la técnica denominada 
                         //* "Camel Case" para nombrar la variable. *//
```

### Lo que NO es permitido hacer
Ser lo mas descriptivo con los nombres de las variables, no ser ambiguo.
```javascript
let c = 'Woody'
let cda = 'Woody'
let pcAndy = 'Woody'
let c, cda
    pcAndy
```

### Lo que es permitido hacer
```javascript
let primerTrasteoDeAndy = 'Woody'
let urlDelUsuario = 'https://github.com'
let idDelUsuario = '123456789'; // Podemos o no, utilizar punto y coma al final de cada sentencia.
```

### Constantes
Tiene la misma utilidad que una variable pero, en vez de variar el valor, se mantiene igual en la mayoría o en todo el tiempo que dure la ejecución del código.
```javascript
const pi = 3.1415
```

<br>

## Tipos de datos
En JS tenemos diez tipos de datos, estos se dividen en dos grupos, los **Primitivos** y los **Complejos**:

Primitvos | Complejos
:---: | :---:
String | Object
Number | Array
Boolean | Function
Null | 
Undefined | 
Symbol | 
Bigint

### Tipos de datos Primitivos

#### String
```javascript
let nombre = 'Armando'
```
#### Number
```javascript
let edad = 25
```
#### Boolean
```javascript
let esMayorDeEdad = true
```
#### Null
```javascript
let noHayValor = null
```
#### Undefined
```javascript
let noDefinido = undefined // Este valor, nosotros como programadores no lo utilizamos,
                           // esto lo hace JS para indicarlo en ciertas situaciones.
```
#### Symbol
```javascript
let simboloUnico = Symbol('único')
```
#### Bigint
```javascript
let numeroGrande = 2n
```

### Tipos de datos Complejos

#### Object
```javascript
let autoMovil = {
    marca: 'Tesla',
    modelo: 'Model S'
}
```
#### Array
```javascript
let frutas = ['manzana', 'platano', 'uvas']
```

#### Function
```javascript
function saludar() {

}
```

<br>

## Creación de Strings
```javascript
let string1 = 'Hola comillas Simples!'
let string2 = "Hola comillas Dobles!"
let string3 = `${string1} invertidas`
let string4 = string1 + ' ' + string2
```
Resultado
```
Hola Comillas Simples!
Hola Comillas Dobles!
Hola Comillas Simples! invertidas!
Hola Comillas Simples! Hola Comillas Dobles!
```

<br>

## Operadores Aritméticos
### Tipos de Números
#### Entero y Decimal
```javascript
const entero = 42
const decimal = 3.1415
console.log(typeof entero, typeof decimal)
```
```
number number
```
#### Notación científica
```javascript
const cientifico = 5e3
```
#### Infinitos y Not a Number
```javascript
const infinito = Infinity
const noEsNumero = NaN
```
#### Operaciones Aritméticas
1. Suma, resta, multiplicación y división.
   ```javascript
   const suma = 3 + 2
   const resta = 4 - 4
   const multiplicacion = 4 * 8
   const division = 15 / 3
   ```
2. Módulo y exponentes
    ```javascript
    const modulo = 15 % 8
    const exponente = 2 ** 3
    ```
#### Problemas
Precisión
```javascript
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.3) // el simbolo "===" compara si son iguales a nivel
                                // de número y tipo de número
```
```
0.30000000000000004
0.3
false
```

#### Operaciones avanzadas
```javascript
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)
```
```
4
7
102
```

<br>

## Conversión de tipos
En los lenguajes de programación, la computadora no lo entiende tal cual, es por eso que se necesitan compiladores para poder transformar ese código escrito por nosotros en código que puede entender la computadora.  
Dentro de estos lenguajes de programación existen dos tipos: los compilados y los interpretados.  
Por ejemplo:

Compilados | Interpretados
:---: | :---:
C, C++  | JavaScript 
Rust | Ruby
Go | PHP
Swift | Python

La diferencia radica en el momento en el que es compilado (traducido o trasformado a lenguaje maquina [0 y 1]) el código fuente, hablamos que en los de tipo compilado ésta traducción ocurre antes de la ejecución del programa, y los interpretados se van traduciendo conforme se va ejecutando el programa.  
También existe otra característica de ambos grupos, el chequeo de tipos, en el compilado es estático y en el interpretado es dinámico, esto quiere decir que al momento de ejecución (en el caso de JS) nuestro lenguaje no va a saber que tipo de valores tienen nuestras variables hasta que se ejecuta esa parte del programa, cosa contraria con los lenguajes compilados.

Compilados | Interpretados
:---: | :---:
Chequeo **estático** de tipos | Chequeo **dinámico** de tipos

JavaScript en este sentido, se podría decir que tiene un tipado débil, porque podemos escribir una variable con valor numerico y despues un valor string.

En este ejemplo JS va checando cada valor y al momento de encontrar algo inusual marca un error:
```javascript
const saludo = 'hola'
console.log()
const despedida = 'adios'
console.log(despedida)
const titulo = 'me gusta estudiar
console.log(titulo) // Aquí saldrá un error
const descripcion = 'porque aprendo mucho'
console.log(descripcion)
```

En este otro ejemplo al ver que los dos tipos de valor que se están sumando no son iguales, convierte en este caso el valor booleano en numero para poder realizar la operación; esto lo hace automáticamente JS.
```javascript
const numero = 2
const booleano = true
console.log(numero + booleano)
```
```
3
```

A esto es a lo que se le llama conversión de tipos, y existen 2 variantes:

Implícita | Explícita
:---: | :---:
2 + true | String()
| | Number()
| | Boolean()

### Explicit Type Casting
#### String a Integer
```javascript
const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)
```
```
42
number
```
#### String a Float
```javascript
const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)
```
```
3.14
number
```
#### Binario a decimal
```javascript
const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)
```
```
10
number
```
### Implicit Type Casting

#### Concatenación de string y number = string
```javascript
const sum = '5' + 3
console.log(sum)
```
```
53
```
#### Concatenación de string y boolean = string
```javascript
const sumWithBoolean = '3' + true
```
```
3true
```
#### Suma de number y boolean = number
```javascript
const sumWithNumber = 2 + true
console.log(sumWithNumber)
```
```
3
```
```JAVASCRIPT
const stringValue = '10'
const numberValue = 10
const booleanValue = true

console.log(stringValue + stringValue) // concatena (type string)
console.log(stringValue + numberValue) // concatena (type string)
console.log(stringValue + booleanValue) // concatena (type string)

console.log(numberValue + stringValue) // concatena (type string)
console.log(numberValue + numberValue) // suma (type number)
console.log(numberValue + booleanValue) // suma (type number)

console.log(booleanValue + stringValue) // concatena (type string)
console.log(booleanValue + numberValue) // suma (type number)
console.log(booleanValue + booleanValue) // suma (type number)
```
```
1010 
1010
10true

1010
20
11

true10
11
2
```
