document.getElementById('aYpDeCuadrado').addEventListener('submit', function(event) {
    event.preventDefault();

    const lado = parseFloat(document.getElementById('lado').value)
    const perimetroCuadrado = lado * 4;
    const areaCuadrado = lado * lado;
    const resultadosCuadrado = document.getElementById('resultadosCuadrado');
    resultadosCuadrado.innerHTML = `
        <h2>Resultados</h2>
        <p>El lado del cuadrado es: ${lado}</p>
        <p>El perimetro del cuadrado es: ${perimetroCuadrado}</p>
        <p>El area del cuadrado es: ${areaCuadrado}</p>
    `
})

document.getElementById('aYpDeTriangulo').addEventListener('submit', function(event) {
    event.preventDefault();

    const lado1Base = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);
    const perimetroTriangulo = lado1Base + lado2 + lado3;
    const semiPerimetro = perimetroTriangulo / 2;
    const area = Math.sqrt(semiPerimetro*(semiPerimetro-lado1Base)*(semiPerimetro-lado2)*(semiPerimetro-lado3));
    const altura = (2/lado1Base*area)

    const resultados2 = document.getElementById('resultadosTriangulo');
    resultados2.innerHTML = `
        <h2>Resultados</h2>
        <p>El lado 1 del triangulo es: ${lado1Base}</p>
        <p>El lado 2 del triangulo es: ${lado2}</p>
        <p>El lado 3 del triangulo es: ${lado3}</p>
        <p>El perimetro del triangulo es: ${perimetroTriangulo}</p>
        <p>El area del triangulo es: ${area}</p>
        <p>La altura del triangulo es: ${altura}</p>
    `
})

document.getElementById('aYpDeCirculo').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const radio = parseFloat(document.getElementById('radio').value);
    const diametro = radio * 2;
    const circunferencia = diametro * Math.PI;
    const areaCirculo = Math.PI * (radio ** 2);
    const resultados = document.getElementById('resultadosCirculo');
    
    resultados.innerHTML = `
        <h2>Resultados</h2>
        <p>El radio del circulo es: ${radio}</p>
        <p>El diametro del circulo es: ${diametro}</p>
        <p>La circunferencia del circulo es de: ${circunferencia}</p>
        <p>El area del circulo es de: ${areaCirculo}</p>
    `
})