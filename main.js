let numbers = document.getElementsByClassName("number")
let addition
let subtraction
let multiplication
let division

let operations = document.getElementsByClassName("operation")

let firstNumber = "0"
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
    console.log(firstNumber + firstNumberDisplay.append(firstNumber))

    let tea = firstNumberDisplay.textContent
    console.log(tea)
    //tea = 
    //console.log(tea)
    //secondNumber = e.target.value

    //firstNumber.appendNumber(firstNumber.innerText)
}))

/*} else {
    arr.forEach(numbers => numbers.addEventListener('click', (e) => {
        secondNumber = e.target.value
        firstNumberDisplay.textContent = firstNumber + secondNumber

        console.log(firstNumber)
        console.log(secondNumber)
    }))

}
console.log(firstNumberDisplay)*/
