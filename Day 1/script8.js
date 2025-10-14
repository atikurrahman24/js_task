let num1 = 10;
let num2 = 5;
let operator = "-";
let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
} else {
  result = "Invalid operator";
}

console.log(result);