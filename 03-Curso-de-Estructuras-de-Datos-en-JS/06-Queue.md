# Queues

Son similares a los stacks pero tienen un comportamiento diferente

FIFO = First In, First Out

El primero en llegar es el primero en salir

**Métodos**:

Método | Acción
:---: | :---:
enqueue | Agrega un elemento al final de la línea
dequeue | Remover al primer elemento de la línea
peek | tomar el primer elemento de la línea

## Construyendo un Queue

```javascript
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek(){
    return this.first;
  }
  enqueue(value){
    const newNode = new Node(value);
    if(this.length === 0){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue(){};
}

const myQueue = new Queue();
```