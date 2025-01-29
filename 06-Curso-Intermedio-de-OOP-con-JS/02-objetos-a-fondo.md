# Profundicemos en los Objetos

## Static: Atributos y métodos estáticos en JS

Hemos aprendido que para acceder a los métodos o atributos de una clase o prototipo debemos crear una instancia de ese prototipo (objeto).

Pero hay una manera de acceder a esos métodos y atributos sin tener que crear una instancia. A esto se le conoce como _**Static**_ y no es un concepto solo de JS si no que se encuentra en casi todos los lenguajes que soportan la POO.

Para hacer uso de esta funcionalidad de la POO debemos colocar la palabra reservada `static` antes de nuestro atributo o método.

```javascript
class Dog {
  static sonido = "woof!";
}

console.log(Patito.sonido); // output woof!
```

```javascript
class Cat {
  static hacerSonido () {
    return "Meow!";
  }
}

console.log(Cat.hacerSonido())
```

Pero no veremos los usos que podemos darle nosotros si no que usos tiene para el prototipo padre **object**.

El método estático de los objetos `Object.keys(object)` y el método estático `Object.getOwnPropertyNames(object)` nos devuelve las claves (o atributos) que tiene el objeto que se le dió por argumento entre parentesis. Aunque existen algunas diferencias entre ellos la salida es practicamente la misma.

```javascript
const objeto = {
  name: "Armando",
  email: "ruiz7am@outlook.com",
  age: 35,
};

Object.keys(objeto) // output: ["name", "email", "age"]
Object.getOwnPropertyNames(objeto) // output: ["name", "email", "age"]
```

El método `Object.entries(object)` nos devuelve un array de arrays en donde nos mustra las entradas de atributos a la par de su valor.

```javascript
const objeto = {
  name: "Armando",
  email: "ruiz7am@outlook.com",
  age: 35,
};

Object.entries(objecto)
// [
//  0: ["name", "Armando"]
//  1: ["email", "ruiz7am@outlook.com"]
//  2: ["age", 35]
// ]
```

Pero existe un método en el super prototipo object y es la base de todo lo que haremos en este curso: `Object.getOwnPropertyDescriptors(object);`

```
{
  name: {
    value: 'Armando',
    writable: true,
    enumerable: true,
    configurable: true
  },
  email: {
    value: 'ruiz7am@outlook.com',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 35, writable: true, enumerable: true, configurable: true }
}
```

Esta es la forma que tiene JS dentro para limitar el acceso o modificación de nuestros atributos u objetos.

## Métodos estáticos del prototipo Object

```javascript
const Juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curos 1"],
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

// Acceso a atributos y métodos de manera normal

console.log(Juan.name) // output: Juanito

console.log(Juan.age) // output: 18

console.log(Juan.approvedCourses) // ["Curso 1"]

Juan.addCourse("Curso 2")

console.log(Juan.approvedCourses) // ['Curos 1', 'Curso 2']

// Acceso a atributos y métodos a través de måtodos estáticos del prototipo padre Object

console.log(Object.keys(Juan));
// ['name', 'age', 'approvedCourses', 'addCourse']

console.log(Object.getOwnPropertyNames(Juan));
// ['name', 'age', 'approvedCourses', 'addCourse']

console.log(Object.entries(Juan));
// [
//    ['name', 'Juanito']
//    ['age', 18]
//    ['approvedCourses', Array(2)]
//    ['addCourse', ƒ]
// ]

console.log(Object.entries(Juan)[3]) // output: ['addCourse', ƒ]

console.log(Object.entries(Juan)[3][0]) // output: addCourse

console.log(Object.entries(Juan)[3][1])
// ƒ addCourse(newCourse) {
//    this.approvedCourses.push(newCourse);
//  }

console.log(Object.entries(Juan)[3][1]('Curso 2')) 
// output: main.js:6 Uncaught TypeError: Cannot read properties of undefined (reading 'push')
//    at Array.addCourse (main.js:6:26)
//    at main.js:28:39
```

En la ultima sentencia `console.log(Object.entries(Juan)[3][1]('Curso 2'))` no nos es posible ejecutar el push al array debido al _**scope**_, utilizar el método entries cambia las reglas de ésto.

## Object.defineProperty

Para definir una nueva propiedad lo podemos hacer de la siguiente manera:

```javascript
const Juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curos 1"],
  addCourse(newCourse) {
    console.log('This', this);
    console.log('this.approvedCourses', this.approvedCourses)
    this.approvedCourses.push(newCourse);
  }
}

Object.defineProperty(Juan, "navigator", {
  value: "Chrome",
  writable: true,
  enumerable: false,
  configurable: true,
})

Object.defineProperty(Juan, "editor", {
  value: "VSCode",
  writable: false,
  enumerable: true,
  configurable: true,
})

Object.defineProperty(Juan, "terminal", {
  value: "WSL",
  writable: true,
  enumerable: true,
  configurable: false,
})

Object.defineProperty(Juan, "pruebaNasa", {
  value: "Extraterrestres",
  writable: false,
  enumerable: false,
  configurable: false,
})
```

En seguida iremos explicando para que sirve cada uno de los parámetros **writable**, **enumerable** y **configurable**

Si ejecutamos nuestro método `keys` al objeto `Juan`:

```javascript
Object.keys(Juan) 

// Output:
// ['name', 'age', 'approvedCourses', 'addCourse', 'editor', 'terminal']
// 0:"name"
// 1:"age"
// 2:"approvedCourses"
// 3:"addCourse"
// 4:"editor"
// 5:"terminal"
```

Vemos que las propiedades con el parámetro **enumerable** igual a false no son enumeradas: _navigator_ y _pruebaNasa_

Pero si aplicamos el método `getOwnPropertyNames`:

```javascript
console.log(Object.getOwnPropertyNames(Juan));

// output:
// ['name', 'age', 'approvedCourses', 'addCourse', 'navigator', 'editor', 'terminal', 'pruebaNasa']
// 0: "name"
// 1: "age"
// 2: "approvedCourses"
// 3: "addCourse"
// 4: "navigator"
// 5: "editor"
// 6: "terminal"
// 7: "pruebaNasa"
```
En la salida podemos ver que los **enumerable** false que declaramos si se muestran.
Y aquí está una pequña diferencia de los métodos `keys` y `getOwnPropertyNames`.

