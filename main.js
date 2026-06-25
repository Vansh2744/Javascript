let heading = document.querySelector("#main-heading")
let btn = document.querySelector(".change-text")
let names = document.querySelector("#names")
let firstList = document.querySelector("#first-change")

let addBtn = document.querySelector(".add")
let removeBtn = document.querySelector(".remove")

let todos = document.querySelector("#todos")
let todo = document.querySelector("#todo")

let listItems = document.querySelector('.listItems')

let form = document.querySelector("#myForm")
let input = document.querySelector("#name")

let load = document.querySelector("#load")

addBtn.addEventListener("click", function () {
    let l = document.createElement("li")
    l.textContent = todo.value
    todos.appendChild(l)
    todo.value = ""
})

removeBtn.addEventListener("click", function () {
    todos.lastElementChild.remove()
})

listItems.addEventListener("click", function (e) {
    console.log(e.target.textContent);
})

heading.addEventListener("dblclick", function () {
    console.log("Folder Open");
})

form.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(input.value);
})

document.addEventListener("DOMContentLoaded", function () {
    load.textContent = ""
})

let toggle = false

btn.addEventListener("click", function () {
    // if (toggle) {
    //     heading.style.color = ""
    //     toggle = false
    // }
    // else {
    //     heading.style.color = "red"
    //     toggle = true
    // }

    heading.classList.toggle("highlight")
})