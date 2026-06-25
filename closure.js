const info = () => {
    let names = ""
    let count = 0
    const name = (n) => {
        names += `${n} `
        count++
        return `${names} ${count}`
    }
    return name
}

let i = info()

console.log(i("Vansh"));
console.log(i("Aman"));
console.log(i("Rahul"));
console.log(i("Kartik"));
console.log(i("Naman"));

