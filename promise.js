const data = () => new Promise((resolve, reject) => {
    const res = {
        'name': 'Vansh',
        'email': "vansh@gmail.com"
    }
    if (res) {
        resolve(res)
    }
    else {
        reject("Not Found")
    }
})

data()
    .then((d) => {
        return JSON.stringify(d)
    })
    .then((d) => {
        return JSON.parse(d)
    })
    .then((d) => {
        console.log(d);

    })
    .catch((e) => {
        console.log(e);
    })