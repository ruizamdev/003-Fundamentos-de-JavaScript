const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!!'), 2000)
      : reject(new Error('Error!'));
  })
}

const anotherFn = async() => {
  const somthing = await fnAsync();
  console.log(somthing)
  console.log('Hello!')
}

console.log('Before');
anotherFn();
console.log('After')