// some solo devuelve un booleano, si alguno de los elementos cumple con la condición.

const numbers = [1, 2, 3, 4];

let respuesta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        respuesta = true;
        break;
    }
}
console.log(respuesta);

const respuesta2 = numbers.some(item => item % 2 === 0);
console.log(respuesta2);


// ejemplo con ordenes de compra
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

const respuesta3 = orders.some(item => item.delivered);
console.log('respuesta3', respuesta3);

// array de appointments ("citas")
const dates = [
    {
        startDate: new Date(2021, 0, 1, 10),
        endDate: new Date(2021, 0, 1, 11),
        title: 'Cita de trabajo',
    },
    {
        startDate: new Date(2021, 0, 1, 15),
        endDate: new Date(2021, 0, 1, 16),
        title: 'Cita con mi jefe',
    },
    {
        startDate: new Date(2021, 0, 1, 17),
        endDate: new Date(2021, 0, 1, 18),
        title: 'Cita en el gym',
    },
    {
        startDate: new Date(2021, 0, 1, 8),
        endDate: new Date(2021, 0, 1, 9),
        title: 'Cita con el doctor',
    }
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
};

const { areIntervalsOverlapping } = require("date-fns");
const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        );
    });
};

console.log(isOverlap('is overlap?', newAppointment))