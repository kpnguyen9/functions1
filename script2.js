// function kevinsFunc(name) {
//   return "whats up " + name;
// }

// let greeting = kevinsFunc("Alan");

// const kevinsFunc2 = function (name) {
//   return "whats up " + name;
// };

// let greeting2 = kevinsFunc2("John");

// console.log(greeting);
// console.log(greeting2);

// let add = (num1, num2) => num1 + num2;
// //same as:
// // let add = function (a, b) {
// //     return a + b;
// //   };

// let subtract = (num1, num2) => num1 - num2;
// //same as:
// // let subtract = function (x, y) {
// //   return a - b;
// // };

// let calc = function (num1, num2, operation) {
//   return operation(num1, num2);
// };

// let addResult = calc(24, 6, add);
// let subtractResult = calc(20, 8, subtract);

// // console.log(addResult);
// // console.log(subtractResult);

// let arr2 = [3, 4, 2, 6, 4, 9, 10];

// arr2.forEach((element) => console.log(element));

// arr2.forEach(function (element) {
//   console.log(element);
// });

// let newArr = arr2.map((x) => x * 6);

// console.log(newArr);

// let greatThan3Arr = arr2.filter((x) => x > 3);

// //aka
// //arr2.filter(function(x){
// //  return x > 3;
// //})

// console.log(greatThan3Arr);

let newArr = [16, 3, 54, 68, 23];

newArr.sort((a, b) => {
  if (a - b > 0) {
    return -1;
  } else if (a - b < 0) {
    return 1;
  } else {
    return 0;
  }
});

// console.log(newArr);

let result = newArr.reduce(function (acc, el) {
  return acc + el;
});

console.log(result);
