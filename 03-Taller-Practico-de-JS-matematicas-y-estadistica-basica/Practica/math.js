// CUADRADO
// 
console.group("Cuadrados");
    // medida del lado de un cuadrado
    const ladoCuadrado = 5;
    // perimetro de un cuadrado
    const perimetroCuadrado = ladoCuadrado * 4;
    // area de un cuadrado
    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    // output en consola
    console.log(
        ladoCuadrado,
        perimetroCuadrado,
        areaCuadrado,
    );
    // output
    // 5 20 25
console.groupEnd("Cuadrados");


// TRIANGULO
console.group("Triangulos");
    const ladoTriangulo1 = 6;
    const ladoTriangulo2 = 6;
    const baseTriangulo = 4;
    const alturaTriangulo = 5.5;

    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

    console.log(
        ladoTriangulo1,
        ladoTriangulo2,
        baseTriangulo,
        alturaTriangulo,
        perimetroTriangulo,
        areaTriangulo,
    );
console.groupEnd("Trinagulos");

// FUNCION PARA CALCULAR PERIMETRO Y AREA DE UN TRIANGULO
function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}

// FUNCION PARA CALCULAR PERIMETRO Y AREA DE UN CUADRADO
function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado ** 2,
    }
}


// CIRCULO
console.group("Circulos");

    const radioCirculo = 3;
    const diametroCirculo = radioCirculo * 2;
    const PI = 2.1415;

    const circunferencia = diametroCirculo * PI;
    const areaCirculo = (radioCirculo ** 2) * PI;

    console.log({
        radioCirculo,
        diametroCirculo,
        PI,
        circunferencia,
        areaCirculo
    })

console.groupEnd("Circulos");

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = radio ** 2;
    const radioAlCuadradoConMath = Math.pow(radio, 2);
    return {
        circunferencia: (diametro * PI),
        area: radioAlCuadrado * PI,
    }
}


/* function calcularAlturaTriangulo(lado1, lado2, base){
    if (lado1 != lado2 || base == lado1 || base == lado2) {

    } else {

    }
} */

function calcularAlturaTriangulo(lado, base) {
    if (lado == base) {
        console.warn('Esto no es un triangulo isosceles');
    } else {
        return Math.sqrt((lado ** 2) - ((base ** 2)) / 4);
    }
}