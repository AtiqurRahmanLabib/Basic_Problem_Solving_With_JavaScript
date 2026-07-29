// Find the largest number

const arry = [500, 600, 700, 400, 10, 20, 1000, 15640];
let largest = arry[0];

// without funcction

for (let i = 1; i < arry.length; i++) {
  let currentElement = arry[i];
  if (currentElement > largest) {
    largest = currentElement;
  }
}
console.log(largest);

// with function

function isLowest(num) {
  for (let i = 1; i < arry.length; i++) {
    let currentElement = arry[i];
    if (currentElement > largest) {
      largest = currentElement;
    }
  }
  return largest
}
console.log(isLowest(arry))