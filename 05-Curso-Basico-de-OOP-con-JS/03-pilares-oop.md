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
