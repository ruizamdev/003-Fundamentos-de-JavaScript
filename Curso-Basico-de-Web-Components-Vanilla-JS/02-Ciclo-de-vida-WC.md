# Ciclo de vida de los Web Components.
Como va a coexistir con el DOM
Ligados al DOM

1. `Constructor()`  
    Critical Rendering Path, se guarda en memoria que es lo que tiene el constructor.

2. `connectedCallback()`
    El elemento o componente se da de alta en el dom y es un nodo de este.

3. `disconnectedCallback()`
     Es dar de baja el componente para liberar memoria

3.5. `attributChangedCallback()`
    Es la forma en la cual veremos los atributos y hacer cambios en el componente

4. `adoptedCallback()`
    Cuando se utiliza un componente dentro de tags como iframe. (muy raro de utilizar)


> Ya no se ocupa un iframe.

