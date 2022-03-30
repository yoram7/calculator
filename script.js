// -----------------------1-----------------------//
const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        // console.log(event.target.value)
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})
// -----------------------2-----------------------//
const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number
}
// -----------------------3-----------------------//
let pervNumber = ''
let calculationOperator = ''
let currentNumber = '0'
// -----------------------4-----------------------//
const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number
    }else {
        currentNumber += number
    }
}
// -----------------------Operator-----------------------//
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener('click', (event) =>{
        InputOperator(event.target.value)
    })
})
// -----------------------Definition Input Operator-----------------------//
const InputOperator = (operator) => {
    if (calculationOperator === ''){
        pervNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}
// -----------------------Calculate-----------------------//
const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener('click', (event) => {
    calculate()
    updateScreen(currentNumber)
})
// -----------------------Function Calculate-----------------------//
const calculate = () => {
    let = ''
    switch (calculationOperator) {
        case "+":
            result = parseFloat(pervNumber) + parseFloat(currentNumber)
            break;
        case "-":
            result = parseFloat(pervNumber) - parseFloat(currentNumber)
            break;
        case "*":
            result = parseFloat(pervNumber) * parseFloat(currentNumber)
            break;
        case "/":
            result = parseFloat(pervNumber) / parseFloat(currentNumber)
            break;
    
        default:
            break;
    }
    currentNumber = result
    calculationOperator = ''
}
// -----------------------AC Button-----------------------//
const clearBtn = document.querySelector(".all-clear")

clearBtn.addEventListener('click', (event)=>{
    clearAll()
    updateScreen(currentNumber)
})
// -----------------------Definition AC Button-----------------------//
const clearAll = () => {
    pervNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
// -----------------------Decimal-----------------------//
const decimal = document.querySelector(".decimal")

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
// -----------------------Input Decimal-----------------------//
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
