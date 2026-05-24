// write a program to count the number of digits in a given number

function countDigits(num) {
    if (num === 0) {
        return 1;
    }

    num = Math.abs(num); // Handle negative numbers by taking the absolute value

    let count = 0;
    while (num !== 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
    }
const number = -85;
const digitCount = countDigits(number);
console.log(digitCount);