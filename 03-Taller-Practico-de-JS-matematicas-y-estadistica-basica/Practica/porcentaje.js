/* let p = prompt('Cual es el precio del producto?');
let d = prompt('Que descuento tiene?') ;



function getPriceWithDiscount(p,d){
    const precioConDescuento = (p * (100 - d))/100;
    alert(
        `
        Este es el Precio con descuento:
        ${precioConDescuento}
        `
    )
}

getPriceWithDiscount(p,d) */

document.getElementById('discountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const price = parseFloat(document.getElementById('price').value);
    const discount = parseFloat(document.getElementById('discount').value);

    if (isNaN(price) || isNaN(discount)) {
        alert('Por favor, ingresa valores númericos');
        return;
    }
    if (discount > 100) {
        alert('El descuento no puede ser mayor al 100%');
        return;
    } else if (discount < 0) {
        alert('El descuento no puede ser menor a 0%');
        return;
    }
    const moneyDiscounted = (discount * price)/100;
    const priceWithDiscount = price - moneyDiscounted;
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = `
        <h2>Resultados</h2>
        <p>El precio del producto es: ${price}</p>
        <p>El descuento es de: ${discount}%</p>
        <p>El descuento en dinero es de: ${moneyDiscounted}</p>
        <p>El precio con descuento es de: ${priceWithDiscount}</p>
    `
})