function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, operation) {
    if (operation === '+') { return add(num1, num2) }
    if (operation === '-') { return subtract(num1, num2) }
    if (operation === 'x') { return multiply(num1, num2) }
    if (operation === '/') { return divide(num1, num2) }
}
console.log(operate(1, 2, divide))

let numbers = [0]
let operators = ['+']
let lastClickIsNumber = false
let lastClickIsEquals = false
let displayString = ""


display = document.getElementsByClassName('display')[0]
numberButtons = Array.from(document.getElementsByClassName('number'))
operatorButtons = Array.from(document.getElementsByClassName('operator'))
equalsButton = Array.from(document.getElementsByClassName('equals'))[0]
clearButton = Array.from(document.getElementsByClassName('clear'))[0]


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (lastClickIsNumber) { displayString += button.innerText }
        else { displayString = button.innerText }
        display.innerText = displayString
        console.log(numbers)
        lastClickIsNumber = true
        lastClickIsEquals = false
    })
})


operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        lastClickIsNumber = false
        if(!lastClickIsEquals) {numbers.push(parseInt(displayString))
        lastClickIsEquals = true
        let answer = operate(numbers[numbers.length-2], numbers[numbers.length-1], operators[operators.length-1])
        numbers.push(answer)
        display.innerText = numbers[numbers.length-1].toString()}
        operators.push(button.innerText)
    })
})

equalsButton.addEventListener('click', () => {
    lastClickIsNumber = false
    lastClickIsEquals = true
    numbers.push(parseInt(displayString))
    let answer = operate(numbers[numbers.length-2], numbers[numbers.length-1], operators[operators.length-1])
    numbers.push(answer)
    display.innerText = numbers[numbers.length-1].toString()

})

clearButton.addEventListener('click', () => {
    numbers = [0]
    operators = ['+']
    lastClickIsNumber = false
    lastClickIsEquals = false
    displayString = ""
    display.innerText = displayString
})

