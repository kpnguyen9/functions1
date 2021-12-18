// function printNumbers(a, b) {
//   for (let i = a; i <= b; i++) {
//     console.log(i);
//   }
// }

// function printSquare(num) {
//   for (let i = 1; i <= num; i++) {
//     console.log("---");
//   }
// }
// printSquare(5);

// let leetWord = "";
// function leetSpeak(word) {
//   let arr = word.split("");
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "A") {
//       leetWord += "4";
//     } else if (arr[i] === "E") {
//       leetWord += "3";
//     } else if (arr[i] === "G") {
//       leetWord += "6";
//     } else if (arr[i] === "I") {
//       leetWord += "1";
//     } else if (arr[i] === "O") {
//       leetWord += "0";
//     } else if (arr[i] === "S") {
//       leetWord += "5";
//     } else if (arr[i] === "T") {
//       leetWord += "7";
//     } else {
//       leetWord += arr[i];
//     }
//   }
// }

// leetSpeak("HELLO");
// console.log(leetWord);

// let longWord = "";
// function longLongVowels(word) {
//   let arr = word.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr[i] === "a" ||
//       arr[i] === "e" ||
//       arr[i] === "i" ||
//       arr[i] === "o" ||
//       arr[i] === "u"
//     ) {
//       longWord += arr[i].repeat(5);
//     } else {
//       longWord += arr[i];
//     }
//   }
// }

// longLongVowels("Good");
// console.log(longWord);

// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

// const positiveNumbers = (arr) => arr.filter((num) => num > 0);

const abc = function positiveNumbers(arr) {
  return arr.filter((num) => num > 0);
};

// positiveNumbers([1, -3, 5, -3, 0]);
console.log(positiveNumbers([1, -3, 5, -3, 0]));
// positiveNumbers([1, 2, 3]);
// positiveNumbers([-1, -2, -3]);
