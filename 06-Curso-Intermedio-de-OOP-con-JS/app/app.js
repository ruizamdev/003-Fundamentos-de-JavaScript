class Dog {
  static sonido = "Woof!";
}

console.log(Dog.sonido);

class Cat {
  static hacerSonido () {
    return "Meow!"
  }
}

console.log(Cat.hacerSonido())

const objeto = {
  name: "Armando",
  email: "ruiz7am@outlook.com",
  age: 35,
}

console.log(Object.keys(objeto))
console.log(Object.getOwnPropertyNames(objeto))

console.log(Object.entries(objeto))

console.log(Object.getOwnPropertyDescriptors(objeto))