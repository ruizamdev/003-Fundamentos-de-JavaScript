// sintaxis estandar
try {
  hello();
} catch (error) {
  console.log(error);
}

// sintaxis personalizada
try {
  anotherFn();
} catch {
  console.log('Esto es un error!')
}