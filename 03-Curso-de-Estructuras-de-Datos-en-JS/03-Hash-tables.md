# Hash Table

## Hash Tables
Los hash tables se pueden conocer de diferentes maneras dependiendo el lenguaje de programacion, por ejemplo, tenemos la siguiente tabla para comparar sus diferentes formas de nombrarlas:

Lenguaje | Nombre
:---: | :---:
JavaScript | Objetos
Python | Diccionarios
Java | Maps
Go | Maps
Ruby | Hashes

La anatomia de un hash table, es similar a la de un objeto, ya que utilizan la misma manera de almacenar la informacion:
En la que tenemos "keys" las cuales a su ves tienen "values"

```javascript
{
  "nombre": "Armando",
  "nacionalidad": "Mexicano"
}

```

La diferencia con los objetos es que las hash tables cuentan con una función especial denominada **"Hash function"** las cual nos permite mapear claves e indices dentro de la tabla. Esto permite una busqueda, inserción y eliminación más eficiente.

### ¿Cómo funciona?

- La clave pasa por la función hash, la función crea un hash que se ligara a la clave y a partir de aquí será siempre el mismo.
- La clave es almacenada en una dirección de memoria junto con su valor, el cual es denominada bucket.

En resumen un hash table es un objeto con un paso intermedio en el cual se crea un hash para poder mapear las claves en memoria y acceder más rapidamente a ellas.

### Metodos

Metodo | Accion
:---: | :---:
insert | insertar un elemento en la tabla
search | Buscar un elemento por key
delete | Borrar un elemento

### Colision de Hash table

Hasta ahora hemos visto las ventajas o difererncias de trabajar con las hash table, pero exite una desventaja que nos puede causar problemas a la hora de utilizarlas, las denominadas colisiones.

Las colisiones de hash table ocurren cuando dos claves obtienen un mismo hash. Esto ocasiona que dos elementos esten almacenados en un mismo bucket y no hay forma de evitar esto. Dependiendo de cuantos buckets libres tengamos es la forma en que va a regresar el hash para que se pueda guardar la información.

## Construyendo un Hash Table

La forma de acceder a los elementos que han colisionado es mediante el key, la forma en la que podemos tratar esta colisión se puede convertir en otra estructura de datos denominada _**Link List**_, que veremos más tarde.

Entremos al código para entender esto:

```javascript
class HashTable {
  constructor (size) {
    this.data = new Array(size);
  }
  
  hashMethod (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set (key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('Armando', 1989);
// output:
// (50) [empty × 29, Array(1), empty × 20]

myHashTable.set('Irina', 2020);
// output:
// [empty × 29, Array(1), empty × 12, Array(1), empty × 7]

myHashTable.set('Hilda', 1993);
//output:
// (50) [empty × 9, Array(1), empty × 19, Array(1), empty × 12, Array(1), empty × 7]
```

## Implementando el método Get

```javascript
class HashTable {
  constructor (size) {
    this.data = new Array(size);
  }
  
  hashMethod (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set (key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get (key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);
```
