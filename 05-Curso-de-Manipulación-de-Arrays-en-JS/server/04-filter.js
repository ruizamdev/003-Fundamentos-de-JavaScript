const words = [`spray`, `limit`, `elite`, `exuberant`];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length >= 6) {
        newArray.push(item);       
    }
}

console.log(`newArray: `, newArray);
console.log(`words: `, words);
const respuesta = words.filter(item => item.length >= 6)
console.log(`respuesta: `, respuesta);
console.log(`words: `, words);


// 
const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true
    }
];

const filtro = orders.filter(item => item.delivered)
console.log('filtro: ', filtro)

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}
console.log('resultado', search('Nico'))