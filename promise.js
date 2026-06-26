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

// data()
//     .then((d) => {
//         return JSON.stringify(d)
//     })
//     .then((d) => {
//         return JSON.parse(d)
//     })
//     .then((d) => {
//         console.log(d);
//         console.log("Completed");

//     })
//     .catch((e) => {
//         console.log(e);
//     })

// const display = async () => {
//     const d = await data();
//     console.log(d);
//     console.log("Completed");
// }

// display()

const data1 = () => new Promise((resolve, reject) => {
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

const data2 = () => new Promise((resolve, reject) => {
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

const display = async () => {
    [d1, d2] = await Promise.all([data1(), data2()])

    console.log(d1);
    console.log(d2);

}

display()