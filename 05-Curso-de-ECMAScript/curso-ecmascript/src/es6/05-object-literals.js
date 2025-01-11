// enhanced object literals
function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    }
}

function newUser(user, age, country, uid) {
    return {
        user,
        age,
        country,
        id: uid
    }
}

console.log(newUser('ruiz7am', 35, 'Mexico', 1))