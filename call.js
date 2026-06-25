function info(name, email){
    console.log(`Name:${name} Email:${email} Age: ${this.age}`);
}

info.call({age:23}, "Vansh","vansh@gmail.com")