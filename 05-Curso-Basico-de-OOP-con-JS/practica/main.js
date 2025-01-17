// esto es un objeto literal, heredan la propiedad __proto__ del Prototipo Objetct
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


// Prototipo
function Student1 ( name, age, cursosAprobados ) {
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

// const juanita = new Student(
//   "Juanita Alejandra",
//   15,
//   [
//     "Curso de introducción a la producción de VideoJuegos",
//     "Curso de creación de personajes"
//   ]
// )

// Prototipos con la sintaxis de clases

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

// RoRo = Recive object - Return object

// objetos literales
/* const Armando = {
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
} */

// Prototipos
class Student {
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

class FreeStudent extends Student {
  constructor ( props ) {
    super( props ); // super nos permite referenciar o llamar al constructor del prototipo madre
  }
  approveCourse ( newCourse ) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos, " + this.name + " solo puedes tomar cursos gratis")
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
      console.warn("Lo sentimos, " + this.name + " no puedes tomar cursos de inglés")
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

const silverio = new FreeStudent ( {
  name: "Silverio Durango",
  username: "DonSilver",
  email: "silver.don@proton.me",
  facebook: "DonSilver",
  instagram: "DonSilver",
  twitter: "DonSilver",
} )

const irina = new BasicStudent ( {
  name: "Irina Mariscal Hernández",
  username: "nina",
  email: "ninorris.ninuchis@ninimail.com"
} )

const armando = new ExpertStudent ({
  name: "Armando Mariscal Ruiz",
  username: "rambo",
  email: "artmx@proton.me",
  facebook: "Armando Ruiz",
  instagram: "ruiz7am",
  twitter: "ruiz7am"
})

class Class {
  constructor ( {
    name,
  } ) {
    this.name = name;
  }
}

function videoPlay (id) {
  const urlSecreta  = "https://platzi-secreto.com/" + id;
  console.log ( "Se esta reproduciendo desde la url " + urlSecreta )
}

function videoStop ( id ) {
  const urlSecreta  = "https://platzi-secreto.com/" + id;
  console.log ( "Se pausó el video desde la url " + urlSecreta )
}

// 

class PlatziClass {
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

class Course {
  constructor ( {
    name,
    classes = [],
    isFree = false,
    lang = "spanish",
  } ) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }
  get name () {
    return this._name;
  }
  set name ( nuevoNombre ) {
    if ( nuevoNombre === "Curso malito de Programación Básica" ) {
      console.log( "Web... no" )
    } else {
      this._name = nuevoNombre;
    }
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
  isFree: true,

} )


const cursoFrontendDev = new Course ( {
  name: "Curos de Frontend Developer",
  lang: "english",
} )

const cursoPracticoFrontendDev = new Course ( {
  name: "Curso Práctico de Frontend Developer",
} )

