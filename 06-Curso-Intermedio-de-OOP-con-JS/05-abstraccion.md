# abstracción y encapsulamiento sin prototipos

## Factory pattern y RORO (Recive Objecto, Return Object)

Factory pattern y RORO son dos patrones que nos van a ayudar a crear objetos o moldes de objetos pero no a partir de objetos literales o copiandolos a partir de otro, sino simplemente con funciones.

```javascript
function requiredParam(param){
  throw new Error(`${param} es obligatorio`);
}

function createStudent({
  name = requiredParam("Nombre"),
  age,
  email = requiredParam("correo electrónico"),
  facebook,
  instagram,
  twitter,
  approvedCourses = [],
  learningPaths = [],
} = {}){
  return {
    name,
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      facebook,
      instagram,
      twitter,
    },
  };
}

const armando = createStudent(
  {name: "Armando", email: "ruiz7am@outlook.com", age: 30}
);
```

## Abstracción con objetos literales y deep copy

Utilizando nuestra función deepCopy:

```javascript
function isObject(subject){
  return typeof subject == "object";
}
function isArray(subject){
  return Array.isArray(subject)
}

function deepCopy(subject){
  let copySubject;

  const subjectIsObject = isObject(subject)
  const subjectIsArray = isArray(subject);

  if(subjectIsArray){
    copySubject = [];
  } else if(subjectIsObject){
    copySubject = {};
  } else {
    return subject;
  }

  for(key in subject){
    const keyIsObject = isObject(subject[key]);
    if(keyIsObject){
      // copySubject[key] = deepCopy(subject[key]);
    }else{
      if(subjectIsArray){
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}
```

Podemos craer un objeto a partir de un objeto literal, este objeto literal lo podemos declarar de la siguiente manera:

```javascript
const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socilaMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

const juan = deepCopy(studentBase);
```

Podriamos utilizar esto:

```javascript
juan.name = "Juanito";
juan['age'] = 18;
juan["email"] = "juanito@frijolitos.com";
```

Pero en vez de esto, lo haremos con el método del super Objeto object `defineProperty()`

```javascript
Object.defineProperty(juan, "name", {
  value: "juanito",
  configurable: false, // evita que se borre (no delete rights)
  writable: flase, // evita que se modifique (no write right)
 })
```

Pero también podriamos prescindir de esto y realizar esto:

```javascript
Object.seal(juan); // ninguna propiedad se puede borrar
Object.isSealed(juan); // output: true
Object.freeze(juan); // ninguna propiedad se puede cambiar/modificar
Object.isFrozen(juan); // output: true
```

## Module pattern y namespaces

Recordemos que JS es un lenguaje de programación debilmente tipado, es decir que no tenemos que definir el tipo de las variables, puede ser cualquiera, integer, float, string, bigint, smallint, etc.

```javascript
function requiredParam(param){
  throw new Error(`${param} es obligatorio`);
}

function createStudent({
  name = requiredParam("Nombre"),
  age,
  email = requiredParam("correo electrónico"),
  facebook,
  instagram,
  twitter,
  approvedCourses = [],
  learningPaths = [],
} = {}){

  // validacion privada
  const private = {
    "_name": name,
  };

  // validacion publica
  const public = {
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      facebook,
      instagram,
      twitter,
    },
    readName() {
      return private["_name"];
    },
    changeName(newName) {
      if (newName == "Pendejazo"){
        console.log("hey no te puedes poner Pendejazo! campeón!")
      }
      private.name = newName;
    },
  };

  Object.defineProperty(public, "readName", {
    writable: false,
    configurable: false,
  });

  Object.defineProperty(public, "changeName", {
    writable: false,
    configurable: false,
  });

  return public;
}

const armando = createStudent(
  {name: "Armando", email: "ruiz7am@outlook.com", age: 30}
);
```

## Getters & Setters

```javascript
function requiredParam(param){
  throw new Error(`${param} es obligatorio`);
}

function createStudent({
  name = requiredParam("Nombre"),
  age,
  email = requiredParam("correo electrónico"),
  facebook,
  instagram,
  twitter,
  approvedCourses = [],
  learningPaths = [],
} = {}){

  // validacion privada
  const private = {
    "_name": name,
  };

  // validacion publica
  const public = {
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      facebook,
      instagram,
      twitter,
    },
    get name(){
      return private["_name"];
    },
    set name(newName){
      if(newName.length != 0){
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos un caracter")
      }
      return private["_name"];
    }
  };

  Object.defineProperty(public, "readName", {
    writable: false,
    configurable: false,
  });

  Object.defineProperty(public, "changeName", {
    writable: false,
    configurable: false,
  });

  return public;
}

const armando = createStudent(
  {name: "Armando", email: "ruiz7am@outlook.com", age: 30}
);
```

