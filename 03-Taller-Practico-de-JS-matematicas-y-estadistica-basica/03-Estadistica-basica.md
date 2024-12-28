# Estadistica Básica
## Promedio (Media)
```javascript
function calcularPromedio(lista){
    // sumar todos los elementos del array / cantidad de elementos
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    // function sumarTodosLosElementos() {
    
    // }

    // const sumaLista = lista.reduce(sumarTodosLosElementos);
    /* const sumaLista = lista.reduce(function sumarTodosLosElementos(){

    }); */

    function sumarTodosLosElementos(valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    }
const promedio = sumaLista / lista.length;
console.log(promedio);
return promedio;
    const sumaLista = lista.reduce(sumarTodosLosElementos);

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
    // lista.lengthconst promedio = sumaLista / lista.length;
console.log(promedio);
return promedio;
}
```
En arrow function:
```javascript
const sumarTodosLosElementos = (valorAcumulado, nuevoValor) => {
    return valorAcumulado + nuevoValor;
};
const sumaLista = lista.reduce(sumarTodosLosElementos)
```
En arrow function con return implicito:
```javascript
const sumarTodosLosElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;
const sumarLista = lista.reduce(sumarTodosLosElementos)
```
forma mas corta
```javascript
const sumaLista = lista.reduce((a,b) => a + b);
```
## Mediana

