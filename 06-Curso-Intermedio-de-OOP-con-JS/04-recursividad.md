# Recursividad en JavaScript

## ¿Qué es recursividad?

Es cuando una función se llama a sí mísma y ésta función que se llamó a sí mísma crea una nueva ejecución de nuestra función y esta función creada también se llama a sí mísma y así se van creando nuevas ejecuciones de una mísma función, al final de esta recursividad debemos de tener un validador que nos permita detener la recursión y devolver algún valor

```javascript
let numero = 0;
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
}
```
```javascript
const numeros = [0,4,6,4,8,0,9,7,8,9,10,11,13,15,6,126,168,165];

function recursiva(numbersArray){
  if(numbersArray.length != 0){
    const firstNum = numbersArray[0];
    console.log(firstNum);
    numbersArray.shift();
    recursiva(numbersArray);
  }
}

console.log(recursiva(numeros));
// output:
// 0
// 4
// 6
// 4
// 8
// 0
// 9
// 7
// 8
// 9
// 10
// 11
// 13
// 15
// 6
// 126
// 168
// 165
// undefined
```

## Deep Copy con recursividad

```javascript
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
```