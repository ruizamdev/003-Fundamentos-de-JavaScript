const juanita = {
  age: 15,
  email: "juanita@gmail.com",
}
const nath = juanita;
// console.log({ juanita, nath })

nath.email = 'nath@gmail.com'
nath.age = 20

// console.log({ juanita, nath })

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

const stringifiedComplexObject = JSON.stringify(obj1);
console.log(stringifiedComplexObject)

const obj2 = JSON.parse(stringifiedComplexObject)
console.log(obj2)
// output:
// { a: 'a', b: 'b', c: { d: 'd', e: 'e' } }

/* for (prop in obj1) {
  obj2[prop] = obj1[prop];
}

console.log({ obj1, obj2 }) */

// obj2.a = "AAAAAAAAA";

// console.log({ obj1, obj2 })

// obj1.b = "BBBBBBBBB"

// console.log({ obj1, obj2 })

// obj2.c.d = "DDDDDDDDD"

// obj1.c.e = "EEEEEEEEE"

// console.log({ obj1, obj2 })

/* const obj3 = Object.assign({}, obj1) // lo mismo que arriba
obj3.c.d = "Copia desde objeto 1"
console.log(obj1, obj3) */
// output:
// { a: 'a', b: 'b', c: { d: 'Copia desde objeto 1', e: 'e' } } { a: 'a', b: 'b', c: { d: 'Copia desde objeto 1', e: 'e' } }

/* const obj4 = Object.create(obj1)
console.log(obj4) */
// output:
// {}

