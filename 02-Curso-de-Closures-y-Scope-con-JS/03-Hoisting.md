# Hoisting
A grandes rasgos es la elevación de variables. Empecemos por un ejemplo para ir desarticulando este concepto para entenderlo:

```javascript
// var nameOfDog; // undefined  // Al no encontrarse declarada la variable, hoisting la declara y le asigna el valor undefined 
console.log(nameOfDog);
var nameOfDog = 'Sirio';
// output:
// undefined
```
