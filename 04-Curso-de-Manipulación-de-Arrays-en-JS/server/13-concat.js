const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
console.log('for', newArray);

const respuesta = elements.concat(othersElements);
const respuesta2 = [...elements, ...othersElements];
const respuesta3 = [...elements, ...'random'];
console.log('for', newArray);
console.log(respuesta);
console.log(respuesta2);
console.log(respuesta3);
elements.push(...othersElements);
console.log('elements', elements);