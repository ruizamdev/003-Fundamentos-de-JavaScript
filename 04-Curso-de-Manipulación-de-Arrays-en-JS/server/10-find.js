const numbers = [ 1, 30, 49, 29, 10, 13 ];

// estructura for
let rta = undefined;
for ( let i = 0; i < numbers.length; i++ ) {
    const element = numbers[ i ];
    if ( element === 30 ) {
        respuesta = element;
        break;
    }
}

console.log( 'for', respuesta );

// estructura ecmascript
const respuesta2 = numbers.find ( item => item === 30 );
console.log ( 'find', respuesta2 );

// Array de productos
const products = [
    {
        name: 'Pizza',
        price: 12,
        id: '🍕'
    },
    {
        name: 'Burger',
        price: 23,
        id: '🍔'
    },
    {
        name: 'Hot dog',
        price: 34,
        id: '🌭'
    },
    {
        name: 'Hot cakes',
        price: 355,
        id: '🥞'
    }
];

const respuesta3 = products.find(item => item.id === '🍔');
console.log('find', respuesta3);
const respuesta4 = products.findIndex(item => item.id === '🍔');
console.log('findIndex:', respuesta4);



