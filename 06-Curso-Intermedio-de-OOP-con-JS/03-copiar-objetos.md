# Como copiar objetos en JS

## Como funciona la memoria en JS

Los objetos son referencias a espacio en memoria, y para demostrarlo tenemos el siguiente ejemplo:

```javascript
const juanita = {
  age: 15,
  email: "juanita@gmail.com",
}
const nath = juanita;
console.log({ juanita, nath })
// output:
// {
//   juanita: { age: 15, email: 'juanita@gmail.com' },
//   nath: { age: 15, email: 'juanita@gmail.com' }
// }
```

En este ejemplo hemos copiado las propiedades del objeto _**juanita**_ en el objeto _**nath**_, pero si decidieramos cambiar los valores de las propiedades copiadas en nath, sucedería lo siguiente:

```javascript
nath.email = 'nath@gmail.com'
nath.age = 20

console.log({ juanita, nath })
// output:
// {
//   juanita: { age: 20, email: 'nath@gmail.com' },
//   nath: { age: 20, email: 'nath@gmail.com' }
// }
```

Vemos que los valores de las propiedades de los dos objetos han cambiando, esto es porque lo que hicimos al asignarle las propiedades de _**juanita**_ a _**nath**_ lo que hicimos fue asignarle la misma dirección de memoria en la que están almacenadas esas propiedades.

![pointer](./assets/Screenshot%202025-01-31%20131207.png)

Cuando copiamos un objeto de esta manera lo que estamos copiando es la referencia del espacio en memoria que ocupan las propiedades y no las propiedades en si mismas.

Cuando creamos variables en javascript o cualquier otro lenguaje de programacion, estamos haciendo dos cosas, inicializar la variable, que esto simplemente es darle un nombre, y asignarle un valor, por dentro es decirle a js que esa variable va a apuntar a un espacio en memoria en donde esta almacenado ese valor.

Entonces no tenoms un solo valor almacenado en memoria, tenemos dos, la variable en si misma, es decir el nombre de la variable, y el valor que almacena esa variable, ya que no se almacenan juntas.

Todos los nombres y valores de las variables se guardan en la memoria del navegador llamada _**stack**_, JS tiene reservado un espacio para los nombres y otro espacio reservado para los valores, pero aunque JS separe de esta manera los nombres  y valores, siguen estando dentro de la misma memoria stack, excepto cuando se trata de objetos.

Cuando guardamos un objeto en una variable, lo que estamos haciendo no es guardar el objeto en sí, sino un _**apuntador**_ (_**pointer**_) en la memoria stack que apunta al lugar donde esta guardado nuestro objeto, que es otra memoria denominada _**heap**_.

Aquí tenemos las diferencias que radican entre estos dos tipos de memoria (cortesía de github copilot):

![heap-n-stack](./assets/Screenshot%202025-01-31%20140718.png)

### Memoria Stack

- Es una memoria de acceso rápido y tamaño limitado.
- Se utiliza para almacenar datos primitivos (números, cadenas, booleanos, etc.) y referencias a objetos.
- Los datos en la stack se almacenan y recuperan en un orden LIFO (Last In, First Out)
- La gestión de la memoria en la stack es automática y se libera cuando las funciones terminan su ejecución.

### Memoria Heap

- Es una memoria de acceso más lento pero de tamaño mucho mayor.
- Se utiliza para almacenar objetos y funciones.
- Los datos en la Heap no siguen un orden específico.
- La gestión de la memoria en la heap es más compleja y se realiza mediante un proceso de recolección de basura (garbage collection) que libera la memoria no utilizada.

En resumen, la stack es utilizada para datos de tamaño fijo y de vida corta, mientras que la heap es utilizada para datos de tamaño variable y de vida más larga.

### Shallow copy y Deep copy en JS

```javascript
// objeto 1: dos propiedades
const obj1 = {
  a: "a",
  b: "b",
}

//Objeto 2: vacío
const obj2 = {}

// Ciclo for para copiar las propiedades
for (prop in obj1) {
  obj2[prop] = obj1[prop];
}

console.log({ obj1, obj2 });
// output:
// { obj1: { a: 'a', b: 'b' }, obj2: { a: 'a', b: 'b' } }

obj2.a = "AAAAAAAAA";

console.log({ obj1, obj2 })
// output:
// { obj1: { a: 'a', b: 'b' }, obj2: { a: 'AAAAAAAAA', b: 'b' } }

obj1.b = "BBBBBBBBB"

console.log({ obj1, obj2 })
// output:
// { obj1: { a: 'a', b: 'BBBBBBBBB' }, obj2: { a: 'AAAAAAAAA', b: 'b' } }
```

En el código anterior, podemos observar cómo podemos copiar las propiedades de un objeto y modificarlas sin que se modifque la original. Pero hay un problema, esto funciona con propiedades sencillas, si una de las propiedades del _**objeto 1**_ contiene otro objeto, esto no funciona.

```javascript
const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  }
}

const obj2 = {}
for (prop in obj1) {
  obj2[prop] = obj1[prop];
}

console.log({ obj1, obj2 })
// output:
// {
//   obj1: { a: 'a', b: 'b', c: { d: 'd', e: 'e' } },
//   obj2: { a: 'a', b: 'b', c: { d: 'd', e: 'e' } }
// }

obj2.a = "AAAAAAAAA";

obj1.b = "BBBBBBBBB"

obj2.c.d = "DDDDDDDDD"

obj1.c.e = "EEEEEEEEE"

console.log({ obj1, obj2 })
// output:
// {
//   obj1: { a: 'a', b: 'BBBBBBBBB', c: { d: 'DDDDDDDDD', e: 'EEEEEEEEE' } },
//   obj2: { a: 'AAAAAAAAA', b: 'b', c: { d: 'DDDDDDDDD', e: 'EEEEEEEEE' } }
// }
```

En este nuevo código hemos agregado una propiedad _**c**_ al objeto 1, la cual tiene como valor otro objeto, al ejecutar nuestro ciclo for vemos que los copia perfectamente, pero al modificar un atributo en ese nuevo objeto vemos que lo modifica en el objeto.

Con el método del super Objeto `Object.assign()` sucede lo mismo:

```javascript
const obj3 = Object.assign({}, obj1) // lo mismo que arriba
obj3.c.d = "Copia desde objeto 1"
console.log(obj1, obj3)
// output:
// { a: 'a', b: 'b', c: { d: 'Copia desde objeto 1', e: 'e' } } { a: 'a', b: 'b', c: { d: 'Copia desde objeto 1', e: 'e' } }
```

Existe otro método que crea por su cuenta un objeto a partir de darle por parámetro otro objeto del cual queremos copiar sus propiedades:

```javascript
const obj4 = Object.create(obj1)
console.log(obj4)
// output:
// {}
```

Aqu vemos que el objeto aparece vacío pero en realidad no lo esta, si vemos la variable dentro de nuestra consola del navegador podemos ver que las propiedades fueron clonadas en el prototype del objeto:

![object.create](./assets/Screenshot%202025-01-31%20162812.png)

Pero funciona igual que el ciclo for 😢

## JSON.parse y JSON.stringify

JSON.stringify es un método estatico del prototipo JSON que nos permite convertir objetos en strings:

```javascript
const stringifiedComplexObject = JSON.stringify(obj1)
console.log(stringifiedComplexObject)
// output:
// {"a":"a","b":"b","c":{"d":"d","e":"e"}}
const obj2 = JSON.parse(stringifiedComplexObject)
console.log(stringifiedComplexObject)
// output:
// const obj2 = JSON.parse(stringifiedComplexObject)
console.log(obj2)
// output:
// { a: 'a', b: 'b', c: { d: 'd', e: 'e' } }
```

Con estos dos métodos podemos hacer la copia de cualquier objeto y modificar la copia sin afectar el original, incluso si tiene más objetos anidados, pero estos métodos no son infalibles, ya que esto no funciona si el objeto contiene métodos

