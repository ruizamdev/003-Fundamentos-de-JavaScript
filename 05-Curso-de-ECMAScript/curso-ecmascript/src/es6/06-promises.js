const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!!')
        } else {
            reject('Whoops!')
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));