const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log('for', newArray)

// niveles de anidacion de arrays entre parentesis
const respuesta = matriz.flat(2)
console.log('flat', newArray)

// flatmap

const users = [
    {userId: 1, userName: 'jose', attributes: ['nice', 'cool']},
    {userId: 2, userName: 'maria', attributes: ['lovely']},
    {userId: 3, userName: 'juan', attributes: ['nice', 'cool']}
]

const respuesta2 = users.map(user => user.attributes).flat();
const respuesta3 = users.flatMap(user => user.attributes);
console.log('map y flat separados: ', respuesta2);
console.log('flatmap', respuesta3)

// Reto:
// flatmap

// constante calendars que almacena un objeto que contiene dos arrays uno llamado primaryCalendar y otro llamado secondaryCalendar, cada array contiene dos objetos, con tres propiedades cada una, la primera es startDate, la segunda es endDate y la tercera es title, startDate y endDate se obtienen con la sintaxis de la api de google calendar new Date(2021, 1, 1, 15)
const calendars = {
    primaryCalendar: [
        {startDate: new Date(2021, 1, 1, 15), endDate: new Date(2021, 1, 1, 16), title: 'primary 1'},
        {startDate: new Date(2021, 1, 1, 17), endDate: new Date(2021, 1, 1, 18), title: 'primary 2'},
        // se agregan 3 objetos mas con las mismas propiedades
        {startDate: new Date(2021, 1, 1, 19), endDate: new Date(2021, 1, 1, 20), title: 'primary 3'},
        {startDate: new Date(2021, 1, 1, 21), endDate: new Date(2021, 1, 1, 22), title: 'primary 4'},
        {startDate: new Date(2021, 1, 1, 23), endDate: new Date(2021, 1, 1, 24), title: 'primary 5'}
    ],
    secondaryCalendar: [
        {startDate: new Date(2021, 1, 1, 19), endDate: new Date(2021, 1, 1, 20), title: 'secondary 1'},
        {startDate: new Date(2021, 1, 1, 21), endDate: new Date(2021, 1, 1, 22), title: 'secondary 2'},
        // se agregan 3 objetos mas con las mismas propiedades
        {startDate: new Date(2021, 1, 1, 23), endDate: new Date(2021, 1, 1, 24), title: 'secondary 3'},
        {startDate: new Date(2021, 1, 1, 25), endDate: new Date(2021, 1, 1, 26), title: 'secondary 4'},
        {startDate: new Date(2021, 1, 1, 27), endDate: new Date(2021, 1, 1, 28), title: 'secondary 5'}
    ]
};

const respuesta4 = Object.values(calendars).flatMap(item => {
    console.log('item', item)
    return item.map(date => date.startDate);
});
console.log(respuesta4);
