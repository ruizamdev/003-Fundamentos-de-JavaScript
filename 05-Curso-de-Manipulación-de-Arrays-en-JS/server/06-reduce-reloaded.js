// Reduce reloaded
const items = [1,1,2,6,5,4,1,3,0,1,6,5,8,9,7,0,0,6,5,7,4,2,7,3,2,0,4,6];
// cuantos hay de un mismo de cada uno de los elementos del array
//output
// 1: 1,
// 3: 2,
// 2: 1,

const respuesta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    };
    return obj;
}, {}); 

console.log(respuesta);


// ahora con objetos

const data = [
    {
        name: "Laura",
        department: "UX Designer"
    },
    {
        name: "Carlos",
        department: "Backend Dev"
    },
    {
        name: "Juan",
        department: "Frontend Dev"
    },
    {
        name: "Liliana",
        department: "Frontend Dev"
    },
    {
        name: "Andres",
        department: "Backend Dev"
    },
    {
        name: "Carlos",
        department: "Frontend Dev"
    },
    {
        name: "Armando",
        department: "Frontend Dev"
    },
    {
        name: "Laura",
        department: "UX Designer"
    },
    {
        name: "Carlos",
        department: "Backend Dev"
    },
    {
        name: "Juan",
        department: "Frontend Dev"
    },
    {
        name: "Liliana",
        department: "Frontend Dev"
    },
    {
        name: "Andres",
        department: "Backend Dev"
    }
];

const respuesta2 = data
.map(item => item.department)
.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(respuesta2);


// por rangos

const numeros = [1,1,5,3,2,1,1,5,6,5,7,4,8,9,1,3,2,1,9,6,8,5,4,1,3,5,3,0,1,6,5,4,9,5,7,8,2,0,1,2,3,0,2,9,7];
const respuesta3 = numeros
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }    
})