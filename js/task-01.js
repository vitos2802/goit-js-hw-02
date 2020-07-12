"use strict";
const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    const number = i + 1;
    const result = `${number}-${array[i]}`;
    console.log(result);
  }
};
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
