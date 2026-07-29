// problem 11 ==>

const arry = [5, 60, 55, 80, 45, 51];
const value = 51;
let filteredValues = [];

// Without function

// for(let i = 0; i < arry.length; i ++){
//     if(arry[i] > value) {
//         filteredValues.push(arry[i])
//     }
// }
// console.log(filteredValues)

// With function

function filterTheValue(arry) {
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] > value) {
      filteredValues.push(arry[i]);
    }
  }
  return filteredValues;
}

console.log(filterTheValue(arry))