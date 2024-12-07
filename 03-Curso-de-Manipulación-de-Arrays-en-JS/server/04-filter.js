const words = [`spray`, `limit`, `elite`, `exuberant`, `destruction`, `present`];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length > 6) {
        newArray.push(item);       
    }
}

console.log(`newArary: `, newArray);
console.log(`newArray`, words);