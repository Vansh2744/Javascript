const run1 = () => {
    setTimeout(() => {
        console.log("Waiting....");
    }, 3000)
    console.log("Hello");

}

const run2 = () => {
    console.log("Completed");

}

run1()
run2()
