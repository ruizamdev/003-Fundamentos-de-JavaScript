# Callbacks

## Que son los callbacks

Son funciones que se pasan como parametros en otras funciones

```javascript
function sum(num1, num2) {
  return num1 + num2;
};

function calc(num1, num2, callback) {
  return callback(num1, num2)
}

console.log(calc(2, 2, sum))

// output: 4
```

Ejercicio:

```javascript
export function execCallback(callback) {
  // Tu código aquí 👈
  window.setTimeout(callback, 2000)
}

function space() {
  console.log("Hola despues de 2 segundos!")
}
```

## XMLHTTPRequest

