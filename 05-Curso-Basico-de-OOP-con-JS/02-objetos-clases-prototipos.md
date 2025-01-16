# Objetos, clases y prototipos

## Que es un objeto en JavaScript

Todos los lenguajes de programacion tienen tipos y estructuras de datos.

Array en JavaScript:

```javascript
const student_platziRank = [
  'Juan',
  'Juanita',
  'Nath',
  'Nora',
  'Luisa',
]
```

Array en PHP:

```php
$student_platzirank = [
  "Juan",
  "Juanita",
  "Nath",
  "Nora",
  "Luisa",
]
```

Array asociativo en PHP:

```php
$student_platzirank = [
  "Juan" => 110,
  "Juanita" => 300,
  "Nath" => 700,
  "Nora" => 150,
  "Luisa" => 0,
]
```

Array asociativo en Python:

```python
student_platzirank = {
  'Juan': 100,
  'Juanita': 300,
  'Nath': 700,
  'Nora': 150,
  'Luisa': 0,
}
```

Objeto Literal en JavaScript:

```javascript
const student_platzirank = {
  'Juan': 110,
  'Juanita': 300,
  'Nath': 700,
  'Nora': 150,
  'Luisa': 0
}
```

Los objetos literales no son lo mismo que los objetos de la OOP (de las instancias y clases)

### Objetos en lenguajes de programacion que admiten la OOP basada en clases

```php
class Student {
  public $name = 'Nombre';
  public $age = 18;
  public $points = 750;
}

$juanita = new Student;
```

```python
class Student:
    name = 'Nombre'
    age = 18
    points = 750

juanita = Student();
```

```javascript
function Student() {
  this.name = 'Nombre';
  this.age = 18;
  this.pints = 750;
}

const juanita = new Student();
```

## Objetos literales y Prototipos en JavaScript

### Objetos Literales

Esto es un objeto literal, heredan la propiedad `__proto__` del Prototipo Objetct

```javascript
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Practico de HTML y CSS",
  ],
  /* aprobarCurso: function () {

  } */
  aprobarCurso (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
};

// Hacer que natalia apruebe otro curso

natalia.cursosAprobados.push("Curso de Responsive Design");
```

### Prototipos

Esto sería un prototipo en javascript:

```javascript
function Student ( name, age, cursosAprobados ) {
  this.name = name
  this.age = age
  this.cursosAprobados = cursosAprobados
  /* this.aprobarcurso = function ( nuevocurso ) {
    this.cursosAprobados.push(nuevocurso)
  } */
  Student.prototype.aprobarCurso = function ( nuevoCurso ) {
    this.cursosAprobados.push(nuevoCurso)
  }
}

const juanita = new Student(
  "Juanita Alejandra",
  15,
  [
    "Curso de introducción a la producción de VideoJuegos",
    "Curso de creación de personajes"
  ]
)
```

## Clases en JavaScript

Sintaxis mas amigable para trabajar con prototipos, las clases por dentro son prototipos.

```javascript
class Teacher {
  constructor ( {
    name,
    age,
    cursosImpartidos = [],
    email,
    twitter,
    instagram,
    facebook,
  } ) {
    this.name = name
    this.age = age
    this.cursosImpartidos = cursosImpartidos
    this.email = email
    this.twitter = twitter
    this.instagram = instagram
    this.facebook = facebook
  }

  impartirNuevoCurso ( nuevoCurso ) {
    this.cursosImpartidos.push(nuevoCurso)
  }
}

const miguel = new Teacher ({
  name: "Miguel Angel",
  age: 34,
  email: "miguel.angel@gmail.com"
})
```

En este ejemplo se muestra el constructo RoRo (Receive object - Return object), en el que en vez de enviar numerosos parametros, solamente mandamos un objeto con todos los paremtros dentro. asi evitamos tener que indicar valores null o undefined en caso de no enviar algun parametro.

## Ventajas de la OOP en JS

Reutilizar código.

### Diferencia entre objetos literales y prototipos

#### Objetos literales

Manera inescalable de programar

```javascript
const Armando = {
  name: "Armando Ruiz",
  username: "ruiz7am",
  points: 7799,
  socialMedia: {
    twitter: "ruiz7am",
    instagram: "ruiz7am",
    facebook: "ArmandoRuiz"
  },
  approvedCourses: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS"
  ],
  learningPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
        "curso de Responsive Design",
      ]
    },
    {
      name: "Escuela de Videojuegos",
      courses: [
        "Curos de Introducción a la Producción de Videojuegos",
        "Curso de Unreal Engine",
        "Curso de Unity 3D",
      ]
    }
  ]
}

const Miguel = {
  name: "Miguel Carrera",
  username: "migueLuisCarrera",
  points: 100,
  socialMedia: {
    twitter: "miguellc",
    instagram: "miguellc",
    facebook: "MiguelLuis"
  },
  approvedCourses: [
    "Curso de Tailwind",
    "Curso de CSS Grid"
  ],
  learningPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
        "curso de Responsive Design",
      ]
    }
  ]
}
```

Con OOP facilitamos la creación de objetos en JS.

```javascript
class Estudiante {
  constructor ( {
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  } ) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
    }
}

const Silverio = new Student ( {
  name: "Silverio Durango",
  username: "DonSilver",
  email: "silver.don@proton.me",
  facebook: "DonSilver",
  instagram: "DonSilver",
  twitter: "DonSilver",
} )
```

Con esto podemos crear infinidad de objetos del prototipo student de una manera mas agil.
