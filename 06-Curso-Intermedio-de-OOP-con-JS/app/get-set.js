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