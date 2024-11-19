class animal {
    constructor (nombre, tipo) {
        this.nombre = nombre
        this.tipo = tipo
    }
    emitirSonido() {
        console.log("Sonido de animal")
    }
}

class perro extends animal {
    constructor(nombre, tipo, raza) {
        super(nombre, tipo)
        this.raza = raza
    }
    emitirSonido() {
        console.log(`${this.nombre} es un perro y al ladras hace: Guau guau`)
    }
    correr() {
        console.log(`El perro ${this.nombre} está corriendo`)
    }
}

const perro1 = new perro("Sirio", "perro", "Maltés")

console.log(perro1)
perro1.emitirSonido()
perro1.correr()

perro.prototype.nuevoMetodo = function () {
    console.log("Este es un nuevo método")
}

let currentPrototype = Object.getPrototypeOf(perro1)
console.log(currentPrototype)