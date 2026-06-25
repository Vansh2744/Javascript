const info = {
    name:"Vansh",
    email: 'vansh@gmail.com',
    age:23,
    display(){
        console.log(`Name: ${this.name} Email: ${this.email} Age: ${this.age}`);
        
    }
}

info.display()

const obj = info.display.bind({name:"Aman", email:"aman@gmailcom", age:22})

obj()