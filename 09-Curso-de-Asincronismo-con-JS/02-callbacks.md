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

```javascript
setTimeout(function() {
  console.log('Hola JavaScript!')
}, 5000)

function gretting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Armando')
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

```javascript
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = function(event){
    if(xhttp.readystate === 4) {
      if(xhttp.status === 200){
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error('Error' + urlApi);
        return callback(error, null);
      };
    };
  };
  xhttp.send();
};
```

## fetchData

```javascript
fetchData(`${API}/products`, function (error1, data1) {
  if(error1) return console.error(error1);
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    if(error2) return console.error(error2);
    fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    });
  });
});
```