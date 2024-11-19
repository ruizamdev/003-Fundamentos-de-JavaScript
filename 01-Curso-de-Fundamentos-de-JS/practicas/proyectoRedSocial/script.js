const userDatabase = [
    {
        username: "Armando",
        password: "1234"
    },
    {
        username: "Hilda",
        password: "5678"
    },
    {
        username: "Irina",
        password: "9876"
    },
    {
        username: "Cuca",
        password: "5432"
    }
]

const timeLine = [
    {
        username: "Armando",
        timeline: "Dejenmen estudiar por favor!"
    },
    {
        username: "Hilda",
        timeline: "Se me olvido la mochila!"
    },
    {
        username: "Irina",
        timeline: "Me pones el jueguito?"
    },
    {
        username: "Cuca",
        timeline: "Miau asi es!"
    }
]

let username = prompt("Usuario")
let password = prompt("Contraseña")

function usuarioExistente(username, password) {
    for (let i = 0; i < userDatabase.length; i++) {
        if (
            userDatabase[i].username === username &&
            userDatabase[i].password === password
        ) {
            return true
            break
        } else {
            return false
        }
    }
}

function signIn(username, password) {
    if(usuarioExistente(username, password)) {
        alert(`Bienvenido ${username}`)
        console.log(timeLine)
    } else {
        alert("Usuario o contraseña incorrectos")
    }    
}

signIn(username, password)