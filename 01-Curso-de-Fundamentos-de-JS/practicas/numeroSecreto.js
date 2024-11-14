const numeroSecreto = Math.floor(Math.random() * 10 + 1)
const numeroJugador = parseInt (
  prompt("Adivina el número secreto del 1 al 10:")
)
console.log(`Este es el número con el que juegas ${numeroJugador}`)

if(numeroJugador === numeroSecreto) {
  console.log("Felicidades Ganaste!")
} else if (numeroJugador < numeroSecreto) { 
  console.log("El numero secreto es mayor")
} else if (numeroJugador > numeroSecreto) {
  console.log("El numero secreto es menor")
}