const calculator = document.querySelector('.calculator')
let numbers = document.getElementsByClassName("number")
let display = document.getElementById('display')
let equals = document.getElementById('equals')
let operations = document.getElementsByClassName("operation")
let clear = document.getElementById('clear')
let sign=document.getElementById('sign')

let firstNumber
let first = []
let second = []
let secondNumber
let currentOperation
let result
let firstNumberDisplay = document.getElementById('display');
let newFirst
let newSecond
let arr = Array.from(numbers);

function add(a, b) {
    display.innerText = ( a + b ) 
}
function subtract(a, b) {
    display.innerText =  a - b
}

function multiply(a, b) {
    display.innerText =  a * b
}

function divide(a, b) {
    if (a === 0) {
        display.innerText =  "can't divide by zero"
    } else {
        display.innerText =    a / b
    }
}


//make an array out of the number buttons
//add an event listener so when they are clicked, the value of the button clicked is saved to firstNumber


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


//if operator is pressed
//collect new array
  // let tea = firstNumberDisplay.append(firstNumber)
   
    //let firstNumberValue = firstNumberDisplay.textContent
    //console.log(firstNumberValue)
    //tea = 
    //console.log(tea)
    //secondNumber = e.target.value

    //firstNumber.appendNumber(firstNumber.innerText)

    

arr.forEach(numbers => numbers.addEventListener('click', (e) => {
    if (!currentOperation=="") {
        firstNumber = e.target.value
        first.push(firstNumber)
         newFirst = parseFloat(first.join(""))
        console.log(newFirst)
        display.innerText=newFirst
    } else {
        secondNumber = e.target.value
        second.push(secondNumber)
        console.log(second)
         newSecond = parseFloat(second.join(""))
        console.log(newSecond)
        display.innerText=newSecond

    }


  
}))

equals.addEventListener('click', (e) =>{
    if (currentOperation==='+')
    add(newFirst, newSecond)
    if (currentOperation==='-')
    subtract(newFirst, newSecond)
    if (currentOperation==='*')
    multiply(newFirst, newSecond)
    if (currentOperation==='/')
    divide(newFirst, newSecond)
})

clear.addEventListener('click', (e) =>{
    display.innerText="Display!"
    firstNumber=""
    first=[]
    console.log(newFirst)
    secondNumber=""
    second=[]
    console.log(newSecond)
    currentOperation=""
})

sign.addEventListener('click', (e)=>{
    
})