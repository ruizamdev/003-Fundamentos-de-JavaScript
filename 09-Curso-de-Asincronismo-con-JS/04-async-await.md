# Async y Await

## Funciones asíncronas

```javascript
const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!!'), 2000)
      : reject(new Error('Error!'));
  })
}

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');
```

Output:

```javascript
Before
After
Async!!
Hello!
```

## Try and Catch

```javascript
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

const anotherFunction = async (urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const categories = await fetchData(`${urlApi}/categories/${product.category.id}`);

    console.log(products);
    console.log(product.title);
    console.log(category.name);
  } catch (error){
    console.error(error);
  }
}

anotherFunction(API);
```

## ¿Cómo enfrentar los errores?

### Técnica del patito de hule

Platica el problema con un amigo imaginario, real, inerte, ethereo, o simplemente despejate, haz lo que hizo Arquimedes de Siracusa al hacerle caso a su mujer, cuando no podia resolver un problema. Eureka! exclamó después de seder a los consejos de ella, y meterse a la tina para descansar, relajarse y despejar la mente.