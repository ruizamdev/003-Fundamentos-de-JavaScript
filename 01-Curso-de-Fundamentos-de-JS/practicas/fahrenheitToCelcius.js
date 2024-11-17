const tempFahrenheit = [32, 68, 95, 104, 212]
const tempCelcius = tempFahrenheit.map(f => (f - 32) * 5 / 9)

console.log(tempFahrenheit)
console.log(tempCelcius)