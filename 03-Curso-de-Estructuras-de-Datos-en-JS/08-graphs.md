# Graphs

Los grafos son un conjunto de nodos interconectados, las partes más importantes de un grafo son, los vértices, que no son otra cosa más que los nodos, y el borde, que son los pointers o ligaduras que las intercontectan.

![graphs](./assets/Screenshot%202025-02-04%20075909.png)

**Graphs dirigidos y no dirigidos**

También existen dos categorías dentro de los grafos que las diferencían, los gfaros dirigidos y no dirigidos. Esta distinción se refiere a que los bordes que interconectan los vértices tienen una dirección fija que solo se puede recorrer en un solo sentido, mientras que las no dirigdas se puede ir en ambos.

![dirigidos](./assets/Screenshot%202025-02-04%20080259.png)

**Graphs ponderados y no ponderados**

Otra división por categoría serían los grafos ponderados y no ponderados, esto se refiere a que los bordes contienen un valor, ese valor se refiere al _"costo"_ de recorrer la _"distancia"_ que hay entre los vértices que ese borde une.

![ponderados](./assets/Screenshot%202025-02-04%20080500.png)

**Graphs cíclicos y acíclicos**

En etos grafos puedo recorrer los vértices desde cualquier punto del grafo.

![ciclicos](./assets/Screenshot%202025-02-04%20081411.png)

**Ejercicio**

![ejercicio](./assets/Screenshot%202025-02-04%20081518.png)

## Representando grafos en código
 
  2 - 0  
 / \  
1 - 3  

**Edge List**

```javascript
const graph = [
  [0,2],
  [2,3],
  [2,1],
  [1,3],
]
```

**Adjacent List**

```javascript
              // 0     1       2       3
const graph2 = [[2], [2,3], [0,1,3], [1,2]];

const graph3 = {
  0: [2],
  1: [2,3],
  2: [0,1,3],
  3: [1,2],
}
```

**Adjacent Matrix**

```javascript
const graph4 = [
  [0,0,1,0]
  [0,0,1,1]
  [1,1,0,1]
  [0,1,1,0]
];

const graph5 = {
  0: [0,0,1,0],
  1: [0,0,1,1],
  2: [1,1,0,1],
  3: [0,1,1,0],
}
```

## Construyendo un grafo

```javascript
class Graph {
  constructor(){
    this.nodes = 0;
    this.adjacentList = {};
  }
  addVertex(node){
    this.adjacentList[node] = [];
    this.nodes++;
  }
  addEdge(node1, node2){
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

const myGraph = new Graph();
myGraph.addVertex("1");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addVertex("8");

myGraph.addEdge("3","5");
myGraph.addEdge("6","3");
myGraph.addEdge("1","6");
myGraph.addEdge("1","3");
myGraph.addEdge("1","4");
myGraph.addEdge("4","5");
myGraph.addEdge("8","4");
```