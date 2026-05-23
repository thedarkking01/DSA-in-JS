// write a function that searches for an elment in am array and retuen the index , if the element is not found return -1

// function searchElement(arr, element) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return i;
//         }
//     }
//     return -1;
// }

// const arr = [1, 2, 3, 4, 5];
// const element = 1;
// const index = searchElement(arr, element);
// console.log(index);

// write a function that return the number of negative numbers in an array

// function countNegativeNumbers(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             count++;
//         }
//     }
//     return count;
// }

// const arr = [2, -9, 17, 0, 1, -10, -4, 8];
// const negativeCount = countNegativeNumbers(arr);
// console.log(negativeCount);

// write a function that return the largest number in an array

// function findLargestNumber(arr) {
//     let largest=arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// const arr = [2, 9, 17, 0, 1, 10, 4, 8];
// const largestNumber = findLargestNumber(arr);
// console.log(largestNumber);

// write a function that return the smallest number in an array

function findSmallestNumber(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
const arr = [2, 9, 17, 0, 1, 10, 4, 8];
const smallestNumber = findSmallestNumber(arr);
console.log(smallestNumber);
