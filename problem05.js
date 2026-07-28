// // Problem 05 ==> Reverse a string

const word = "love";
let reversWord = "";

// Without function

// for (let i = word.length - 1; i >= 0; i--) {
//   console.log(i);
//   latter = word[i];
//   console.log(latter);
//   reversWord += latter;
// }
// console.log(reversWord);

// With function
function reverseWord(word) {
  for (let i = word.length - 1; i >= 0; i--) {
    latter = word[i];
    reversWord += latter;
  }
  return reversWord
}
const result = reverseWord(word)
console.log(result)
