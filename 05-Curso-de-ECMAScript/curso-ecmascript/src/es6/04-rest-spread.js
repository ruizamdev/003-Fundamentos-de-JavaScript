// DE-STRUCTURING
// array destructuring
let fruits = ['apple', 'banana'];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[1]);

// object destructuring

let user = { username: 'Armando', age: 35};
let {username, age} = user;
console.log(username, age);
console.log(username, user.age);

// SPREAD OPERATOR
let person = { name: 'Armando', age: 35 };
let country = 'MX';

let data = { id: 1, ...person, country }
console.log(data)

// Rest parameters
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3)