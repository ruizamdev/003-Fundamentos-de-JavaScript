// Creacion de un array a partir de la información contenida en otro array
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
console.log('original', orders);
const respuesta = orders.map(item => item.total);
console.log('respuesta', respuesta);

// En esta función se agrega un nuevo atributo a cada objecto de la referencia en memoria del array orders
// Porque solo se esta retornando el objeto array y no se esta creando un nuevo objeto
const respuesta2 = orders.map(item => {
    item.tax = .19;
    return item
})
console.log('respuesta2', respuesta2);
console.log('original', orders)

// Aqui se crea un nuevo objeto array mediante la copia o referencia en memoria del array, utilizando el principio de inmutabilidad, igual que la respuesta #1
const respuesta3 = orders.map((item) => {
    return {
        ...item,
        tax: .19
    }
})

console.log('Respuesta #3: ', respuesta3)
console.log('original: ', orders)