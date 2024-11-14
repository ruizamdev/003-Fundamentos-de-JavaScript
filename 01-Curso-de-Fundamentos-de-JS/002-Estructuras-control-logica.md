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
flase | false | false

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
Si [condición] entonces [acción]:  
```
if (let === algo) {  
    código  
} else if {  
    código  
} else {  
    código  
}
```  
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
```
interruptor(expresión) {
  caso valor1:   <-- Si es true ejecuta el siguiente codigo, si no pasa al siguiente caso
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
let expresion = "papayas"
switch(expresion) {
  case "Naranjas":
    console.log("las naranjas cuestan $20 el kilo")
    break;
  case "Manzanas":
    console.log("Las manzanas cuestan $45 el kilo")
    break;
  case "Platanos":
    console.log("El platano cuesta $30 el kilo")
    break;
  case "Mangos":
  case "Papayas":
    console.log("Los mangos y papayas cuestan $24 el kilo")
    break;
  default:
    console.log(`Lo siento, no contamos con ${expresion}`);
}


```