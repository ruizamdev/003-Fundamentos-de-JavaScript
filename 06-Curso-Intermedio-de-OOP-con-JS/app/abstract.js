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

// Podriamos utilizar esto:
// juan.name = "Juanito";
// juan['age'] = 18;
// juan["email"] = "juanito@frijolitos.com";
// Pero en vez de esto, lo haremos con defineProperty();

// Object.defineProperty(juan, "name", {
//   value: "juanito",
//   configurable: false, // evita que se borre (no delete rights)
// })
// Pero también podriamos prescindir de esto

// y realizar esto:
Object.seal(juan); // ninguna propiedad se puede borrar
// Object.isSealed(juan);
Object.freeze(juan);
// Object.isFrozen(juan);
