const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort(); // ordena alfabeticamente
console.log(months);

const numbers = [1, 30, 4, 21, 100000]
numbers.sort((a, b) => b - a);
console.log(numbers)

const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana', 'zebra'];
words.sort()
console.log(words)

const orders = [
    {
        customerName: 'Armando',
        total: 600,
        delivered: true,
    },
    {
        customerName: 'Rebeca',
        total: 200,
        delivered: false,
    },
    {
        customerName: 'Jorge',
        total: 100,
        delivered: true,
    },
    {
        customerName: 'Carlos',
        total: 300,
        delivered: false,
    },
    {
        customerName: 'Miguel',
        total: 400,
        delivered: true,
    }
]

orders.sort((a,b) => b.total - a.total)
console.log(orders);