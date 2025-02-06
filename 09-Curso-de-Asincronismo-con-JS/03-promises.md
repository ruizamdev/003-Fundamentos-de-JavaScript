# Promesas

## ¿Qué son las promesas?

```javascript
const promise = new Promise(function(resolve, reject){
  resolve('Resolved!')
})

const cows = 9;

const countCows = new Promise(function(resolve, reject){
  if(cows > 10) {
    resolve(`We have ${cows} cows on the farm, enough for the production, Aproved!`)
  } else {
    reject(`We have ${cows} there are not enough for the production, Rejected!`)
  }
});

countCows.then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error);
})
```

```javascript
export function delay(time, message) {
   return new Promise((resolve, reject) =>{
       window.setTimeout(() =>{
        resolve (message);
       }, time);
       
    });
}
```