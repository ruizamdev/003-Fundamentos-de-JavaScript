const letters = ['a', 'b', 'c'];

const newArray = letters.map(item => item + '++');
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const letter = letters[index];
//     newArray.push(letter + '++');
// }

console.log('original', letters);
console.log('new', newArray);

