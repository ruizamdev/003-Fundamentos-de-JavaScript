# Mathematics in JavaScript
## Formulas Matemáticas en JavaScript
### Calculando el area y el perímetro de un cuadrado y un triangulo.

#### Cuadrado
```
Para obtener el PERÍMETRO de un cuadrado
solo debemos de sumar los 4 lados, 
por lo que podemos simplemente multiplicar 
uno de los lados por 4:

l x 4 = P

Para obtener el ÁREA del mismo, tenemos que multiplicar
un lado por otro:

l x l = A
```

Por lo que podríamos 

```javascript
// CUADRADO
console.group("Cuadrados");
    // medida del lado de un cuadrado
    const ladoCuadrado = 5;
    // perímetro de un cuadrado
    const perimetroCuadrado = ladoCuadrado * 4;
    // area de un cuadrado
    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    // también podríamos aplicarlo con exponente al cuadrado
    // const areaCuadrado = ladoCuadrado ** 2;
    // output en consola
    console.log(
        ladoCuadrado,
        perimetroCuadrado,
        areaCuadrado,
    );
    // output
    // 5 20 25
console.groupEnd("Cuadrados");
```

#### Triangulo

```
En el caso del triangulo para el PERIMETRO, 
utilizamos la misma formula de lado + lado + lado:

l + l + l = P

Y para el AREA, la formula base por altura sobre 2:

(b * h) / 2
```

```javascript
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
```

<br>


Funciones:
```javascript
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
```

## Math en JavaScript
### Calculando el perímetro y  

```
Para calcular el perímetro de un circulo debemos tomar en cuenta dos cosas, el radio,
el cual es la linea que va desde el centro a cualquier punto exterior del circulo.

radio = r

duplicando el radio y manteniendo las dos partes continuas 
en una linea recta tenemos lo que es el diámetro.

diámetro = r * 2

Teniendo ya en cuenta estos dos, el perímetro de un circulo (al cual llamamos circunferencia), 
es el diámetro por pi
(r * 2) * PI
```

```javascript
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
```

Función:
```javascript
function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = radio ** 2;
    const radioAlCuadradoConMath = Math.pow(radio, 2);
    return {
        circunferencia: (diametro * PI),
        area: radioAlCuadrado * PI,
    }
}
```

<br>

## Reto: Altura de un Triangulo Escaleno

### Requisitos:
- Sabiendo lo que miden los 3 lados, encontrar la altura.
- Debe ser un triangulo isosceles no equilátero (2 lados iguales y 1 diferente.)

Formula:
```
h = raíz cuadrada de (a^2 - b^2/4)
```

