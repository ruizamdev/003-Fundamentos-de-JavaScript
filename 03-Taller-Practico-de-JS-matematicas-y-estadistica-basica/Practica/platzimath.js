const PlatziMath = {};

PlatziMath.esPar = function esPar(list){
    return !(list.length % 2);
};

PlatziMath.calcularMediana = function calcularMediana(list){
    const listSorted = list.sort((a, b) => a - b)
    console.log(listSorted)
    const listEsPar = PlatziMath.esPar(list);
    
    if (listEsPar){
        const Mitad1ListaPar = list[(list.length / 2) - 1];
        const Mitad2ListaPar = list[list.length / 2];
        const listMitades = [Mitad1ListaPar, Mitad2ListaPar];
        return PlatziMath.calcularPromedio(listMitades)
    } else {
        const indexMitadListaImpar = Math.floor(list.length / 2);
        const medianaListaImpar = list[indexMitadListaImpar];
        return medianaListaImpar;
    }
};

PlatziMath.calcularModa = function calcularModa(list){
    const listCount = {};
    for (let i = 0; i < list.length; i++){
        const element = list[i];
        if (listCount[element]){
        listCount[element] += 1;
        } else {
        listCount[element] = 1;
        }
    }
    console.log(listCount);     
};

PlatziMath.calcularPromedio = function calcularPromedio(listArray){
    // suma de los elementos de un array
    const sumaLista = listArray.reduce((a,b) => a + b);

    // promedio
    const promedio = sumaLista / listArray.length;
    return promedio;
};