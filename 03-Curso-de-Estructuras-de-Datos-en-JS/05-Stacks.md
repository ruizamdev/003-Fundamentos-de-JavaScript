# Stacks

LIFO: Last In, First Out

Lo primero que entra es lo último en salir

**Métodos**:

Método | Acción
:---: | :---:
pop | Remover el último elemento
push | Agregar un elemento final
peek | tomar el último elemento de la línea

## Construyendo un Stack

```javascript
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek () {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if(this.length === 0){
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;

    return this;
  }

}

const myStack = new Stack();
```