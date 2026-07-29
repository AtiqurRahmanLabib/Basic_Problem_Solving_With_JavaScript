//  problem 10 ==> Sum and avarage of an array

const arry = [10, 10, 10, 10];
let sum = 0;
let avarage = 0;

// Without function

// for(let i = 0; i < arry.length; i++){
//     sum += arry[i]
//     avarage = sum / arry.length;
// }

// With function

function checkAvarage(arry) {
  for (let i = 0; i < arry.length; i++) {
    sum += arry[i];
    avarage = sum / arry.length;
  }
  return avarage;
}

console.log(checkAvarage(arry))