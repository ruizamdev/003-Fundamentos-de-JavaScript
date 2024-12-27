// CONSTANTS
const inputPrice = document.getElementById('inputPrice'); // Precio de netrada
const inputCupon = document.getElementById('inputCupon'); // Cupon de entrada
const submitButton = document.getElementById('submitButton'); // Boton de enviar información.
const divResult = document.getElementById('divResult'); // Tag div para mostrar resultado al usaurio.
const cupons = {
    'riquillo': 92,
    'piky': 90,
    'rambo': 75,
    'armandoMariscalRuiz': 65,
    'silverioDurango': 50,
    'ruiz7am': 48,
    'armandoRuiz': 35,
}

function calcularPrecioConDescuento(){
    const price = Number(inputPrice.value);
    const cupon = inputCupon.value;
    
    if (!price || !cupon) {
        divResult.innerHTML = 'Llena el formulario caraverga';
        return;
    }
    let discount;
    if (cupons[cupon]){
        discount = cupons[cupon];
        const moneyDiscounted = (discount * price)/100;
        const priceWithDiscount = price - moneyDiscounted;
        divResult.innerHTML = ` 
            <p>Gracias por usar mi programa</p>
            <h1>Checa el descuento que obtendras con tu cupon</h1>
            <p>El codigo de tu cupon es: ${cupon}</p>
            <p>El descuento que obtines es de: ${discount}%</p>
            <p>El precio del producto que elegiste es de $${price}</p>
            <p>El monto del descuento es: $${moneyDiscounted}</p>
            <p>El precio final de tu producto es de : $${priceWithDiscount}</p>
        `
    } else {
        divResult.innerHTML = `El cupon ${cupon} no es valido`
    }
}