// Factorial Of a number

// Without function
let number = 4;
let result = 1;
// for (let i = 1; i <= number; i++) {
//   console.log("i =>", i);
//   result = i * result;
// }
// console.log(result);

function checkFactorialOfNumber(number) {
  for (let i = 1; i <= number; i++) {
    result = i * result;
  }
  return result;
}
const functionResult = checkFactorialOfNumber(number);
console.log(functionResult)