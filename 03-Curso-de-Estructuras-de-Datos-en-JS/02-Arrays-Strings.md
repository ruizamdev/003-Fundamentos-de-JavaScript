# Arrays y Strings

## Arrays

Array o lista, es una colección de información o datos, que podemos utilizar o modificar. En JS los arrays son dinámicos y existen métodos para poder manipularlos.

Existen dos tipos de arrays: Estáticos y Dinámicos. Con los estáticos se asigna una sola vez el espacio en memoria a utilizar, imposible de modificar después.

Con los dinámicos es posible asignar mas espacio en memoria del requerido en un principio, y es posible borrar y reescribir.

### Construyendo un Array

```javascript
const array = [ "Armando", "Hilda", "Irina" ]
console.log(array)
array.push("Joaquin")
console.log(array)
```

### Replicando Métodos comunes en JS

#### Métodos get y push

```javascript
class MyArray {
  constructor () {
    this.length = 0;
    this.data = {};
  };
  get (index) {
    return this.data[index];
  };
  push (item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
};

const myArray = new MyArray();
```

### Eliminando elementos del Array

#### pop()

```javascript
pop () {
    const lastItem = this.data[this.length - 1];
  }
```

Código completo:

```javascript
class MyArray {
  constructor () {
    this.length = 0;
    this.data = {};
  };
  get (index) {
    return this.data[index];
  };
  push (item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  };
  pop () {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  };
  delete (index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex (index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
};

const myArray = new MyArray();
```

## Strings

Los strings son inmutables. No podemos manipularlos una vez creados, debido al computo que se necesita para encontrar nuevos slots en memoria y migrar toda la información a esos slots.
