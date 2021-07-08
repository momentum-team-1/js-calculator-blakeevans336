let currentInput = ""
    
const oneElement = document.getElementById("one")
oneElement.addEventListener('click', function (event) {
    console.log("number 1")
let output = document.querySelector('#output')
    currentInput = currentInput + "1"
    output.textContent = currentInput
})

const twoElement = document.getElementById("two")
twoElement.addEventListener('click', function(event) {
    console.log("number 2")
let output = document.querySelector('#output')
    currentInput = currentInput + "2"
    output.textContent = currentInput
})

const threeElement = document.getElementById ("three")
threeElement.addEventListener('click', function(event) {
    console.log("number 3")
let output = document.querySelector('#output')
    currentInput = currentInput + "3"
    output.textContent = currentInput
})

const fourElement = document.getElementById("four")
fourElement.addEventListener('click', function(event) {
    console.log("number 4")
let output = document.querySelector('#output')
    currentInput = currentInput + "4"
    output.textContent = currentInput
})

const fiveElement = document.getElementById("five")
fiveElement.addEventListener('click', function(event) {
    console.log("number 5")
let output = document.querySelector('#output')
    currentInput = currentInput + "5"
    output.textContent = currentInput
})

const sixElement = document.getElementById("six")
sixElement.addEventListener('click', function(event){
    console.log("number 6")
let output = document.querySelector('#output')
    currentInput = currentInput + "6"
    output.textContent = currentInput
})

const sevenElement = document.getElementById("seven")
sevenElement.addEventListener('click', function(event) {
    console.log("number 7")
let output = document.querySelector('#output')
    currentInput = currentInput + "7"
    output.textContent = currentInput
})

const eightElement = document.getElementById("eight")
eightElement.addEventListener('click', function(event) {
    console.log("number 8")
let output = document.querySelector('#output')
    currentInput = currentInput + "8"
    output.textContent = currentInput
})

const nineElement = document.getElementById("nine")
nineElement.addEventListener('click', function(event) {
    console.log("number 9")
let output = document.querySelector("#output")
    currentInput = currentInput + "9"
    output.textContent = currentInput
})

const zeroElement = document.getElementById("zero")
zeroElement.addEventListener('click', function(event) {
    console.log("number 0")
let output = document.querySelector("#output")
    currentInput = currentInput + "0"
    output.textContent = currentInput
})

const plusElement = document.getElementById("plus")
plusElement.addEventListener('click', function (event) {
    console.log("x + y")
let output = document.querySelector("#output") 
    currentInput = currentInput + "+"
    output.textContent = currentInput 
})

const decElement = document.getElementById("dec")
decElement.addEventListener('click', function(event) {
    console.log("decimal")
let output = document.querySelector("#output")
    currentInput = currentInput + "."
    output.textContent = currentInput
})

const equalElement = document.getElementById ("equal")
equalElement.addEventListener('click', function (event) {
    console.log("evaluate")
    let output = document.querySelector("#output")
        currentInput=String(eval(currentInput))
        output.textContent = currentInput
})   

const slashElement = document.getElementById("slash")
slashElement.addEventListener('click', function(event) {
    console.log("division")
    let output = document.querySelector("#output")
        currentInput = currentInput + "/"
        output.textContent = currentInput
})

const multEl = document.getElementById("times")
multEl.addEventListener('click', function(event) {
    console.log("multiply")
let output = document.querySelector("#output")
    currentInput = currentInput + "*"
    output.textContent = currentInput
})

const minusEl = document.getElementById("minus")
minusEl.addEventListener('click', function(event) {
    console.log("division")
let output = document.querySelector("#output")
    currentInput = currentInput + "-"
    output.textContent = currentInput
})

const clearElement = document.getElementById("clear")
clearElement.addEventListener('click', function (event) {
    console.log("clear all")
    let output = document.querySelector ("#output")
        currentInput = ""
        output.textContent = currentInput
})