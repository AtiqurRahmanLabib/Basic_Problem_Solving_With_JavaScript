// Check the vaoels

const vaoel = "aeiou";
const str = "Atiqur Rahman Labib";
let count = 0;

// Without function

// for (let i = 0; i < str.length; i++) {
//   let latter = str[i];
//   console.log("latter:", latter, "=", i);
//   if (vaoel.includes(latter)) {
//     count++;
//   }
//   console.log("value of count", count);
// }

// With function
function checkVaoels(str) {
  for (let i = 0; i < str.length; i++) {
    let latter = str[i];
    if (vaoel.includes(latter)) {
      count++;
    }
  }
  return count;
}

console.log(checkVaoels(str));
