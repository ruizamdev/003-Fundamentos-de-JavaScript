const greeting = function (namee) {
    return `hi, ${namee}`
}

// arrow function con explicit return
const newGreeting = (namee) => {
    return `Hi, ${namee}`
}

// arrow function con implicit return
const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastname) => `Hi, ${name}`

// Lexical Binding
const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    // Lexical Binding con arrow function
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

fictionalCharacter.messageWithTraditionalFunction('With great powers comes great responsibility')
fictionalCharacter.messageWithArrowFunction('May hazme un sandwich')