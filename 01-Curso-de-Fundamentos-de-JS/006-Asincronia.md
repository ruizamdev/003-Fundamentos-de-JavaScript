# Asincronía en JavaScript
Para entender como funcionan, la programación síncrona y asíncrona, primero debemos entender como funciona JS Engine en el navegador.

## JavaScript Engine
Lo primero que debemos entender son los conceptos de **Memory heap** y **Call stack**.

- **Memory heap**: Aquí es donde se almacenarán de manera aleatoria todas las variables, funciones y objetos que creamos en JS.

- **Call stack**: Es la pila donde se van a empezar a llamar cada una de las funciones que debemos ejecutar en nuestro programa.

### Programación Síncrona
Esta forma de ejecutar un programa, es llamar a la primera función para ejecutarla e ir ejecutando conforme se vayan llamando las demás funciones, pero una tarea a la vez.  
JS suele funcionar de esta manera

- **Stack overflow**: Es cuando llevamos nuestro stack de tareas a un punto mas allá de lo permitido por la memoria para poder ejecutar las tareas.

### Programación Asíncrona
La programación asíncrona nos permite ejecutar varias funciones en simultaneo y, a pesar de que JS nativamente funciona de manera síncrona, es posible ejecutar funciones de manera asíncrona, gracias al navegador y ciertos factores muy importantes

- **Call stack**: esta el call stack, que ya vimos lo que es.
- **Web API**: es lo que nos permitirá que JS se comporte de manera asíncrona, aquí manda call stack las funciones a ser ejecutadas para poder procesarlas simultáneamente
- **Queue**: la cola en donde esperan las funciones para ser ejecutadas por call stack.

Para esto tendremos que utilizar un código llamado promesas, las cuales son async y await.


<br>

## Promesas en JS
Una promesa representa un valor que puede estar disponible ahora, en el futuro o nunca. Las promesas permiten escribir código asíncrono de manera más clara y manejable, evitando el *"callback hell"* (anidación excesiva de funciones de callback).

### Estados de una promesa
Una promesa puede estar en uno de los siguientes estados:

1. **Pending** (Pendiente): Estado inicial, la promesa aún no se ha resuelto ni rechazado.
2. **Fulfilled** (Cumplida): La operación asíncrona se completó con éxito y la promesa tiene un valor.
3. **Rejected** (Rechazada): La operación asíncrona falló y la promesa tiene una razón (error). 

Las promesas manejan dos tipos de callback:

1. ****
```javascript
promise()
pending
```