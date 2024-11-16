# Estructuras de control y lógica
## Operadores de comparación

- `==`: Comparación en valor
- `===`: Comparación en valor y tipo de dato
- `!=`: Comparación diferenciador "es diferente de"
- `!==`: Comparación diferenciador en valor y tipo de dato
- `>`: Mayor que
- `<`: Menor que
- `>=`: Mayor o igual que
- `<=`: Menor o igual que
  

```javascript
const a = 10
const b = 20
const c = "10"

a == b 
// false
a === c
// false
a != b
// true
a !== c
// true
a > b
// false
a <= b
// true
a > c
// false
```

<br>

## Operadores Lógicos
- `&&`: operador and ("y")
- `||`: operador or ("o")
- `!`: operador not ("no")

### True tables
#### and
| a | b | Resultado |
:---: | :---: | :---:
true | true | true
true | false | false
false | true | false
false | false | false

#### or
| a | b | Resultado |
:---: | :---: | :---:
true | true | true
true | false | true
false | true | true
false | false | false

#### not
a | resultado
:---: | :---:
true | false
false | true

```javascript
const a = 10
const b = 20
const c = "10"

a == b && a === c
// false
a != b || a === c
// true
!(a === c)
// true
```

<br>

## Estructuras Condicionales
### if 
Nos permite ejecutar código dependiendo de que se cumplan ciertas condiciones.  
Si [condición] entonces [acción]

Estructura:
```
if (let === algo) {  
    código  
} else if {  
    código  
} else {  
    código  
}
```  
Ejemplo:
```javascript
let nombre = "Armando"

if (nombre === "Armando") {
    console.log ("Hola " + nombre)
}
```

#### Juego con if
```javascript
const numeroSecreto = Math.floor(Math.random() * 10 + 1)
const numeroJugador = parseInt (
  prompt("Adivina el número secreto del 1 al 10:")
)
console.log(`Este es el número con el que juegas ${numeroJugador}`)

if(numeroJugador === numeroSecreto) {
  console.log("Felicidades Ganaste!")
} else if (numeroJugador < numeroSecreto) { 
  console.log("El numero secreto es mayor")
} else if (numeroJugador > numeroSecreto) {
  console.log("El numero secreto es menor")
}
```

### Switch
Es similar a if, pero aquí lo que hace analizar si ciertos casos tienen un valor true.

Estructura:
```
interruptor (expresión) {
  caso valor1:   <-- Si es true ejecuta el siguiente código, si no pasa al siguiente caso
    código
    termina;
  caso valor2:
    código
    termina;
  Predeterminado: <-- si nada es true se ejecuta el siguiente código
    código
}
```

Ejemplo:
```javascript
let expresión = "papayas"
switch (expresión) {
  case "Naranjas":
    console.log("las naranjas cuestan $20 el kilo")
    break;
  case "Manzanas":
    console.log("Las manzanas cuestan $45 el kilo")
    break;
  case "Plátanos":
    console.log("El plátano cuesta $30 el kilo")
    break;
  case "Mangos":
  case "Papayas":
    console.log("Los mangos y papayas cuestan $24 el kilo")
    break;
  default:
    console.log(`Lo siento, no contamos con ${expresión}`);
}
```

<br>

## Estructuras de Iteración (loop)
### For
Nos permite iterar por cada elemento de una lista.

Estructura:
```
por (variable; condición; incremento) {
  código
}
```

Ejemplo:
```javascript
// Tenemos una lista con 4 valores
let list = ["eat", "sleep", "code", "repeat"]

// se inicializa una variable i con valor de 0, mientras la longitud de la variable sea mayor a 0, el valor de i se incrementará a 1
for (let i = 0; i < list.length; i++) {
  // aquí se lista el numero de valor que contiene la variable list, por cada iteración de la función for.
  console.log(list[i])
}
```

### For of
Es una forma de iterar elementos array, strings, los cuales se pueden ocupar como listas

Estructura:
```
por (variable de objeto) {
  código
}
```

Ejemplo:
```javascript
let canasta = ["manzana", "pera", "naranja", "uva"]

for (fruta of canasta) {
  console.log(fruta)
}
```

### For in
Lo ocupamos para iterar objetos enumerables, una estructura de datos que consta de dos cosas: propiedades = valor

Estructura:
```
por (variable in objeto) {
  código
}
```

Ejemplo:
```javascript
const listaDeCompras = {
  manzana: 5,
  pera: 3,
  naranja: 2,
  uva: 1
}

for (fruta in listaDeCompras) {
  console.log(fruta);
}
// manzana
// pera
// naranja
// uva


for (fruta in listaDeCompras) {
  console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}
// manzana: 5
// pera : 3
// naranja: 2
// uva: 1

for (fruta of listaDeCompras) {
  console.log(fruta)
}

// error:
// Uncaught TypeError:
// listaDeCompras is not iterable
```

### While
Crea un bucle que se ejecuta hasta que una condición cambie. Aquí la condición se evalúa antes de ejecutar el código.

Estructura:
```
mientras (condición) {
    código
}
```

Ejemplo:
```javascript
let contador = 0

while (contador < 10) {
  console.log(contador)
  contador++
}

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
```

### Do while
Similar a while pero aquí se ejecuta el código antes de validar la condición

Estructura:
```
hacer {
  código
} mientras (condición)
```

Ejemplo:
```javascript
do {
  console.log(contador)
  contador++
} while (contador < 10)
```