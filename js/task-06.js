"use strict";
let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Enter number:");
  if (isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  numbers.push(input);
} while (input !== null);

const numbersSum = (values) => {
  if (values.length > 0) {
    for (const value of values) {
      total += Number(value);
    }
  }
  console.log(`Общая сумма чисел равна ${total}`);
};

numbersSum(numbers);
