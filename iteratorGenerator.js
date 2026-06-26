function* info() {
    yield "Vansh"
    yield "Aman"
    yield "Kartik"
}

const d = info()
const d1 = info()

console.log(d.next().value);
console.log(d.next().value);
console.log(d.next().value);

console.log(d1.next().value);
