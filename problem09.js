// Find the Lowest number

const arry = [500, 600, 700, 400, 10, 20, 1000, 15640];
let lowest = arry[0];

// without funcction

// for (let i = 1; i < arry.length; i++) {
//   let currentElement = arry[i];
//   if (currentElement > largest) {
//     largest = currentElement;
//   }
// }
// console.log(largest);

// with function

function isLowest(num) {
  for (let i = 1; i < arry.length; i++) {
    let currentElement = arry[i];
    if (currentElement < lowest) {
      lowest = currentElement;
    }
  }
  return lowest;
}

const result = isLowest(arry)
console.log(result)