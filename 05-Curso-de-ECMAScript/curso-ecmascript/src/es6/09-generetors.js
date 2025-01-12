function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Armando', 'Hilda', 'Irina', 'Cuca', 'Petra']);

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)