# JavaScript Engine
## Como funciona JS Engine

Cuando queremos ejecutar un fichero de JS no lo podemos hacer directamente en la computadora, porque no lo va a entender, es necesario traducir ese código a un lenguaje entendible para la maquina, para eso nos sirve el JS engine, a este proceso se le llama ***Just in time Compiler*** (JIT Compiler).

```
Fichero JS --> JS Engine --> Código Maquina --> CPU
```

## Como funciona V8 y el navegador
V8 es el motor de JS de Chrome, creado por google. Fue creado en 2008 para agilizar la navegación en la, por ese entonces, nueva aplicación web **Google Maps**, a la par del mismísimo navegador **Google Chrome**.

### Global Environment
Una vez que el fichero JS es leído por el JS engine, se crea un entorno global el cual es un objeto principal, también conocido como `Window`, el cual es la ventana del navegador.  
Además de esto, también se crean otras dos cosas importantes, genera una variable nombrada `this`, esta variable hace referencia al objeto global window.  
Por último se crea un `Contexto de ejecución` que es donde se va a ejecutar nuestro código, a través del denominado `Call Stack`

Una vez que se esta interactuando con el JSE:
- Genera un parseo (parser) del fichero JS
- AST (Abstract syntax Tree)
- Interpreter
  - Profiler (Monitor)
  - Compiler (Hoisting)
  - Optimized Code (JS)
- ByteCode
