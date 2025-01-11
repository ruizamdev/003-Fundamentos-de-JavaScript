function newUser(name, age, country) {
    var name = name || 'Usuario';
    var age = age || '30';
    var country = country || 'CO';
    console.log(name, age, country);
}

newUser()
newUser('Armando', 35, 'MX')

function newAdmin(name = 'User', age = 0, country = 'Uknown') {
    console.log(name, age, country)
}

newAdmin()
newAdmin('Armando', 35, 'Mexico')