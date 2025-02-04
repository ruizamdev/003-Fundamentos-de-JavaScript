const Juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curos 1"],
  addCourse(newCourse) {
    console.log('This', this);
    console.log('this.approvedCourses', this.approvedCourses)
    this.approvedCourses.push(newCourse);
  }
}

// Acceso a atributos y métodos de manera normal

/* console.log(Juan.name)
console.log(Juan.age)
console.log(Juan.approvedCourses)
console.log(Juan.addCourse("Curso 2"))
console.log(Juan.approvedCourses) */

// Acceso a atributos y métodos a través de måtodos estáticos del prototipo padre Object

/* console.log(Object.keys(Juan));
console.log(Object.getOwnPropertyNames(Juan));
console.log(Object.entries(Juan));
console.log(Object.entries(Juan)[3])
console.log(Object.entries(Juan)[3][0])
console.log(Object.entries(Juan)[3][1])
console.log(Object.entries(Juan)[3][1]('Curso 2')) */
console.log(Object.getOwnPropertyDescriptors(Juan))

// formas convencionales de agregar atributos o métodos nuevos a los objetos
/* Juan.nuevaPropiedad = "Algo";
Juan["nuevaPropiedad"] = "Algo"; */

// En este caso no trabajaremos así con métodos estáticos.
Object.defineProperty(Juan, "pruebaNASA", {
  value: "Extraterrestres",
  enumerable: true,
  writable: true,
  configurable: true,
})