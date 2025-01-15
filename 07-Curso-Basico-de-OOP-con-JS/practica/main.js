// esto es un objeto literal, heredan la propiedad __proto__ del Prototipo Objetct
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Practico de HTML y CSS",
  ],
  /* aprobarCurso: function () {

  } */
  aprobarCurso (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
};


// Hacer que natalia apruebe otro curso

natalia.cursosAprobados.push("Curso de Responsive Design");