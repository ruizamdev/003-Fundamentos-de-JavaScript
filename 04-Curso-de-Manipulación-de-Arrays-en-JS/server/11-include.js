// retorna Si un elemento dado esta o no dentro del array

const pets = ['cat', 'dog', 'bat'];

for (let index = 0; index < pets.length; index++){
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}
console.log('for', includeInArray);

//
const respuesta = pets.includes('dog');
console.log('includes', includeInArray)
