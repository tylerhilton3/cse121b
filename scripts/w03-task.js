/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
};


function addNumbers () {
    let addNumber1 = parseInt(document.querySelector("#add1").value);
    let addNumber2 = parseInt(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function (number1, number2) {
    return number1 - number2;
};


let subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2)
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers)

/* Arrow Function - Multiply Numbers */

let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value)
    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2)}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers)

/* Open Function Use - Divide Numbers */

let divide = (number1, number2) => number1 / number2;



let divideNumbers = function ()  {
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
};
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers)

/* Decision Structure */
const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector("#year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
document.querySelector('#array').textContent = numbers;
/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbers.filter(number => number % 2);
/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbers.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbers.reduce((sum, number) => sum + number, 0);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbers.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbers.map(number => number * 2).reduce((sum, number) => sum + number, 0);