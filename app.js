const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
const displays = document.querySelector('.display')
let number1 = null
let number2 = null
let operator = ''
let nextNumber = false
calculator.addEventListener(
  'click',
  (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    const buttonClicked = event.target
    if (!buttonClicked.classList.contains('button')) return

    const buttonValue = buttonClicked.innerText

    if (buttonClicked.classList.contains('number')) {
      if (nextNumber) {
        displays.textContent = ''
        nextNumber = false
      }
      displays.textContent = displays.textContent + buttonValue
      console.log(event.target.innerText)
    }
    if (buttonClicked.classList.contains('operator')) {
      if (number1 === null) {
        number1 = parseFloat(displays.textContent)
      } else if (operator) {
        number2 = parseFloat(displays.textContent)
        number1 = performCalculation(number1, number2, operator)
        displays.textContent = number1
      }
      operator = buttonValue // Store the clicked operator
      nextNumber = true // Set nextNumber flag to true to clear the display on next input
    }
    if (buttonClicked.classList.contains('equals')) {
      if (number1 !== null && operator !== '') {
        number2 = parseFloat(displays.textContent)
        number1 = performCalculation(number1, number2, operator)
        displays.textContent = number1
        operator = '' // Reset the operator
      }
    }
    if (buttonValue === 'C') {
      displays.textContent = ''
      number1 = null
      number2 = null
      operator = ''
      nextNumber = false
    }
  }

  // Do something with this operator
)
const performCalculation = (num1, num2, operator) => {
  if (operator === '+') {
    number2 = null
    return num1 + num2
  } else if (operator === '-') {
    number2 = null
    return num1 - num2
  } else if (operator === '*') {
    number2 = null
    return num1 * num2
  } else if (operator === '/') {
    number2 = null
    return num1 / num2
  } else {
    number2 = null
    return num1
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    //console.log(event.target.innerText)
    // Future logic to capture the button's value would go here...
  })
})
