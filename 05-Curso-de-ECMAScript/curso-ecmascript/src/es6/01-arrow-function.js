// Función tradicional
function square(num) {
    return num * num;
}

// Función arrow
const square = (num) => {
    return num * num;
}

// Función arrow con return implícito
// Esta es posible si la función no tiene lógica o mas de una linea de código.
const square = num => num * num;