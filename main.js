const calculator = document.querySelector('.calculator')
let numbers = document.getElementsByClassName("number")
let addition
let subtraction
let multiplication
let division

let operations = document.getElementsByClassName("operation")

let firstNumber
let first = []
let secondNumber
let currentOperation
let result
let firstNumberDisplay = document.getElementById('display');
let firstNumberValue
let arr = Array.from(numbers);


//make an array out of the number buttons
//add an event listener so when they are clicked, the value of the button clicked is saved to firstNumber


arr.forEach(numbers => numbers.addEventListener('click', (e) => {
    firstNumber = e.target.value

    // let tea = firstNumberDisplay.append(firstNumber)
    first.push(firstNumber)
    console.log(first)

    //let firstNumberValue = firstNumberDisplay.textContent
    //console.log(firstNumberValue)
    //tea = 
    //console.log(tea)
    //secondNumber = e.target.value

    //firstNumber.appendNumber(firstNumber.innerText)
}))

let operator = Array.from(operations);


operator.forEach(operations => operations.addEventListener('click', (e) => {

    currentOperation = e.target.value
    if (currentOperation === "+") {
        console.log("add")
    } else if (currentOperation === "-") {
        console.log('subtract')
    } else if (currentOperation === '*') {
        console.log('multiply')
    } else if (currentOperation === '/') {
        console.log('divide')
    }

}))


