const user = { username: 'ruiz7am', age: 35, country: 'MX' }
const {username, ...values} = user;
console.log(username);
console.log(values);