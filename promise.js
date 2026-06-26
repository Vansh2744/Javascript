const data = () => new Promise((resolve, reject) => {
    setTimeout(() => {
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
    }, 3000)
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

const display = async () => {
    const d = await data();
    console.log("Completed");
    console.log(d);
}
display()