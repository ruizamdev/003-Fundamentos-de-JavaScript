// console.log(salarios);
// analisis personal para juanita
/* const personaEnBusqueda = 'Juanita'
const persona = salarios.find((persona) => {
    return persona.name === personaEnBusqueda;
}); */

function encontrarPersona (personaEnBusqueda) {
    /* const persona = salarios.find((persona) => {
        return persona.name === personaEnBusqueda;
    });
    return persona; */

    // Version mas corta.
    return salarios.find(persona => persona.name === personaEnBusqueda);
};

function medianaPorPersona (nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    })
    const medianaSalarios = PlatziMath.calcularMediana(salarios)
    console.log(medianaSalarios);
    return medianaSalarios;
};

function proyeccionPorPersona (nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    let porcentajesCrecimiento = [];
    for (let i = 1; i < trabajos.length; i++){
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = (crecimiento / salarioPasado) * 100;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    const ultimoSalario = trabajos
};

// Analisis Empresarial
const empresas = {};
for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }
        if(!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}
console.log({empresas});

function medianaEmpresaYear(nombre, year) {
    if(!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else if(!empresas[nombre][year]) {
        console.warn('La empresa no dio salarios ese year');
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year])
    }
}