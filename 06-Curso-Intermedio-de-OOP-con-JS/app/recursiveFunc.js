/* let numero = 0;
while(numero < 5) {
  console.log(numero);
  numero++;
}

function recursiva(numero) {
  console.log(numero);
  if (numero < 5) {
    return recursiva(numero + 1);
  } else {
    return 5;
  }
} */

  /*function recursiva(){
    if(// validación){
      // llamados recursivos
    } else {
      // llamados normales
    }
  } */

// const numeros = [0,4,6,4,8,0,9,7,8,9,10,11,13,15,6,126,168,165];
/* let numero = 0;
for(let i = 0; i < numeros.length; i++){
  numero = numeros[i];
  console.log({ i, numero })
} */

/* function recursiva(numbersArray){
  if(numbersArray.length != 0){
    const firstNum = numbersArray[0];
    console.log(firstNum);
    numbersArray.shift();
    recursiva(numbersArray);
  }
}

console.log(recursiva(numeros)); */

const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  editA() {
    this.a = "AAAAAAAA";
  }
}

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