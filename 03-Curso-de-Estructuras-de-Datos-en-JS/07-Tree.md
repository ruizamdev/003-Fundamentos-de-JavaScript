# Trees

## Anatomía de un Tree

![tree](./assets/Screenshot_2025-02-03-21-30-00-158_com.platzi.platzi.jpg)

### Binary trees (perfect binary tree)

![binary-tree](./assets/Screenshot_2025-02-03-21-34-08-186_com.platzi.platzi.jpg)

También se le conoce como tree balanceado.

### Binary search trees (balanced tree)

![binary-search-tree](./assets/Screenshot_2025-02-03-21-36-51-386_com.platzi.platzi.jpg)

### Unbalanced Tree

![unbalanced-tree](./assets/Screenshot_2025-02-03-21-41-24-582_com.platzi.platzi.jpg)

**Métodos**:

Método | Acción
:---: | :---:
search | Buscar por un nodo
insert | Insertar un nodo
delete | Borrar un nodo

## Construyendo un Binary search tree

```javascript
class Node {
  constructor(value){
    this.left = null;
    this.rght = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if (this.root === null){
      this.root = newNode;
    } else {
      let currentNode =  this.root;
      while(true){
        if(value < currentNode.value){
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
```