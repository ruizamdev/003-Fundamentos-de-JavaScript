# Introducción a los Web Components.
## Que es un Web Component

>Ningún framework esta hecho para coexistir.

Tenemos que escoger bien un stack.

Arquitectura agnóstica, JavaScript Puro, sin frameworks ni librerías

JavaScript Vanilla.

LEGOS = WEB COMPONENTS => construidos con web api

Código reutilizable => En cualquier aplicación

web components únicas piezas de lego


**Web Components**: Son primitivos de bajo nivel que te permiten definir tus propios elementos HTML.
Utilizamos Web Standards para construirlos.

WEB APIs

- HTML template
- Custom Elements
- Shadow DOM
- ES Modules

### HTML Standard
```html
<header>header</header>
<aside>aside</aside>
<main>main</main>
<footer>footer</footer>
<nav> nav </nav>
<menu> menu </menu>
```

### Shadow DOM
Es una tecnología de la especificación de Web Components que permite encapsular el árbol DOM y el estilo CSS de un componente, evitando que se mezclen con el DOM y el CSS del documento principal. Esto permite crear componentes web reutilizables y módulares con estilos y comportamientos aislados.

tag `video`

tag `google.map`

### HTML Template

`template`
```html
<template></template>
```

**ES Modules**

## Beneficios de WC

- Reutilización
- Legibilidad
- Mantenibilidad
- Interoperabilidad
- Constancia

### Reutilización
Don't repeat yourself
(You only have to build it once)


### Legibilidad
HTML Semántico.

### Mantenibilidad
Cada uno de los componentes pueden ser escritos y probados de forma individual. Menos codigo mejor depuracion

### Interoperabilidad
Los frameworks y librerias no estan hechos para coexistir entre ellos. Web Components si.

### Consistencia
Gracias a la naturaleza reutilizable e interoperable de los Web Components ya no tendrás que crear los mismos componentes en diferentes frameworks o librerías.

### Estructura
Se quedan estructuras sera muy facil darle el feeling
