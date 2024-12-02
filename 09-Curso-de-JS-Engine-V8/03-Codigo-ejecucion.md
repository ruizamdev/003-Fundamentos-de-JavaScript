# Código de Ejecución
### Single Thread
Cuando hablamos de código de ejecución hablamos del comportamiento síncrono de JS, lo que quiere decir que es capaz de ejecutar una sola instrucción a la vez.

### Memory Heap
Los valores de las variables y las funciones son almacenadas de manera desordenada en un lugar denominado Memory heap.

### Call Stack
Es una pila de tareas, en donde se llaman y colocan las tareas para ser ejecutadas una por una, a esto es a lo que se le llama sincronía. La pila comienza con el Objeto Global (window), y después las tareas llamadas.

### Garbage Collection
Es la acción de eliminar de la memoria los valores de las variables y funciones que ya no estamos utilizando.

### Stack Overflow
Es cuando las tareas apiladas en el Call Stack es mayor a lo que puede manejar. Cuando esto sucede, puede detener la ejecución y mandar un error, o simplemente crashear y cerrar el navegador.

### JavaScript Runtime
Es el denominado Tiempo de Ejecución, es un proceso que permite a JavaScript comportarse de manera asíncrona.
Per antes de entender este proceso debemos entender que son las web APIs. 

### API 
Estas son interfaces de programación de aplicaciones que permiten la intercomunicación entre programas, el navegador contiene muchas de estas APIs que no son de mucha utilidad.  
En la consola del navegador, podemos obtener todas las APIs que nos brinda llamando a la variable `this`

### Proceso de Asincronía.
- Cuando JS determina que una función llama a una web API del navegador, delega la ejecución en tiempo paralelo de ésta al navegador, para liberar el call stack y seguir ejecutando las funciones propias del código.
- Al terminar de ejecutar la función, el navegador la coloca en un Callback Queue
- Un *"watcher"* denominado Event Loop, esta constantemente preguntando al Call Stack si ha terminado con la ejecución de sus tareas, cuando hay espacio, toma las funciones de Callback Queue y las pasa al Call Stack.