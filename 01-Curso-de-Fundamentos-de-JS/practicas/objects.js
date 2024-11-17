const persona = {
    nombre: "Homero",
    edad: 39,
    direccion: {
        calle: "falsa 123",
        ciudad: "Springfield"
    },
    saludar() {
        console.log(`hola, mi nombre es ${persona.nombre}`)
    }
}

console.log(persona)
persona.saludar()

persona.telefono = "555-555-5555"
console.log(`y mi telefono es: ${persona.telefono}`)

persona.despedir = () => {
    console.log("Adios")
}

persona.despedir()

console.log(persona)

delete persona.telefono
delete persona.despedir

console.log(persona)
