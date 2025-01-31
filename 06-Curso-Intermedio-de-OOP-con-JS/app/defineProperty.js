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

Object.defineProperty(Juan, "navigator", {
  value: "Chrome",
  writable: true,
  enumerable: false,
  configurable: true,
})

Object.defineProperty(Juan, "editor", {
  value: "VSCode",
  writable: false,
  enumerable: true,
  configurable: true,
})

Object.defineProperty(Juan, "terminal", {
  value: "WSL",
  writable: true,
  enumerable: true,
  configurable: false,
})

Object.defineProperty(Juan, "pruebaNasa", {
  value: "Extraterrestres",
  writable: false,
  enumerable: false,
  configurable: false,
})

Object.freeze(Juan);

console.log(Object.getOwnPropertyDescriptors(Juan));