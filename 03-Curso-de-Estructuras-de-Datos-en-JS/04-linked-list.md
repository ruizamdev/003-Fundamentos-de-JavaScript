# Linked List

## Anatomía de una linked list

![linked-list](./assets/linked-list.png)

Tenemos un nodo principal que se convierte en el _**head**_, tenemos los nodos centrales y el último que es el _**tail**_; las flechas indican el enlace que liga todos los nodos denominadas pointers.

Existen dos tipos de linked list pero ahora solo vamos a ver solo una.

### Singly linked list

Método | Acción 
---------|----------
 prepend | agrega un nodo al principio
 append | agrega un nodo al final
 lookup / search | busca un nodo
 insert | inserta un nodo en medio de la lista
 delete | borra un nodo

#### Anatomía de una Singly Linked List

![singly-link-list](./assets/singly-linked-list.png)

Como podemos ver, tenemos el _**head**_ y por debajo de el una variable que contiene el siguiente valor, para obtener un nodo, necesitamos no podemos hacerlo mediante keys, debemos de iterar desde el head y avanzar hasta encontrar el elemento que buscamos. si queremos regresar debemos iterar desde el principio.

## Construyendo una Singly Linked List

### Como se guardan las linked list en memoria

![linked-list-ram](./assets/Screenshot%202025-01-29%20175302.png)

En la imagen vemos los nodos guardados en distintos espacios de memoria no consecutivos, la memoria no conoce las direcciones de los nodos mas que la de el head, Tienen que recorrer todos los nodos para accesar a cualquier nodo que este en medio de head y tail.


## Agrgando nodos a la lista

```javascript
class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail =  this.head;

    this.length = 1;
  }
  append(value){
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
}

let myLinkedList = new MySinglyLinkedList(1);
console.log(myLinkedList);
myLinkedList.append(2);
console.log(myLinkedList);
myLinkedList.append(3);
console.log(myLinkedList);
myLinkedList.prepend(0);
console.log(myLinkedList)
```

## Agregar nodos intermedios

Veremos una forma de agregar nodos entre el head y el tail

```javascript
class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail =  this.head;

    this.length = 1;
  }
  append(value){
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insert(index, value){
    if(index >= this.length) {
      return this.append(value)
    }
    const newNode = nes Node(value);
    const firstPointer = this.getTheIndex(index - 1)
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;
    return this;
  }
  getTheIndex(index){
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index){
      cunrrentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}
```

## Doubly linked list

Estas listas es posible iterar tanto de la cabeza a la cola como de la cola a la cabeza para buscar un dato

![doubly](./assets/Screenshot%202025-01-31%20195907.png)

```javascript

```