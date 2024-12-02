# Que es un closure
Permiten acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.

A diferencia de otros conceptos como funciones, variables u otros, no son siempre utilizados.

Tienes un closure cuando una función cualquiera accede a una variable fuera de su contexto.

```javascript
const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { // función interna, aquí ya hay un closure
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();
```
output
```
0
1 0
2 1 0
```

Ejemplo de uso de una closure en un ejercicio práctico.

Sin closure
```javascript
 MoneyBox without closure
 function moneyBox(coins) {
     let saveCoins = 0;
     saveCoins += coins;
     console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(5);
```

Con closure
```javascript
function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`moneyBox: $${saveCoins}`)
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxHildy = moneyBox();
moneyBoxHildy(10);
moneyBoxHildy(20);
moneyBoxHildy(5);
```