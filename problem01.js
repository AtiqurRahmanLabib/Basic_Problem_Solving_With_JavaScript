// Problem 1 ==> Check if a number even or odd 

// Without function
const number = 4;

if (number % 2 === 0) {
    console.log('Even ==> ', number)
}
else {
    console.log('Odd ==> ', number)
}

// With function
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return console.log('Even ==>', number)
    }
    else {
        return console.log('Odd ==> ', number)
    }
}

checkEvenOrOdd(number)