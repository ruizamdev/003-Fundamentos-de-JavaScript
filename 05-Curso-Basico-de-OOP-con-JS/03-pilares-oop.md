# Los 4 pilares de la Programación Orientada a Objetos

## Abstracción

La abstracción es la tarea de interpretar las caracteristicas y funcionalidades de un objeto de la vida real en código para poder programar a partir de esos objetos.

```javascript
class Class {
  constructor ( {
    name,
  } ) {
    this.name = name;
  }
}

class Course {
  constructor ( {
    name,
  } ) {
    this.name = name;
  }
} 
class LearningPath {
  constructor ( {
    name,
    courses = [],
  } ) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath ( {
  name: "Escuela de Desarrollo Web",
  courses: [
    "Curos de Frontend Developer",
    "Curso Práctico de Frontend Developer",
    "Curso Definitivo de HTML y CSS",
    "Curso Practico de HTML y CSS"
  ]
} )

const escuelaJs = new LearningPath ( {
  name: "Fundamentos de JavaScript",
  courses: [
    "Fundamentos de Javascript",
    "Closure y Scope con Javascript",
    "Estructuras de datos con Javascript",
    "Manipulación de Arrays en Javascript",
    "Curso Basico de Programación Orientada a Objetos"
  ]
} )

const escuelaFrontendJs = new LearningPath ( {
  name: "Frontend con Javascript",
  courses: [
    "Manipulación del DOM",
    "API REST",
    "Web Components",
    "Debugging con Chrome DevTools",
    "Testing con Javascript"
  ]
} )

const cursoProgBasica = new Course ( {
  name: "Curso Gratis de Programación Básica",
} )

const cursoFrontendDev = new Course ( {
  name: "Curos de Frontend Developer",
} )

const cursoPracticoFrontendDev = new Course ( {
  name: "Curso Práctico de Frontend Developer",
} )

```

## Encapsulamiento

Es limitar el acceso de ciertos atributos y propiedades en prototipos y objetos.

- Esconder metodos y atributos
- No permitir la alteración de métodos y atributos.

### Encapsular en JS

- Getters y setters
- Namespaces
- Object.defineProperties
- Módulos de ES6

#### Getter y Setters

Normalmente en los lenguajes de programación se declara una función o método como público o privado con las palabras reservadas public y private respectivamente.
Aquí tenemos un ejemplo con java:

```java
public class Person {
    private String name;
   &nbsp;
    public void setName(String name) {
        this.name = name;
    }
   &nbsp;
    public String getName() {
        return name;
    }
}
```

En javascript es diferente, en vez de palabras reservadas, se utiliza un underscore o guión bajo en el nombre del método o función:

```javascript
class Course {
  constructor ( {
    name,
    classes = [],
  } ) {
    this._name = name;
    this.classes = classes;
  }
}
```

Despues podemos agregar los getter and setters

```javascript
class Course {
  constructor ( {
    name,
    classes = [],
  } ) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this._name = name;
  }

  set name ( nuevoNombre ) {
    if ( nuevoNombre === "Curso malito de Programación Básica" ) {
      console.error ( "No es posible asignar este nombre" )
    } else {
      this._name = nuevoNombre;
    }
  }
}
```

### Módulos de ECMAScript 6

Para trabajar con módulos debemos agregarle el atributo type al fichero enlazado en el html, y cambiar su extensión, de `.js` a `.mjs`. Adicional a eso debemos de utilizar las palabras reservadas `import` y `export` según sea el caso.
Aquí tenemos el ejemplo:

```html
<body>
  <h1>Programacion Orientada a Objetos</h1>
  <script type="module" src="./module.mjs"></script>
</body>
```

Fichero `module.mjs`:

```javascript
import { PlatziClass } from "./main.mjs"

const clase69 = new PlatziClass ( {
  name: "Javascript orientado a objetos",
  videoID: "20394823095724"
} )

clase69.reproducir();
clase69.pausar();
```

```javascript
function videoPlay ( id ) {
  const urlSecreta  = "https://platzi-secreto.com/" + id;
  console.log ( "Se esta reproduciendo desde la url " + urlSecreta )
}

function videoStop ( id ) {
  const urlSecreta  = "https://platzi-secreto.com/" + id;
  console.log ( "Se pausó el video desde la url " + urlSecreta )
}

export class PlatziClasss {
  constructor ({
    name,
    videoID,
  }) {
    this.name = name;
    this.videoID = videoID;
  }
  reproducir () {
    videoPlay ( this.videoID );
  }
  pausar () {
    videoStop ( this.videoID )
  }
}
```

## Herencia

La herencia nos permite crear clases "madre" o super prototipos, las cuales heredaran sus atributos y métodos a otras clases creadas a partir de ellas. Para crear herencia se debe utilizar la palabra reservada `extends`.

```javascript
class Student () {
  constructor ( name ) {
    this.name = name;
  }
}

class FreeStudent extends Student {}
```

### Herencia en javascript

Para extender satisfactoriamente las propiedades de una clase madre, es necesario usar el método `super()` en la subclase

```javascript
class FreeStudent extends Student {
  constructor ( props ) {
    super( props ); // super nos permite referenciar o llamar al constructor del prototipo madre
  }
  approveCourse ( newCourse ) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos, " + this.name "solo puedes tomar cursos gratis")
    }
  }
}

class BasicStudent extends Student {
  constructor ( props ) {
    super( props ); // super nos permite referenciar o llamar al constructor del prototipo madre
  }
  approveCourse ( newCourse ) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos, " + this.name "no puedes tomar cursos de inglés")
    }
  }
}

class ExpertStudent extends Student {
  constructor ( props ) {
    super( props ); // super nos permite referenciar o llamar al constructor del prototipo madre
  }
  approveCourse ( newCourse ) {
    this.approvedCourses.push(newCourse);
  }
}
```

## Polimorfismo
