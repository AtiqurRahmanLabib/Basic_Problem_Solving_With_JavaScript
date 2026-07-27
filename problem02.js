// Problem 2 ==> Sum of a Range of numbers (1 to N)

// Without function
const number = 8;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum)

// With function
function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
    }
    return sum
}


const result = sumOfNumbers(number);
console.log(result)