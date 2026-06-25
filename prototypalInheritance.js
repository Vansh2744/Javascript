function Info(name) {
    this.name = name
}

Info.prototype.card = function () {
    console.log(`Hello ${this.name} how are you`);
}

const display = new Info("Vansh")
display.card()