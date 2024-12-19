const { id } = require("date-fns/locale");

// constante que almacenará un array de objetos productos alimentos, cada objeto con tres propiedades, title, price y id
const products = [
    { title: 'Pizza', price: 121, id: "🍕" },
    { title: 'Burger', price: 123, id: "🍔" },
    { title: 'Hot cakes', price: 111, id: "🥞" },
    { title: 'Hot-dog', price: 234, id: "🌭" },
    { title: 'Tacos', price: 432, id: "🌮" }
];

// constante myProducts
const myProducts = [];
console.log('products:', products);
console.log('myProducts:', myProducts);
console.log("-".repeat(10));
const productIndex = products.findIndex(item => item.id === "🍔");

if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}

console.log('products:', products);
console.log('myProducts:', myProducts);
console.log("-".repeat(10));

// Como eliminar un elemento de un array sin mutar el array original

// Update
const productsV2 = [
    { title: 'Pizza', price: 121, id: "🍕" },
    { title: 'Burger', price: 123, id: "🍔" },
    { title: 'Hot cakes', price: 111, id: "🥞" },
    { title: 'Hot-dog', price: 234, id: "🌭" },
    { title: 'Tacos', price: 432, id: "🌮" }
]

const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: "Deliciosos hot cakes",
    }
}

const productIndexV2 = productsV2.findIndex(item => item.id === update.id)
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
}

console.log(productsV2)