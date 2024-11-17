function persona(nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}

const persona1 = new persona("Armando", "Ruiz", 35)
console.log(persona1)

const persona2 = new persona("Hilda", "Hernandez", 30)
console.log(persona2)

const persona3 = new persona("Irina", "Mariscal", 25)

persona.prototype.telefono = "555-555-5555"

persona1.nacionalidad = "Mexicana"

persona.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
}

persona1.saludar()
persona2.saludar()
persona3.saludar()