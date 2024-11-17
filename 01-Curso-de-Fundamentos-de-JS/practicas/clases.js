class persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

const persona1 = new persona("Armando", 35)
persona1.saludar()

const persona2 = new persona("Hilda", 30)
persona2.saludar()

const persona3 = new persona("Irina", 4)
persona3.saludar()