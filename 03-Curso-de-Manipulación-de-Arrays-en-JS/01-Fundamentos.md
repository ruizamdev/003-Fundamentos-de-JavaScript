# Fundamentos de manejo de arrays

## forEach

Iteración con forEach
```javascript
const letters = ['a', 'b', 'c']

// solo con for
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for', element);
}
// output:
// for a
// for b
// for c

// con forEach se reduce significativamente el número de líneas de código.
letters.forEach(item => console.log('forEach', item))
//output:
// forEach a
// forEach b
// forEach c
```

<br>

## Mutabilidad e Inmutabilidad (Transforma, no transforma)
Es la capacidad de un método de array de modificar el array original.
Mayormente se recomienda practicar la Inmutabilidad.

Nos debemos preguntar antes de hacer una modificación...  
...esto traerá efectos colaterales?
```javascript
lovelyPets = [🐵, 🐶, 🦝, 😸];
```
Estructura de datos Inmutable
sin modificar el array original
![inmutabilidad](./assets/inmutabildad.png)

<br>

## map (Inmutable)
map transforma, 

hace una transformación del array (crea una copia optimizada para trabajar sobre ella) itera y aplica una función para cada uno de los valores.
```javascript
const letters = ['a', 'b', 'c'];

const newArray = letters.map(item => item + '++');
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const letter = letters[index];
//     newArray.push(letter + '++');
// }

console.log('original', letters);
console.log('new', newArray);
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // App 2
        numbers = [1, 2, 3, 4, 5];
        const multipliedNumbers = numbers.map(number => {
            return number * 2;
        });

        console.log(numbers);
        console.log(multipliedNumbers);
    </script>
</body>
</html>
```