# Como identificar objetos

##  Que es Duck typing

Es la forma de programar donde identificamos a nuestros elementos dependiendo de los métodos y atributos que tengan por dentro.

Definición cortesía de Github copilot

_"El **duck typing** en JavaScript es un concepto de programación donde la identidad de un objeto se determina por sus métodos y propiedades en lugar de su tipo explícito. En otras palabras , si un objeto "camina como un pato y grazna como un pato", entonces es tratado como un pato, independientemente de su clase o tipo."_

## Duck Typing en JavaScript

```javascript
function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}


function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createLearningPath({
  name = requiredParam("name"),
  courses = [],
}) {
  const private = {
    "_name": name,
    "_courses": courses,
  };

  const public = {
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    get courses() {
      return private["_courses"];
    },
  };

  return public;
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    "_name": name,
    "_learningPaths": learningPaths,
  };

  const public = {
    email,
    age,
    approvedCourses,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    get learningPaths() {
      return private["_learningPaths"];
    },
    set learningPaths(newLP) {
      if (!newLP.name) {
        console.warn("Tu LP no tiene la propiedad name");
        return;
      }

      if (!newLP.courses) {
        console.warn("Tu LP no tiene courses");
        return;
      }

      if (!isArray(newLP.courses)) {
        console.warn("Tu LP no es una lista (*de cursos)");
        return;
      }
      
      private["_learningPaths"].push(newLP);
    },
  };

  return public;
}

const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });
```

## Instance Of en JavaScript con instancias y prototipos

```javascript
juan instanceof Student
// output: true
```

```javascript
function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}


function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({
  name = requiredParam("name"),
  courses = [],
}) {
  this.name = name;
  this.courses = courses;
  function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter ,
    instagram,
    facebook,
  };

  if (isArray(learningPaths)){
    this.learningPaths = [];

    for(learningPathIndex in learningPaths){
      if(learningPaths[learningPathIndex] instanceof LearningPath){
        this.learningPaths.push(learningPaths[learningPathIndex]);
      }
    } 
  }
  }

const escuelaWeb = new LearningPath({name: "Escuela de WebDev"})
const escuelaData = new LearningPath({name: "Escuela de Data Science"})
const juan = new Student({
  email: "juanito@frijoles.co",
  name: "Juanito",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});
````

## Atributos y métodos privados en prototipos

