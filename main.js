let numbers = document.getElementsByClassName("number")
let firstNumber
let secondNumber
let currentOperation
let result
let firstNumberDisplay = document.getElementById('display');
let arr = Array.from(numbers);
arr.forEach(numbers => numbers.addEventListener('click', (e) => {
    firstNumber = e.target.value
    console.log(firstNumber)

}))


//function pressed() {
//}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b === 0) {
        return "can't divide by zero"
    } else {
        a / b
    }
}