function requiredParam(param){
  throw new Error(`${param} es obligatorio`);
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
    get name(){
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0){
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter")
      }
    },
    get courses(){
      return private["_name"];
    },
    set courses(newCourses) {
      if (newCourses.length != 0){
        
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter")
      }
    },
  };
  return public;
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