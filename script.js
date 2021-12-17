// function sayHello(name) {
//   console.log("Whats up " + name);
// }

// // sayHello("Luke");

// let greet = function () {
//   console.log("Greetings");
// };

// // greet();

// setTimeout(function () {
//   console.log("Hello timeout");
// }, 2500);

// let wait2 = (howlong) => {
//   console.log("arrow function");
// };

let arr = [1, 2, 24, 100, 5];

const map1 = arr.map((x) => x * 2);

const map2 = arr.map(function (x) {
  return x * 2;
});

console.log(map1, map2);
