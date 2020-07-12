"use strict";
let input;
const numbers = [];
let total = 0;

const addNumbers = () => {
  numbers.push(input);
};

const numbersSum = () => {
  if (numbers.length > 0) {
    for (const number of numbers) {
      total += +number;
    }
  }
  console.log(`Общая сумма чисел равна ${total}`);
};

do {
  input = prompt("Enter number:");
  if (isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  addNumbers();
} while (input !== null);

numbersSum();
