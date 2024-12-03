# Fundamentos de manejo de arrays
## forEach

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
