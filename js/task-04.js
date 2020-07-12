"use strict";
const formatString = function (string) {
  const stringLength = string.length;

  if (stringLength > 40) {
    const stringMod = string.slice(0, 41).split(" ");
    stringMod.push("...");
    const result = stringMod.join(" ");
    return result;
  }
  return string;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
