/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){   
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2){   
    return number1 - number2;
};

const subtractNumbers = function(){
    const subtractNumber1 = Number(document.querySelector('#subtract1').value);
    const subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => {
    return number1 * number2;
  };
  
  const multiplyNumbers = () => {
    // Get the values of HTML form controls
    const factor1 = Number(document.querySelector('#factor1').value);
    const factor2 = Number(document.querySelector('#factor2').value);
  
    document.querySelector('#product').value = multiply(factor1, factor2);
  };
  
  document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
  
/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
  }
  
  const divideNumbers = () => {
    // Get the values of HTML form controls
    const dividend = Number(document.querySelector('#dividend').value);
    const divisor = Number(document.querySelector('#divisor').value);
  
    document.querySelector('#quotient').value = divide(dividend, divisor);
  }
  
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  
/* Decision Structure */
const subtotalField = document.getElementById("subtotal");
const membershipCheckbox = document.getElementById("member");
const getTotalButton = document.getElementById("getTotal");
const totalSpan = document.getElementById("total");


getTotalButton.addEventListener("click", () => {

  const subtotalValue = parseFloat(subtotalField.value);

  const isMember = membershipCheckbox.checked;

  const totalAmount = isMember ? subtotalValue * 0.85 : subtotalValue;

  totalSpan.textContent = `Total: $${totalAmount.toFixed(2)}`;
});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.getElementById('array').textContent = numbersArray;

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(function(number){
  return number % 2 === 1;
});

document.getElementById('odds').textContent = oddNumbers;

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(function(number){
  return number % 2 === 0;
});

document.getElementById('evens').textContent = evenNumbers;

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce(function(total, number){
  return total + number;
}, 0);

document.getElementById('sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArrary = numbersArray.map(function(number){
  return number * 2;
});

document.getElementById('multiplied').textContent = multipliedArrary;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multipliedArrary.reduce(function(total, number){
  return total + number;
}, 0);

document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
