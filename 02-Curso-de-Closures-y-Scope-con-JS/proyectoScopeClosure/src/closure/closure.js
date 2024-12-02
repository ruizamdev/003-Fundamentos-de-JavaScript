function greeting() {
    let userName = 'Armando';

    function displayUserName() {
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g); // aqui se llama a mostrar la definición de la constante.
console.log(g()); // aqui se esta llamando a la función en sí.
