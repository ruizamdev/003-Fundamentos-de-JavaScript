# Introducción
## Historia de JavaScript
### Historia de la Web hasta la creación de Javascript
- 1950 - Revolución Tecnológica
- 1969 - ARPAnet
- 1970 a 1990 - Exploración y expansión de ARPAnet (Internet)
- 1991 - Creación de la WWW a manos de Tim Berners-Lee
- 1993 - Nacimiento de Mosaic Browser
- 1994 - Creación de Netscape
- 1995 - JavaScript (Mocha/LiveScript)

### Inicios de JavaScript

#### Creación
JS fue creado en 1995 por Brendan Eich en 10 días mientras trabajaba en Netscape Communications Corporation. Inicialmente, se llamó **Mocha** y luego **LiveScript**, pero fue renombrado a **JavaScript** como una estrategia de marketing para asociarlo con el entonces nuevo y popular Java.

#### Proposito Inicial
Fue diseñado como un lenguaje de scripting ligero para agregar interactividad a las páginas web, dirigido a desarrolladores principiantes.

#### Lanzamiento en Netscape Navigator 2.0 (1995)
JS debutó como parte de este navegador, uno de los navegadores lideres en ese momento.

#### ECMA y estandarización
Debido a las denominadas *"Browser Wars"*, en las que se estaba librando la batalla por ver quien tenia el mejor navegador de la web, Microsoft desarrollo su propio lenguaje haciendo ingeniería inversa a JS, creando JScript para su propio navegador Internet Explorer.  
Debido a esto Netscape decidió someter JavaScript a un proceso de estandarización par aevitar fragmentación entre navegadores. La **European Computer Manufacturers Association** (ECMA), un organismo internacional de estándares, tomó la responsabilidad.

La primera versión del estándar de JavaScript se publicó en 1997 con el nombre de ECMA-262, estableciendo la base del lenguaje para garantizar la interoperatividad entre navegadores.

A día de hoy ECMAScript es la especificación oficial sobre la que se basa JavaScript. Desde 1997 se han lanzado múltiples ediciones de ECMAScript.

## TC39
Es el comité técnico responsable del desarrollo y la evolución de JS. Se refiere a **"Technical Committee 39"** y opera bajo ECMA. Se encarga de la especificación ECMAScript, estándar oficial de JS.

TC39 es el comité técnico responsable del desarrollo y la evolución del lenguaje de programación JavaScript. Su nombre completo es "Technical Committee 39" y opera bajo la **European Computer Manufacturers Association (ECMA)**. TC39 se encarga de la especificación ECMAScript, que es el estándar oficial de JavaScript.

El comité está compuesto por representantes de varias empresas tecnológicas, incluyendo navegadores, motores de JavaScript y otras organizaciones interesadas en el desarrollo del lenguaje. TC39 se reúne regularmente para discutir propuestas de nuevas características, mejoras y correcciones para el lenguaje, y para avanzar en la especificación ECMAScript.

Las propuestas pasan por varias etapas de revisión y discusión antes de ser aceptadas e incorporadas en una nueva versión del estándar. Esto asegura que las nuevas características sean bien pensadas, discutidas y probadas antes de ser adoptadas oficialmente.

## Versiones de ECMA-262

Version | Nombre oficial | Descripcion
:---: | :---: | :---:
ES1 | ECMAScript 1 (1997) | Primera edición
ES2 | ECMAScript 2 (1998) | Cambios editoriales
ES3 | ECMAScript 3 (1999) | Se agregaron expresiones regulares <br> se agregó try/catch <br> se agregó switch <br> se agrego do-while
ES4 | ECMAScript 4 () | Nunca se lanzó
ES5 | ECMAScript 5 (2009) | Se agrego 'strict mode' <br> se agrego soporte JSON <br> se agrego string.trim() <br> se agrego Array.isArray() <br> se agregaron metodos de iteracion en arrays <br> se agrego el uso de comas inversas para objetos literales (object literals)
ES6 | ECMAScript 2015 | Se agregaron let y const <br> Se agregaron valores por defecto en los parametros <br> Se agrego Array.find() <br> se agrego array.findIndex()
| | ECMAScript 2016 | Se agrego el operador exponente (**) <br> se agrego Array.includes()
| | ECMAScript 2017 | Se agrego el string padding <br> se agrego Object.entries() <br> se agrego Object.values() <br> se agregaron las funciones async <br> se agrego la memoria compartida <br> Se permiten las comas inversas para los parametros  de la funciones
| | ECMAScript 2018 | Se agrego la propiedad rest/spread <br> se agrego la iteracion asincrona <br> se agrego Promise.finally() <br> se sumó a RegExp
| | ECMAScript 2019 | se agregó String.trimStart() <br> se agregó String.trimEnd() <br> se agregó Array.flat() <br> se agregó Object.fromEntries <br> enlace catch opcional
| | ECMAScript 2020 | Se agrego el operador Nullish Coalescing (??)
| | ECMAScript 2021 | se agregó Promise.any() <br> se agrego string replaceAll() <br> se agregó Numeric separators (_)
| | ECMAScript 2022 | se agregó Array at() <br> String at() <br> RegExp /d <br> Object.hasOwn() <br> error.cause <br> await import <br> class field declarations <br> private methods and fields.
| | ECMAScript 2023 | Se agregó Array findLast() <br> Array findLastIndex() <br> Array.toReversed() <br> Array toSorted() <br> Array toSpliced() <br> Array with() <br> #!(shebang)
| | ECMAScript 2024 | se agregó Object.groupBy() <br> Map.groupBy() <br> Temporal.PlainDate() <br> Temporal.PlainTime() <br> Temporal.PlainMonthDay() <br> Temporal.PlainYearMonth()

Hasta ahora de 2021 en adelante se recomiendo trabajar con cuidado las nuevas caracteristicas, revisar si en todos los navegadores o la mayoria ya son compatibles.